var geometry, mesh;
var controls;

var mesh = null;
var dummy = new THREE.Object3D();

const color = 0xFFFFFF;
var material = new THREE.MeshLambertMaterial({
	emissive: color, 
	emissiveIntensity: 1, 
	blending: THREE.AdditiveBlending, 
	depthWrite: false, 
	opacity: 0.01, 
	transparent: true
});

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.set(0, 0, 150);

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

controls = new THREE.OrbitControls(camera, renderer.domElement);

var stats = new Stats();
stats.showPanel( 0 ); // 0: fps, 1: ms, 2: mb, 3+: custom
stats.domElement.style.cssText = 'position:absolute;top:22px;left:0px;';
document.body.appendChild( stats.dom );
var stats1 = new Stats();
stats1.showPanel( 1 ); // 0: fps, 1: ms, 2: mb, 3+: custom
stats1.domElement.style.cssText = 'position:absolute;top:22px;left:80px;';
document.body.appendChild( stats1.dom );
var stats2 = new Stats();
stats2.showPanel( 2 ); // 0: fps, 1: ms, 2: mb, 3+: custom
stats2.domElement.style.cssText = 'position:absolute;top:22px;left:160px;';
document.body.appendChild( stats2.dom );

var gui = new dat.GUI();

const equations = { No: THREE.NoBlending, Normal: THREE.NormalBlending, Add: THREE.AdditiveBlending, Subtract: THREE.SubtractiveBlending, Multiply: THREE.MultiplyBlending };
volconfig = { 
	opacity_value: 0.01,
	blending_mode: THREE.NoBlending,
};

var cam = gui.addFolder('Camera');
gui.add( volconfig, 'opacity_value', 0, 1 ).onChange( updateUniforms );
gui.add( volconfig, 'blending_mode', equations ).onChange( updateBlending );
cam.open();

function updateUniforms() {
	material.opacity = volconfig.opacity_value;
};

function updateBlending() {
	material.blending = volconfig.blending_mode;
};

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
	stats.update();
	stats1.update();
	stats2.update();
};

function addInstancedMesh(x1,y1,z1,x2,y2,z2) {
	mesh = new THREE.InstancedMesh(new THREE.BoxBufferGeometry(1,1,1), material, 10000);
	scene.add(mesh);
	Bresenham3D(x1,y1,z1,x2,y2,z2, mesh);
};

function read() {
	console.log("Reading file");
	document.getElementById('file').onchange = function(){
	var file = this.files[0];
	var reader = new FileReader();
	reader.onload = function(progressEvent){    
		var lines = this.result.split('\r');
			for(var line = 0; line < lines.length-1; line = line + 3){
				//console.log(lines[line+1]);
				//console.log(lines[line+2]);
				var point1 = lines[line+1].split("\t");
				var point2 = lines[line+2].split("\t");
				addInstancedMesh(Math.floor(point1[1]) * 10, Math.floor(point1[2]) * 10, Math.floor(point1[3] * 10),
								 Math.floor(point2[1]) * 10, Math.floor(point2[2]) * 10, Math.floor(point2[3] * 10));
				//console.log(Math.abs(Math.floor(point1[1])));
				//console.log(Math.abs(Math.floor(point1[2])));
				//console.log(Math.abs(Math.floor(point1[3])));
				//console.log(Math.abs(Math.floor(point2[1])));
				//console.log(Math.abs(Math.floor(point2[2])));
				//console.log(Math.abs(Math.floor(point2[3])));
				//console.log(txtArr);
				//for(var index = 0; index < txtArr.length; index++){
				//	console.log(txtArr[index]);
				//}
			}
		};
		reader.readAsText(file);
	};
}

function Bresenham3D(x1, y1, z1, x2, y2, z2, mesh){
    var i, dx, dy, dz, l, m, n, x_inc, y_inc, z_inc, err_1, err_2, dx2, dy2, dz2;
    var point = [-1,-1,-1];
	var index = 0;

    point[0] = x1;
    point[1] = y1;
    point[2] = z1;
    dx = x2 - x1;
    dy = y2 - y1;
    dz = z2 - z1;
    x_inc = (dx < 0) ? -1 : 1;
    l = Math.abs(dx);
    y_inc = (dy < 0) ? -1 : 1;
    m = Math.abs(dy);
    z_inc = (dz < 0) ? -1 : 1;
    n = Math.abs(dz);
    dx2 = l << 1;
    dy2 = m << 1;
    dz2 = n << 1;

    if ((l >= m) && (l >= n)) {
        err_1 = dy2 - l;
        err_2 = dz2 - l;
        for (i = 0; i < l; i++) {
			dummy.position.set(point[0], point[1], point[2]);
			dummy.updateMatrix();
			mesh.setMatrixAt(index, dummy.matrix );
			++ index;
            
			if (err_1 > 0) {
                point[1] += y_inc;
                err_1 -= dx2;
            }
            if (err_2 > 0) {
                point[2] += z_inc;
                err_2 -= dx2;
            }
            err_1 += dy2;
            err_2 += dz2;
            point[0] += x_inc;
        }
    } else if ((m >= l) && (m >= n)) {
        err_1 = dx2 - m;
        err_2 = dz2 - m;
        for (i = 0; i < m; i++) {
			dummy.position.set(point[0], point[1], point[2]);
			dummy.updateMatrix();
			mesh.setMatrixAt(index, dummy.matrix );
			++ index;
            
			if (err_1 > 0) {
                point[0] += x_inc;
                err_1 -= dy2;
            }
            if (err_2 > 0) {
                point[2] += z_inc;
                err_2 -= dy2;
            }
            err_1 += dx2;
            err_2 += dz2;
            point[1] += y_inc;
        }
    } else {
        err_1 = dy2 - n;
        err_2 = dx2 - n;
        for (i = 0; i < n; i++) {
			dummy.position.set(point[0], point[1], point[2]);
			dummy.updateMatrix();
			mesh.setMatrixAt(index, dummy.matrix );
			++ index;
            
			if (err_1 > 0) {
                point[1] += y_inc;
                err_1 -= dz2;
            }
            if (err_2 > 0) {
                point[0] += x_inc;
                err_2 -= dz2;
            }
            err_1 += dy2;
            err_2 += dx2;
            point[2] += z_inc;
        }
    }
	dummy.position.set(point[0], point[1], point[2]);
	dummy.updateMatrix();
	mesh.setMatrixAt(index, dummy.matrix );
	++ index;
	mesh.instanceMatrix.needsUpdate = true;
}

window.addEventListener('resize', function() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});


read();
addInstancedMesh()
animate();
