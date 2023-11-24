document.addEventListener('DOMContentLoaded', function () {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////		   BACK STAGE			//////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let points = new THREE.Points();
let test = 0;

const scale_factor = 10; // to convert unit from from mm to 0.1 mm (ex. 0.1 mm pixels x 10 turns to 1 0.1 mm)
var maxValue = -Infinity;
var minValue = Infinity;

let offset;

const appParams = {
	loader: 'Point cloud (MIP)',
	threshold: 1,
	voxels_num: '10000',
	scene_anim: true,			//TODO
	implosion_time: 2000, 		// [ms]
	explosion_time: 1000, 		// [ms]
	camera_fov: 40,
	light1: 1, 		// [ms]
	light2: 0, 		// [ms]
	rotationEnabled: false,
	backgroundColor: 0x000000,
	remove_LOR_EPD: function(){},

	setXY: function () {
		const length = camera.position.length();
		camera.position.x = 0;
		camera.position.y = 0;
		camera.position.z = length;
		camera.up = new THREE.Vector3(0, 1, 0);
		camera.lookAt(new THREE.Vector3(0, 0, 0));
	},
	setYZ: function () {
		const length = camera.position.length();
		camera.position.x = -length;
		camera.position.y = 0;
		camera.position.z = 0;
		camera.up = new THREE.Vector3(0, 1, 0);
		camera.lookAt(new THREE.Vector3(0, 0, 0));
	},
	settYZ: function () {
		const length = camera.position.length();
		camera.position.x = length;
		camera.position.y = 0;
		camera.position.z = 0;
		camera.up = new THREE.Vector3(0, 1, 0);
		camera.lookAt(new THREE.Vector3(0, 0, 0));
	},
	setXZ: function () {
		const length = camera.position.length();
		camera.position.x = 0;
		camera.position.y = length;
		camera.position.z = 0;
		camera.up = new THREE.Vector3(1, 0, 0);
		camera.lookAt(new THREE.Vector3(0, 0, 0));
	},
	set45: function () {
		camera.position.x = -580;
		camera.position.y = 580;
		camera.position.z = -580;
		camera.lookAt( scene.position );
	},
	updateRendererInfo: function () {
		console.log(camera.position);
		var info = renderer.info;
		for (let prop in info.render) {
			console.log(prop + " " + info.render[prop]);
		}
		if (info.memory) {
			for (let prop in info.memory) {
				console.log(prop + " " + info.memory[prop]);
			}
		}
		console.log("Voxels loaded: ", num_voxels);
	},

	planeConstant_X: 550,
	planeConstant_Y: 550,
	planeConstant_Z: 550,
	showHelpers: false
};

const params = {
	jet_lut: false,
	stdev: 2,
	voxel_size: '1',			// [mm]
	width_X: 100,
	width_Y: 100,
	width_Z: 100,
	x_offset: '0',
	y_offset: '0',
	z_offset: '0',
	LUT: 'bw',
	//LUT: 'viridis',
	alphaHash: true,
	//alpha: 0.5,
	taa: false,
	sampleLevel: 2,
	min_scale_factor: appParams.threshold,	
	max_scale_factor: 100,	
	A: 0.3,
	depth_write: true,
	color_offset: true,
	visible: true,
	wireframe_color: 0x281f23,
	wireframe_visible: false,
	explode: function () {},
	clip: true,
	clipIntersection: false,
	adjust_fps: function(){},
	bounding_box: function(){}
};

const constantValue = 55 * scale_factor;
const clipPlanes = [
	new THREE.Plane( new THREE.Vector3( 1,   0, 0 ), constantValue ),
	new THREE.Plane( new THREE.Vector3( 0, - 1, 0 ), constantValue ),
	new THREE.Plane( new THREE.Vector3( 0, 0, - 1 ), constantValue )
];

var sideOptions = {
	'BackSide': THREE.BackSide,
	'FrontSide': THREE.FrontSide,
	'DoubleSide': THREE.DoubleSide
};

var config_scanner_vis = {
	scaner_transparency: 0.006,
	side: sideOptions['DoubleSide'],
	wire_frame: true,
	depth_write: false,
	Visible: true,
	clip_scanner: true,
	scannerIntersection: false,
	explode: function () {},				// TODO
	toggleScaner: function () {
		scannerobj.visible = ! scannerobj.visible;
	},
	toggleScaner1: function () {
		scannerobj1.visible = ! scannerobj1.visible;
	},
	toggleScaner2: function () {
		scannerobj2.visible = ! scannerobj2.visible;
	},
	toggleScaner3: function () {
		scannerobj3.visible = ! scannerobj3.visible;
	}
};

var config_voxel = {
	voxel_transparency: 0.1,
	voxel_color: 0xff501f,
	LOR_clipping: false,
	depth_write: false,
	Visible: true,
	clip_voxels: true,
	clipIntersection: false,
};

var voxel_material = new THREE.MeshBasicMaterial({
	//clip_voxels: true,
	clippingPlanes: clipPlanes,
	clipIntersection: false,
	color: config_voxel.voxel_color,
	transparent: true,
	depthWrite: false,
	opacity: config_voxel.voxel_transparency,
	blending: THREE.AdditiveBlending
});

var config_cylinder = {
	cylinderRadius: 20,
	cylinder_transparency: 0.2,
	cylinder_color: 0xe00ff,
	Visible: true,
	clip_cylinders: true,
	clipIntersection: false,
};

var cylinder_material = new THREE.MeshBasicMaterial({
	//clip_cylinder: true,
	clippingPlanes: clipPlanes,
	clipIntersection: false,
	color: config_cylinder.cylinder_color,
	blending: THREE.AdditiveBlending,
	depthWrite: false,
	opacity: config_cylinder.cylinder_transparency,
	transparent: true
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////		   STAGE PREPARATION			//////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const scene = new THREE.Scene();
    const clientWidth = window.innerWidth;
    const clientHeight = window.innerHeight;
    const aspect = clientWidth / clientHeight;
	const MAX = 382;
    const camera =
        new THREE.OrthographicCamera(-aspect * MAX / 2,
            aspect * MAX / 2,
            1 * MAX / 2, -1 * MAX / 2,
            0.1,
            MAX * 8
        );
    camera.position.x = -1000;
    camera.position.y = 0;
    camera.position.z = 0;
	camera.zoom = 0.3;
	camera.updateProjectionMatrix();
//var camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 0.1, 1000000 );

//TODO check if the render option is working
//const renderer = new THREE.WebGLRenderer({ powerPreference: "high-performance" });
const highPerformanceRenderer = new THREE.WebGLRenderer({ powerPreference: "high-performance" });
const lowPowerRenderer = new THREE.WebGLRenderer({ powerPreference: "low-power" });
let renderer = highPerformanceRenderer;
function setRendererPreference(useHighPerformance) {
	if (useHighPerformance) {
		currentRenderer = highPerformanceRenderer;
	} else {
		currentRenderer = lowPowerRenderer;
	}
			
	// Update the scene and camera for the new renderer
	currentRenderer.setSize(window.innerWidth, window.innerHeight);
	currentRenderer.render(scene, camera);
}

const container = document.getElementById('scene-container');
const containerWidth = container.clientWidth;
const containerHeight = container.clientHeight;

// Specify the desired height (in viewport height units)
const desiredHeight = container.clientHeight;
const aspectRatio = window.innerWidth / window.innerHeight;
// Calculate the new width based on the desired height and aspect ratio
const newWidth = desiredHeight * aspectRatio;

renderer.setSize(newWidth, containerHeight);
renderer.setPixelRatio( window.devicePixelRatio );
renderer.localClippingEnabled = true;

//document.body.appendChild(renderer.domElement);
document.getElementById('scene-container').appendChild(renderer.domElement);
window.addEventListener('resize', function () {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
});

const controls = new THREE.OrbitControls(camera, renderer.domElement);

const light1 = new THREE.AmbientLight(0xffffff, appParams.light1); // soft white light
const light2 = new THREE.AmbientLight(0xFFFFC1, appParams.light2); // soft white light
scene.add(light1);
scene.add(light2);

let scannerobj = new THREE.Object3D();
let scannerobj1= new THREE.Object3D();
let scannerobj2= new THREE.Object3D();
let scannerobj3= new THREE.Object3D();
const loader = new THREE.GLTFLoader().setPath( 'models_and_data/' );
loader.load( 'tower_w_2blocks.glb', function ( gltf ) {
	gltf.scene.traverse(child => {
		if (child.isMesh) {
			child.name = "Scanner";
			child.material.depthWrite = config_scanner_vis.depth_write;
			child.material.transparent = true;
			child.material.wireframe = true;
			child.material.opacity = config_scanner_vis.scaner_transparency;
			child.material.side = config_scanner_vis.side;
			child.material.clippingPlanes = clipPlanes;
		}
	});
	gltf.scene.scale.setScalar(10); // Scaling is set to 1000 to go from mm to 100 µm
	gltf.scene.translateZ(-162);
	gltf.scene.translateY(201);
	gltf.scene.rotation.set(0,0.5*Math.PI,0);
	scannerobj = gltf.scene;
	scene.add(scannerobj);
	scannerobj1 = gltf.scene.clone();
	scannerobj1.translateY(-402);
	scannerobj1.translateX(-324);
	scannerobj1.rotation.set(Math.PI,0.5*Math.PI,0);
	scene.add(scannerobj1);
	scannerobj2 = gltf.scene.clone();
	scannerobj2.translateX(-363);
	scannerobj2.translateY(-39);
	scannerobj2.rotation.set(Math.PI,0.5*Math.PI,-0.5*Math.PI);
	scene.add(scannerobj2);
	scannerobj3 = scannerobj1.clone();
	scannerobj3.translateX(-363);
	scannerobj3.translateY(-39);
	scannerobj3.rotation.set(Math.PI,0.5*Math.PI,0.5*Math.PI);
	scene.add(scannerobj3);

	scene.add( gltf.scene );
} );

const helpers = new THREE.Group();
helpers.add( new THREE.PlaneHelper( clipPlanes[ 0 ], 100 * scale_factor, 0xff0000 ) );
helpers.add( new THREE.PlaneHelper( clipPlanes[ 1 ], 100 * scale_factor, 0x00ff00 ) );
helpers.add( new THREE.PlaneHelper( clipPlanes[ 2 ], 100 * scale_factor, 0x0000ff ) );
helpers.visible = false;
scene.add( helpers );

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////			 GUI			//////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var gui = new dat.GUI();
gui.domElement.style.cssText = 'margin-top:5%;';

var app = gui.addFolder('App control');
app.close();

var file_loader = app.addFolder('File loader');
var thresholdControl;
var voxelsNumControl;
function updateControls() {
	//TODO fix enabling below
	if (appParams.loader === 'Voxel threshold') {
		threshold_control.enable(true);
		voxels_control.enable(false);
	}
	else if (appParams.loader === 'Num of voxels') {
		threshold_control.enable(false);
		voxels_control.enable(true);
	}
	else {
		threshold_control.enable = false;
		voxels_control.enable = false;
	}
}
file_loader.add(appParams, 'loader', ['Point cloud (MIP)', 'Instanced voxels', 'Voxel threshold', 'Num of voxels']).name('Loader type').onChange(updateControls);
//var stdev_control = file_loader.add(appParams, 'stdev', 1,20).step(1).name('St. dev.').onChange(resetPoints);
var threshold_control = file_loader.add(appParams, 'threshold', 0, 100).name('Voxel threshold');
threshold_control.enable = false;
var voxels_control = file_loader.add(appParams, 'voxels_num', appParams.voxels_num).name('# Voxels');
voxels_control.enable = false;
updateControls();

var display = app.addFolder('Display');
display.add(appParams, 'camera_fov',1,180).name('Camera FOV').onChange(value => { camera.fov = value; camera.updateProjectionMatrix(); } );
var appear = display.addFolder('Appearance');
//display.add({ useHighPerformance: true }, 'useHighPerformance').onChange(setRendererPreference);
appear.add( appParams, 'light1',0,1).name('light1').onChange(value => { light1.intensity = value } );
appear.add( appParams, 'light2',0,1).name('light2').onChange(value => { light2.intensity = value } );
appear.add( appParams, 'rotationEnabled').name('Rotation').onChange(value => {
	params.rotationEnabled = value;
});
appear.addColor(appParams, 'backgroundColor').name('Background color').onChange((colorValue) => {
	const backgroundColor = new THREE.Color(colorValue);
	renderer.setClearColor(backgroundColor);
	console.log(backgroundColor);
});
display.add( appParams, 'setXY').name('XY view');
display.add( appParams, 'setYZ').name('YZ view');
//display.add( appParams, 'settYZ').name('-YZ view');
display.add( appParams, 'setXZ').name('XZ view');
//display.add( appParams, 'set45').name('45 view');
display.add( appParams, 'updateRendererInfo').name('Render info');
appear.close();
var anim = display.addFolder('Animation');
// TODO
anim.add( appParams, 'scene_anim', appParams.scene_anim).name('Animation');//.onChange(value => {
anim.add( appParams, 'implosion_time',).name('Implosion duration [ms]');
anim.add( appParams, 'explosion_time',).name('Explosion duration [ms]');
anim.close();

display.close();

var section = gui.addFolder('Cross-section view');
//clip.add( params, 'clip_voxels' ).name( 'clip LOR voxels' ).onChange( function ( value ) {
//	if(value)   voxels_mesh.material.clippingPlanes = clipPlanes;
//	else voxels_mesh.material.clippingPlanes = null;
//} );
//clip.add( params, 'clip_cylinder' ).name( 'clip LOR cylinder' ).onChange( function ( value ) {
//	if(value)   cylinders_mesh.material.clippingPlanes = clipPlanes;
//	else cylinders_mesh.material.clippingPlanes = null;
//} );
section.add( appParams, 'planeConstant_X', - 55 * scale_factor, 55 * scale_factor ).step( 0.05 * scale_factor ).name( 'Plane X' ).onChange( function ( value ) {
		clipPlanes[ 0 ].constant = value;
} );
section.add( appParams, 'planeConstant_Y', - 55 * scale_factor, 55 * scale_factor ).step( 0.05 * scale_factor ).name( 'Plane Y' ).onChange( function ( value ) {
		clipPlanes[ 1 ].constant = value;
} );
section.add( appParams, 'planeConstant_Z', - 55 * scale_factor, 55 * scale_factor ).step( 0.05 * scale_factor ).name( 'Plane Z' ).onChange( function ( value ) {
		clipPlanes[ 2 ].constant = value;
} );
section.add( appParams, 'showHelpers' ).name( 'Show planes' ).onChange( function ( value ) {
	helpers.visible = value;
} );
section.close();

//*
var scanner = gui.addFolder('Scanner');
scanner.add(config_scanner_vis, 'scaner_transparency', 0, 1).onChange( function ( value ) {;
	scannerobj.traverse(child => {
		if (child.isMesh) child.material.opacity = config_scanner_vis.scaner_transparency;
	});
});
// TODO
scanner.add( config_scanner_vis, 'side', sideOptions ).name( 'Render side' ).onChange( function ( value ) {
	config_scanner_vis.side = value;
	scannerobj.traverse(child => {
		if (child.isMesh) {
			child.material.side = config_scanner_vis.side;
			console.log(config_scanner_vis.side);
		}
	});
});
scanner.add(config_scanner_vis, 'wire_frame').onChange(function() {
	scannerobj.traverse(function(child) {
		if (child instanceof THREE.Mesh) child.material.wireframe = config_scanner_vis.wire_frame;
	});
});
scanner.add(config_scanner_vis, 'depth_write').onChange(function() {
	scannerobj.traverse(function(child) {
		if (child instanceof THREE.Mesh) child.material.depthWrite = config_scanner_vis.depth_write;
	});
});
scanner.add( config_scanner_vis, 'clip_scanner' ).name( 'Section view' ).onChange( function ( value ) {
	scannerobj.traverse(function(obj){
		if(obj.type === 'Mesh'){
			if(value)	obj.material.clippingPlanes = clipPlanes;
			else obj.material.clippingPlanes = null;
		}
	});
} );
scanner.add( config_scanner_vis, 'scannerIntersection' ).name( 'Inverted section' ).onChange( function ( value ) {
	scannerobj.traverse(function(obj){
		if(obj.type === 'Mesh') obj.material.clipIntersection = value;
	});
} );
scanner.add(config_scanner_vis, 'Visible').onChange(function() {
	scannerobj.visible = config_scanner_vis.Visible;
	scannerobj1.visible = config_scanner_vis.Visible;
	scannerobj2.visible = config_scanner_vis.Visible;
	scannerobj3.visible = config_scanner_vis.Visible;
});
var hide = scanner.addFolder('Hide/Show');
hide.add(config_scanner_vis, 'toggleScaner').name('Top tower');
hide.add(config_scanner_vis, 'toggleScaner1').name('Bottom tower');
hide.add(config_scanner_vis, 'toggleScaner2').name('Right tower');
hide.add(config_scanner_vis, 'toggleScaner3').name('Left tower');
scanner.add( config_scanner_vis, 'explode').name('Explode').onChange( function( value ){ explode("Scanner");} );
hide.close();
scanner.close();
//*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////		   FILE LOADER			//////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

document.getElementById('file_GEN').onchange = function () {
	var generic_allLines;
	var file_generic = this.files[0];
	var fileName = file_generic.name;
	var fileExtension = fileName.split('.').pop();

	var reader = new FileReader();
	if(fileExtension == "3dm"){
		const regex = /(.*?)_(\d+)x(\d+)x(\d+)_(\d+um)\./;
		const matches = fileName.match(regex);

		let fileTemplate;
		if (matches) {
			fileTemplate = matches[1];
			params.width_X = parseFloat(matches[2], 10);
			params.width_Y = parseFloat(matches[3], 10);
			params.width_Z = parseFloat(matches[4], 10);
			params.voxel_size = parseFloat(matches[5], 10) / 1000; // Extracted as a number
			var min_visibility_control = 0;
			if (appParams.loader === 'Num of voxels' || appParams.loader === 'Instanced voxels') {
				min_visibility_control = 0;
				params.min_scale_factor = 0;
			} else {
				min_visibility_control = appParams.threshold; 
				params.min_scale_factor = min_visibility_control;
			}

			var file_gui = gui.addFolder(fileTemplate);
			//var file_gui = gui.addFolder(fileTemplate + " [" + params.width_X + "x" + params.width_Y + "x" + params.width_Z + "]");
			file_gui.add( params, 'visible').name('Visible').onChange( function( value ){ update_material(fileTemplate, value);} );
			if(appParams.loader !== 'Point cloud (MIP)'){
				var voxel_folder = file_gui.addFolder('Voxels control');
				voxel_folder.add( params, "voxel_size", params.voxel_size).name("Voxel size [mm]").onFinishChange( function( value ) {change_voxel_size(fileTemplate, value);});
				voxel_folder.close();
				var material_folder = file_gui.addFolder('Volume rendering');
				material_folder.add( params, 'LUT', ['bw','jet','fire','viridis','5ramps'] ).name( fileTemplate + 'LUT' ).onChange( function( value ){update_material(fileTemplate, value);} );
				///*
				material_folder.add( params, 'depth_write').onChange(function( value ) {
					scene.traverse(function(child) {
						if (child instanceof THREE.Mesh && child.name == fileTemplate) child.material.depthWrite = params.depth_write;
					});
				});
				material_folder.add( params, 'color_offset').name('Color offset').onChange(value => {
					params.color_offset = value;
					if(params.color_offset) offset = maxValue * params.min_scale_factor / 100;
					if(!params.color_offset) offset = minValue;
					scene.traverse((object) => {
						if (object instanceof THREE.Mesh) {
							if (object.name == fileTemplate) {
								if(params.LUT == 'bw') object.material.color = LUT_BW( Math.ceil(((object.userData.color_value - offset) / (maxValue - offset)) * 255) );
								if(params.LUT == 'jet') object.material.color = LUT_jet_color( Math.ceil(((object.userData.color_value - offset) / (maxValue - offset)) * 255) );
								if(params.LUT == 'fire') object.material.color = LUT_fire_color( Math.ceil(((object.userData.color_value - offset) / (maxValue - offset)) * 255) );
								if(params.LUT == 'viridis') object.material.color = LUT_viridis_color( Math.ceil(((object.userData.color_value - offset) / (maxValue - offset)) * 255) );
								if(params.LUT == '5ramps') object.material.color = LUT_5ramps_color( Math.ceil(((object.userData.color_value - offset) / (maxValue - offset)) * 255));
							}
						}
					});
				} );
				//*/
				material_folder.add( params, 'alphaHash' ).name( 'Alpha hash' ).onChange( function( value ){change_alpha_hash(fileTemplate, value);} );
				material_folder.add( params, 'min_scale_factor', min_visibility_control, 100 ).step( 0.1 ).name( 'Visibility cut [%]' ).onChange( function( value ){update_material(fileTemplate, value);} );
				material_folder.add( params, 'max_scale_factor', min_visibility_control, 100 ).step( 0.1 ).name( 'Visibility ceiling [%]' ).onChange( function( value ){update_material(fileTemplate, value);} );
				material_folder.add( params, 'A', 0, 100 ).step( 0.01 ).name( 'weight' ).onChange( function( value ){update_material(fileTemplate, value);} );
				var section_folder = file_gui.addFolder('Cross-section config');
				section_folder.add( params, 'clip' ).name( 'Section view' ).onChange( function ( value ) {
					scene.traverse((obj) => {
						if (obj instanceof THREE.Mesh && obj.name == fileTemplate){
							if(value) obj.material.clippingPlanes = clipPlanes;
							else obj.material.clippingPlanes = null;
						}
					});
				} );
				section_folder.add( params, 'clipIntersection' ).name( 'Inverted section' ).onChange( function ( value ) {
					scene.traverse(function(obj){
						if(obj.type === 'Mesh' && obj.name == fileTemplate){
							obj.material.clipIntersection = value;
						}
					});
				} );
				section_folder.close();
				var wire_folder = file_gui.addFolder('Bounding box wireframe');
				wire_folder.add( params, 'wireframe_visible').name('Wireframe visible').onChange(value => {
					scene.traverse((obj) => {
						if (obj instanceof THREE.Mesh && obj.name == fileTemplate + '-wireframe'){
							obj.visible = value;
						}
					});
				});
				wire_folder.addColor(params, 'wireframe_color').name('Wireframe color').onChange((colorValue) => {
					scene.traverse((obj) => {
						if (obj instanceof THREE.Mesh && obj.name == fileTemplate + '-wireframe'){
							obj.material.color = new THREE.Color(colorValue);
						}
					});
				} );
				wire_folder.close();
			}
			else {
				file_gui.add( params, 'jet_lut').name('Jet LUT').onChange( function( value ){} );
				file_gui.add( params, 'stdev', 1,20).step(1).name('St. dev.').onChange(resetPoints);
			}
			var xyz_offset = file_gui.addFolder('XYZ offset');
			xyz_offset.add( params, 'x_offset').name('X offset').onFinishChange( function( value ) { x_move(fileTemplate, value) } );
			xyz_offset.add( params, 'y_offset').name('Y offset').onFinishChange( function( value ) { y_move(fileTemplate, value) } );
			xyz_offset.add( params, 'z_offset').name('Z offset').onFinishChange( function( value ) { z_move(fileTemplate, value) } );
			xyz_offset.close();
			//var experimental = file_gui.addFolder('Experimental');
			//experimental.add( params, 'bounding_box').name('Move').onChange( function( value ){ addBoundingBox(fileTemplate);} );
			//experimental.add( params, 'adjust_fps').name('Adjust FPS').onChange( function( value ){ checkFPS(20, appParams.threshold, 100, fileTemplate);} );
			file_gui.add( params, 'explode').name('Explode').onChange( function( value ){ explode(fileTemplate);} );

			progressBarDiv = document.createElement( 'div' );
			progressBarDiv.innerText = 'Loading file...';
			progressBarDiv.style.fontSize = '6em';
			progressBarDiv.style.color = '#FFFFFF';
			progressBarDiv.style.display = 'block';
			progressBarDiv.style.position = 'absolute';
			progressBarDiv.style.top = '50%';
			progressBarDiv.style.width = '100%';
			progressBarDiv.style.textAlign = 'center';

			document.body.appendChild( progressBarDiv );

			console.log("Reading file " + fileName);
			reader.onload = (event) => {
				const file_generic = event.target.result;
				if(appParams.loader == 'Point cloud (MIP)') {
					loadPointCloud(fileTemplate, fileName, file_generic);
					return;
				}
				const histogram_array = new Array(256).fill(0);
				generic_allLines = file_generic.split(/\r\n|\n/);

				var x = 0;
				var y = 0;
				var z = 0;
				const texture_array = []; // Initialize an empty array to store the data
				for (let i = 0; i < generic_allLines.length; i++) {
					if (i > 0 && i % params.width_Y == 0) {
						x++;
						y = 0;
					}
					const line = generic_allLines[i];
					const values = line.split('\t'); // assuming tab-separated values

					for (let z = 0; z < values.length; z++) {
						const value = parseFloat(values[z]);
						if (!isNaN(value) && value > 0) {
							texture_array.push({ x, y, z, value });
						}
					}
					y++;
				}
				texture_array.sort((a, b) => b.value - a.value);
				maxValue = texture_array[0].value;
				//maxValue = 500;
				minValue = texture_array[texture_array.length - 1].value;
				console.log('Texture maximum value:', maxValue);
				console.log('Texture minimum value:', minValue);

				if(appParams.loader == 'Voxel threshold' ||
				   appParams.loader == 'Num of voxels') {
					loadGenericTexture(fileTemplate, texture_array);
				}
				if(appParams.loader == 'Instanced voxels') {
					for (const entry of texture_array) {
						const normalizedValue = (entry.value - minValue) / (maxValue - minValue);
						const index = Math.ceil(normalizedValue * 255);
						histogram_array[index]++;
					}
					loadGenericTexture_instancedMesh(fileTemplate, texture_array, histogram_array);
				}
			};
		} else {
			console.log("Please, check file name template required.");
		}
	}
	if(fileExtension == "epd"){
		var x1, x2, y1, y2, z1, z2;
		const voxels_mesh = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 1, 1), voxel_material, 1000000);
		voxels_mesh.name = fileName;
		const cylinders_mesh = new THREE.InstancedMesh(new THREE.CylinderGeometry(10, 10, 1, 6, 1), cylinder_material, 1000000);
		scene.add(voxels_mesh);
		scene.add(cylinders_mesh);

		var LOR_EPD = gui.addFolder('LOR EPD' + fileName);
		var voxels = LOR_EPD.addFolder('Voxels');
		voxels.add(config_voxel, 'Visible').onChange(function() {
			voxels_mesh.visible = config_voxel.Visible;
		});
		voxels.add(config_voxel, 'voxel_transparency', 0, 1).onChange( function ( value ) {
			voxel_material.opacity = config_voxel.voxel_transparency;
		});
		voxels.addColor(config_voxel, 'voxel_color').onChange( function ( value ) {
			scene.traverse(function(child) {
				if (child instanceof THREE.Mesh && child.name == fileName) {
					child.material.color.set(value);
					//child.material.color.set(config_voxel.voxel_color);
				}
			});
		});
		voxels.add(config_voxel, 'depth_write').onChange( function() {
			voxels_mesh.traverse(function(child) {
				if (child instanceof THREE.Mesh) {
					child.depthWrite = config_voxel.depth_write;
				}
			});
		});
		voxels.add( config_voxel, 'clip_voxels' ).name( 'Section view' ).onChange( function ( value ) {
			voxels_mesh.traverse(function(obj){
				if(obj.type === 'Mesh'){
					if(value)	obj.material.clippingPlanes = clipPlanes;
					else obj.material.clippingPlanes = null;
				}
			});
		} );
		voxels.add( config_voxel, 'clipIntersection' ).name( 'Inverted section' ).onChange( function ( value ) {
			voxels_mesh.traverse(function(obj){
				if(obj.type === 'Mesh') obj.material.clipIntersection = value;
			});
		} );
		//voxels.open();
		var cylinders = LOR_EPD.addFolder('Cylinders');
		cylinders.add(config_cylinder, 'Visible').onChange(function() {
			cylinders_mesh.visible = config_cylinder.Visible;
		});
		cylinders.add(config_cylinder, 'cylinder_transparency', 0, 1).onChange( function () {
			cylinder_material.opacity = config_cylinder.cylinder_transparency;
		});
		cylinders.add(config_cylinder, 'cylinderRadius', 1, 100 ).name('Radius').onChange( function(newValue) {
			config_cylinder.cylinderRadius = newValue;
			var cylinderGeometry = new THREE.CylinderGeometry(config_cylinder.cylinderRadius, config_cylinder.cylinderRadius, 1, 6, 1);
			cylinders_mesh.geometry.copy(cylinderGeometry);
			cylinders_mesh.geometry.attributes.position.needsUpdate = true;
		});
		cylinders.addColor(config_cylinder, 'cylinder_color').onChange( function () {
			cylinder_material.color.set(config_cylinder.cylinder_color);
		});
		cylinders.add( config_cylinder, 'clip_cylinders' ).name( 'Section view' ).onChange( function ( value ) {
			cylinders_mesh.traverse(function(obj){
				if(obj.type === 'Mesh'){
					if(value)	obj.material.clippingPlanes = clipPlanes;
					else obj.material.clippingPlanes = null;
				}
			});
		} );
		cylinders.add( config_cylinder, 'clipIntersection' ).name( 'Inverted section' ).onChange( function ( value ) {
			cylinders_mesh.traverse(function(obj){
				if(obj.type === 'Mesh') obj.material.clipIntersection = value;
			});
		} );
		// TODO, change below to make remove_LOR_EPD outside appParams 
		LOR_EPD.add( appParams, 'remove_LOR_EPD').name('Remove LORs').onChange( function( value ){ 
			removeFolderByName(gui, 'LOR End-Point-Detection');
			scene.remove(voxels_mesh);
			scene.remove(cylinders_mesh);
		});
		//cylinders.open();

		reader.onload = (event) => {
			const file = event.target.result;
			const allLines = file.split(/\r\n|\n/);

			let n_pixelhits=0;
			for (var line = 0; line < allLines.length - 1; line = line + 1) {
				let eventline = allLines[line].toString().indexOf("#");

				if (n_pixelhits == 2 && eventline != -1) {
					var point1 = allLines[line - 1].split("\t");
					var point2 = allLines[line - 2].split("\t");
					x1 = Math.round(point1[1] * 10);
					y1 = Math.round(point1[2] * 10);
					z1 = Math.round(point1[3] * 10);
					x2 = Math.round(point2[1] * 10);
					y2 = Math.round(point2[2] * 10);
					z2 = Math.round(point2[3] * 10);
					
					//Bresenham3D(x1, y1, z1, x1, y2, z2, 680, 170, 170, voxels_mesh);
					Bresenham3D(-x1, y1, -z1, -x2, y2, -z2, 680, 170, 170, voxels_mesh);
					drawCylinder(-x1, y1, -z1, -x2, y2, -z2, cylinders_mesh);
				}
				
				if (eventline != -1) // quand il trouve le symbole
				{
					n_pixelhits = 0;
				}
				if (eventline == -1) // quand il trouve pas le symbole
				{
					n_pixelhits = n_pixelhits + 1;
				}
			}
		};
	}
	reader.onerror = (event) => {
		alert(event.target.error.name);
	}
	reader.readAsText(file_generic);
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////		   TEXTURE LOADER			//////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const voxelMeshes = [];
function loadGenericTexture_instancedMesh(fileTemplate, texture_array, histogram_array) {
	let worldcube;
	let offset;
	var color_value = new THREE.Color();

	var worldcubeGeometry = new THREE.BoxGeometry(params.width_X * params.voxel_size * scale_factor, 
												params.width_Y * params.voxel_size * scale_factor, 
												params.width_Z * params.voxel_size * scale_factor);
	worldcube = new THREE.Mesh(worldcubeGeometry, new THREE.MeshBasicMaterial({ color: params.wireframe_color }));
	worldcube.material.wireframe = true;
	worldcube.visible = false;
	worldcube.name = fileTemplate + '-wireframe';
	scene.add(worldcube);

	if(params.color_offset) offset = maxValue * appParams.threshold / 100;
	if(!params.color_offset) offset = minValue;

	const voxelGeometry = new THREE.BoxGeometry(params.voxel_size * scale_factor, params.voxel_size * scale_factor, params.voxel_size * scale_factor);
	var LUT;
	if(params.LUT == 'bw') LUT = LUT_BW;
	if(params.LUT == 'jet') LUT = LUT_jet_color;
	if(params.LUT == 'fire') LUT = LUT_fire_color;
	if(params.LUT == 'viridis') LUT = LUT_viridis_color;
	if(params.LUT == '5ramps') LUT = LUT_5ramps_color;
	for (let i = 0; i < histogram_array.length; i++) {
		const voxelMaterial = new THREE.MeshBasicMaterial({ clippingPlanes: clipPlanes,
															clipIntersection: params.clipIntersection, 
															//side: THREE.FrontSide,
															depthWrite: params.depth_write,
															color: LUT(i), 
															//transparent: true });
															alphaHash: params.alphaHash });
		voxelMaterial.opacity = opacity_weight(i, 255, minValue, params.A);
		const voxelsMesh = new THREE.InstancedMesh(voxelGeometry, voxelMaterial, histogram_array[i]);
		voxelsMesh.name = fileTemplate;
		voxelsMesh.userData = { color_value: i };
	
		// Add the voxelsMesh to the scene
		scene.add(voxelsMesh);
		if (i < (params.min_scale_factor / 100) * 255) {
			voxelsMesh.visible = false;
		}
	
		voxelMeshes.push(voxelsMesh); // Store the voxelsMesh in the array
	}

	var index = 0;
	var index_value = 0;
	const index_array = new Array(256).fill(0);
	for (var entry = 0; entry < texture_array.length -1; entry = entry + 1) {
		progressBarDiv.innerText = 'Loading... ' + Math.round((entry + 1) / texture_array.length * 100) + '%';
		var x = texture_array[entry].x;
		var y = texture_array[entry].y;
		var z = texture_array[entry].z;
		var value = texture_array[entry].value;

		index_value = Math.ceil( ((value - offset) / (maxValue - offset)) * 255);

		var dummy = new THREE.Object3D();
		dummy.position.set(x * ((params.voxel_size) * scale_factor) - (params.width_X/2)*((params.voxel_size) * scale_factor), 
			 			   y * ((params.voxel_size) * scale_factor) - (params.width_Y/2)*((params.voxel_size) * scale_factor), 
						   z * ((params.voxel_size) * scale_factor) - (params.width_Z/2)*((params.voxel_size) * scale_factor));
	 	dummy.updateMatrix();
		if (voxelMeshes[index_value]){
			voxelMeshes[index_value].setMatrixAt(index_array[index_value], dummy.matrix);
	 		index_array[index_value]++;
			voxelMeshes[index_value].instanceMatrix.needsUpdate = true;
		}
	}
	document.body.removeChild( progressBarDiv );
}

let positions = [];
let colors = [];
let sizes = [];
let boxes = [];
let buf = new Uint8Array();
var num_points = 0;
async function loadPointCloud(fileTemplate, fileName, file_generic) {
	//let positions = [];
	//let colors = [];
	//let sizes = [];
	//let boxes = [];
    const X = params.width_Z; // 309;
    const Y = params.width_Y; // 310;
    const Z = params.width_X; // 402;
    const dm3 = file_generic;
    const MAX = Math.max(X, Y, Z);

    //let buf = new Uint8Array(dm3.split("	").map(x => +x));
    buf = new Uint8Array(dm3.split("	").map(x => +x));
    if (buf.length != X * Y * Z) {
        if (buf.length > X * Y * Z) {
            buf = buf.slice(0, X * Y * Z);
        } else {
            let newBuf = new Uint8Array(X * Y * Z);
            newBuf.set(buf);
            buf = newBuf;
        }
    }

    // Create a THREE.Box3() for every INITIALxINITIAL region
    const INITIAL = 64;
    for (let z = 0; z < Z; z += INITIAL) {
        for (let y = 0; y < Y; y += INITIAL) {
            for (let x = 0; x < X; x += INITIAL) {
                let box = new THREE.Box3(
                    new THREE.Vector3(x, y, z),
                    new THREE.Vector3(x + INITIAL, y + INITIAL, z + INITIAL)
                );
                boxes.push(box);
            }
        }
    }

    // We are going to use recursive subdivision to create boxes, based off of the density
    while (boxes.length > 0) {
        let box = boxes.pop();
        let density = 0;
        let count = 0;
        let minX = Math.max(Math.floor(box.min.x), 0);
        let minY = Math.max(Math.floor(box.min.y), 0);
        let minZ = Math.max(Math.floor(box.min.z), 0);
        let maxX = Math.min(Math.ceil(box.max.x), X);
        let maxY = Math.min(Math.ceil(box.max.y), Y);
        let maxZ = Math.min(Math.ceil(box.max.z), Z);
        for (let z = minZ; z < maxZ; z++) {
            for (let y = minY; y < maxY; y++) {
                for (let x = minX; x < maxX; x++) {
                    density += buf[z * Y * X + y * X + x];
                    count++;
                }
            }
        }
        density /= count;
        // Compute standard deviation
        let std = 0;
        for (let z = minZ; z < maxZ; z++) {
            for (let y = minY; y < maxY; y++) {
                for (let x = minX; x < maxX; x++) {
                    let v = (buf[z * Y * X + y * X + x] - density);
                    std += v * v;
                }
            }
        }
        std /= count;
        std = Math.sqrt(std);

        if (std > params.stdev && count > 1) {
            // Subdivide into 8 boxes
            let x = (box.min.x + box.max.x) / 2;
            let y = (box.min.y + box.max.y) / 2;
            let z = (box.min.z + box.max.z) / 2;
            boxes.push(
                new THREE.Box3(
                    new THREE.Vector3(box.min.x, box.min.y, box.min.z),
                    new THREE.Vector3(x, y, z)
                ),
                new THREE.Box3(
                    new THREE.Vector3(x, box.min.y, box.min.z),
                    new THREE.Vector3(box.max.x, y, z)
                ),
                new THREE.Box3(
                    new THREE.Vector3(box.min.x, y, box.min.z),
                    new THREE.Vector3(x, box.max.y, z)
                ),
                new THREE.Box3(
                    new THREE.Vector3(x, y, box.min.z),
                    new THREE.Vector3(box.max.x, box.max.y, z)
                ),
                new THREE.Box3(
                    new THREE.Vector3(box.min.x, box.min.y, z),
                    new THREE.Vector3(x, y, box.max.z)
                ),
                new THREE.Box3(
                    new THREE.Vector3(x, box.min.y, z),
                    new THREE.Vector3(box.max.x, y, box.max.z)
                ),
                new THREE.Box3(
                    new THREE.Vector3(box.min.x, y, z),
                    new THREE.Vector3(x, box.max.y, box.max.z)
                ),
                new THREE.Box3(
                    new THREE.Vector3(x, y, z),
                    new THREE.Vector3(box.max.x, box.max.y, box.max.z)
                )
            );
        } else {
            // Create a point
			num_points++;
            if (density > 0) {
                let amount = density;
                let centerVec = new THREE.Vector3();
                let size = Math.max(box.max.x - box.min.x, box.max.y - box.min.y, box.max.z - box.min.z) * (params.voxel_size * 10);
                sizes.push(
                    size
                )
                box.getCenter(centerVec);

                positions.push(
                    (centerVec.z - Z / 2) * (params.voxel_size * 10), 
					(centerVec.y - Y / 2) * (params.voxel_size * 10), 
					(centerVec.x - X / 2) * (params.voxel_size * 10)
                );
                colors.push(amount / 255, amount / 255, amount / 255);
                //colors.push(LUT_r[Math.ceil(amount)], LUT_g[Math.ceil(amount)], LUT_b[Math.ceil(amount)]);

            }
        }
    }
	console.log("Num. voxels: ", num_points);
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1));
    const material = new THREE.ShaderMaterial({
        vertexColors: true,
        depthWrite: false,
        blendEquation: THREE.MaxEquation,
        blending: THREE.CustomBlending,

        uniforms: {
             //uScale: { value: innerHeight / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2))) },
            uScale: {
                value: 1 //(innerHeight / Math.abs(camera.top - camera.bottom)) * camera.zoom
            },
            perspective: {
                value: camera.isPerspectiveCamera
            }
        },
        vertexShader: `
        varying vec3 vColor;
        varying float vSize;
        uniform float uScale;
        uniform bool perspective;
        attribute float size;
        
        void main() {
            vColor = color;
            vSize = size;
            vec4 mvPosition = viewMatrix * vec4( position, 1.0 );
        
            gl_PointSize = round( 1.6 * size * uScale / (perspective ? -mvPosition.z : 1.0));
        
            gl_Position = projectionMatrix * mvPosition;
        }
        
        `,
        fragmentShader: `
        
        varying vec3 vColor;
        varying float vSize;
        #include <dithering_pars_fragment>
        void main() {
            // Compute distance from the center of the point (which is (0.5, 0.5) in UV coordinates)
            vec2 center = vec2(0.5, 0.5);
            vec2 uv = gl_PointCoord - center;
            if (dot(uv, uv) > 0.5 * 0.5) discard;
            gl_FragColor = vec4(vColor, 1.0);
        }
        `,
    });
    points = new THREE.Points(geometry, material);
	test = 1;
	points.name = fileTemplate; 
    scene.add(points);
	
	document.body.removeChild( progressBarDiv );

}

function resetPoints() {
	//TODO to make it work
	progressBarDiv2 = document.createElement( 'div' );
	progressBarDiv2.innerText = 'Grouping points...';
	progressBarDiv2.style.fontSize = '6em';
	progressBarDiv2.style.color = '#FFFFFF';
	progressBarDiv2.style.display = 'block';
	progressBarDiv2.style.position = 'absolute';
	progressBarDiv2.style.top = '50%';
	progressBarDiv2.style.width = '100%';
	progressBarDiv2.style.textAlign = 'center';
	document.body.appendChild( progressBarDiv2 );

    // Assuming 'points' is a global variable representing your THREE.Points object
    const X = params.width_Z; // 309;
    const Y = params.width_Y; // 310;
    const Z = params.width_X; // 402;
    const INITIAL = 64;
    for (let z = 0; z < Z; z += INITIAL) {
        for (let y = 0; y < Y; y += INITIAL) {
            for (let x = 0; x < X; x += INITIAL) {
                let box = new THREE.Box3(
                    new THREE.Vector3(x, y, z),
                    new THREE.Vector3(x + INITIAL, y + INITIAL, z + INITIAL)
                );
                boxes.push(box);
            }
        }
    }

    // Reset arrays
    positions = [];
    colors = [];
    sizes = [];
	num_points = 0;

    // Update point attributes based on your logic
    while (boxes.length > 0) {
        let box = boxes.pop();
        let density = 0;
        let count = 0;
        let minX = Math.max(Math.floor(box.min.x), 0);
        let minY = Math.max(Math.floor(box.min.y), 0);
        let minZ = Math.max(Math.floor(box.min.z), 0);
        let maxX = Math.min(Math.ceil(box.max.x), X);
        let maxY = Math.min(Math.ceil(box.max.y), Y);
        let maxZ = Math.min(Math.ceil(box.max.z), Z);
        for (let z = minZ; z < maxZ; z++) {
            for (let y = minY; y < maxY; y++) {
                for (let x = minX; x < maxX; x++) {
                    density += buf[z * Y * X + y * X + x];
                    count++;
                }
            }
        }
        density /= count;
        // Compute standard deviation
        let std = 0;
        for (let z = minZ; z < maxZ; z++) {
            for (let y = minY; y < maxY; y++) {
                for (let x = minX; x < maxX; x++) {
                    let v = (buf[z * Y * X + y * X + x] - density);
                    std += v * v;
                }
            }
        }
        std /= count;
        std = Math.sqrt(std);

        if (std > params.stdev && count > 1) {
            // Subdivide into 8 boxes
            let x = (box.min.x + box.max.x) / 2;
            let y = (box.min.y + box.max.y) / 2;
            let z = (box.min.z + box.max.z) / 2;
            boxes.push(
                new THREE.Box3(
                    new THREE.Vector3(box.min.x, box.min.y, box.min.z),
                    new THREE.Vector3(x, y, z)
                ),
                new THREE.Box3(
                    new THREE.Vector3(x, box.min.y, box.min.z),
                    new THREE.Vector3(box.max.x, y, z)
                ),
                new THREE.Box3(
                    new THREE.Vector3(box.min.x, y, box.min.z),
                    new THREE.Vector3(x, box.max.y, z)
                ),
                new THREE.Box3(
                    new THREE.Vector3(x, y, box.min.z),
                    new THREE.Vector3(box.max.x, box.max.y, z)
                ),
                new THREE.Box3(
                    new THREE.Vector3(box.min.x, box.min.y, z),
                    new THREE.Vector3(x, y, box.max.z)
                ),
                new THREE.Box3(
                    new THREE.Vector3(x, box.min.y, z),
                    new THREE.Vector3(box.max.x, y, box.max.z)
                ),
                new THREE.Box3(
                    new THREE.Vector3(box.min.x, y, z),
                    new THREE.Vector3(x, box.max.y, box.max.z)
                ),
                new THREE.Box3(
                    new THREE.Vector3(x, y, z),
                    new THREE.Vector3(box.max.x, box.max.y, box.max.z)
                )
            );
        } else {
            // Create a point
			num_points++;
            if (density > 0) {
                let amount = density;
                let centerVec = new THREE.Vector3();
                let size = Math.max(box.max.x - box.min.x, box.max.y - box.min.y, box.max.z - box.min.z) * (params.voxel_size * 10);
                sizes.push(
                    size
                )
                box.getCenter(centerVec);

                positions.push(
                    (centerVec.z - Z / 2) * (params.voxel_size * 10), 
					(centerVec.y - Y / 2) * (params.voxel_size * 10), 
					(centerVec.x - X / 2) * (params.voxel_size * 10)
                );
                colors.push(amount / 255, amount / 255, amount / 255);

            }
        }
    }
	console.log("Num. voxels: ", num_points);

    // Update the existing points' geometry attributes
    points.geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    points.geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    points.geometry.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1));

    // Notify Three.js that the attributes have been updated
    points.geometry.attributes.position.needsUpdate = true;
    points.geometry.attributes.color.needsUpdate = true;
    points.geometry.attributes.size.needsUpdate = true;
	
	document.body.removeChild( progressBarDiv2 );
}

var num_voxels = 0;
function loadGenericTexture(fileTemplate, texture_array) {
	let worldcube;
	let offset;
	var color_value = new THREE.Color();

	var worldcubeGeometry = new THREE.BoxGeometry(params.width_X * params.voxel_size * scale_factor, 
												params.width_Y * params.voxel_size * scale_factor, 
												params.width_Z * params.voxel_size * scale_factor);
	worldcube = new THREE.Mesh(worldcubeGeometry, new THREE.MeshBasicMaterial({ color: params.wireframe_color }));
	worldcube.material.wireframe = true;
	worldcube.visible = false;
	worldcube.name = fileTemplate + '-wireframe';
	scene.add(worldcube);


	if(params.color_offset) offset = maxValue * appParams.threshold / 100;
	if(!params.color_offset) offset = minValue;

	var texture_array_length;
	if (appParams.loader === 'Voxel threshold') texture_array_length = texture_array.length -1; 
	else if (appParams.loader === 'Num of voxels') texture_array_length = parseInt(appParams.voxels_num, 10);
	for (var entry = 0; entry < texture_array_length; entry = entry + 1) {
		var x = texture_array[entry].x;
		var y = texture_array[entry].y;
		var z = texture_array[entry].z;
		var value = texture_array[entry].value;
		var threshold_value; 
		if (appParams.loader === 'Voxel threshold') threshold_value = maxValue * appParams.threshold / 100; 
		else if (appParams.loader === 'Num of voxels') threshold_value = 0;
		if (value > threshold_value && value != 0) {
			if(params.LUT == 'bw') color_value = LUT_BW( Math.ceil( ((value - offset) / (maxValue - offset)) * 255) );
			if(params.LUT == 'jet') color_value = LUT_jet_color( Math.ceil( ((value - offset) / (maxValue - offset)) * 255) );
			if(params.LUT == 'fire') color_value = LUT_fire_color( Math.ceil( ((value - offset) / (maxValue - offset)) * 255) );
			if(params.LUT == 'viridis') color_value = LUT_viridis_color( Math.ceil( ((value - offset) / (maxValue - offset)) * 255) );
			if(params.LUT == '5ramps') object.material.color = LUT_5ramps_color( Math.ceil( ((value - offset) / (maxValue - offset)) * 255) );
			const cubeMaterial = new THREE.MeshBasicMaterial({ clippingPlanes: clipPlanes,
																clipIntersection: params.clipIntersection, 
																depthWrite: params.depth_write,
																color: color_value, 
																transparent: true });
			cubeMaterial.opacity = opacity_weight(((value - offset) / (maxValue - offset)) * 255, 255, minValue, params.A);
			var cubeGeometry = new THREE.BoxGeometry(params.voxel_size * scale_factor, params.voxel_size * scale_factor, params.voxel_size * scale_factor);
			var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
			cube.position.set(  THREE.MathUtils.randFloatSpread(1200),
								THREE.MathUtils.randFloatSpread(1200),
								THREE.MathUtils.randFloatSpread(1200));
			//var targetPosition = new THREE.Vector3();
			//cube.position.set(z * (params.voxel_size * scale_factor) - (params.width_Z/2)*(params.voxel_size * scale_factor), 
			var targetPosition = new THREE.Vector3( x * (params.voxel_size * scale_factor) - (params.width_X/2)*(params.voxel_size * scale_factor), 
													y * (params.voxel_size * scale_factor) - (params.width_Y/2)*(params.voxel_size * scale_factor), 
													z * (params.voxel_size * scale_factor) - (params.width_Z/2)*(params.voxel_size * scale_factor));
			cube.name = fileTemplate;
			cube.userData = { X: x, Y: y, Z: z, finalPosition: targetPosition, color_value: Math.ceil((value / maxValue) * 255) };
			scene.add(cube);
			var threshold_visibility = 0;
			if (appParams.loader === 'Voxel threshold') threshold_visibility = maxValue * params.min_scale_factor / 100; 
			else if (appParams.loader === 'Num of voxels') threshold_visibility = 0;
			if (value < threshold_visibility) {
				cube.visible = false;
			}
			num_voxels = num_voxels + 1;
		}
	}
	implode(fileTemplate);
	console.log("Voxels loaded: ", num_voxels);
	document.body.removeChild( progressBarDiv );
}

function opacity_weight(x, maxValue, min, weight) {
	const N = maxValue;		// maximum value
	const x0 = min;			// offset value
	const A = weight;			// amplitude of exponential growth
	
	if (x <= x0) {
		return 0.0;
	} else if (x >= N) {
		return 1.0;
	} else {
		return 1.0 - Math.exp(-1* A * (x - x0) / (N - x0));
	}
}

function x_move(fileTemplate, value){
	scene.traverse((object) => {
		if ( object instanceof THREE.Points  && object.name === fileTemplate && object.position) {
			const positions = object.geometry.attributes.position.array;
            for (let i = 0; i < positions.length; i += 3) {
                positions[i] += parseFloat(value, 10); // Shift the x-coordinate
            }
            object.geometry.attributes.position.needsUpdate = true; // Notify Three.js that the attribute has been updated
		}
		if (object instanceof THREE.Mesh  && object.name === fileTemplate && object.position) {
			if(appParams.loader !== 'Instanced voxels') object.position.x = object.userData.finalPosition.x + parseFloat(value,10);
			else object.position.x = 0 + parseFloat(value,10);
		}
	});
}
function y_move(fileTemplate, value){
	scene.traverse((object) => {
		if ( object instanceof THREE.Points  && object.name === fileTemplate && object.position) {
			const positions = object.geometry.attributes.position.array;
            for (let i = 1; i < positions.length; i += 3) {
                positions[i] += parseFloat(value, 10); // Shift the x-coordinate
            }
            object.geometry.attributes.position.needsUpdate = true; // Notify Three.js that the attribute has been updated
		}
		if (object instanceof THREE.Mesh && object.name === fileTemplate && object.position) {
			if(appParams.loader !== 'Instanced voxels') object.position.y = object.userData.finalPosition.y + parseFloat(value,10);
			else object.position.y = 0 + parseFloat(value,10);
		}
	});
}
function z_move(fileTemplate, value){
	scene.traverse((object) => {
		if ( object instanceof THREE.Points  && object.name === fileTemplate && object.position) {
			const positions = object.geometry.attributes.position.array;
            for (let i = 2; i < positions.length; i += 3) {
                positions[i] += parseFloat(value, 10); // Shift the x-coordinate
            }
            object.geometry.attributes.position.needsUpdate = true; // Notify Three.js that the attribute has been updated
		}
		if (object instanceof THREE.Mesh && object.name === fileTemplate && object.position) {
			if(appParams.loader !== 'Instanced voxels') object.position.z = object.userData.finalPosition.z + parseFloat(value,10);
			else object.position.z = 0 + parseFloat(value,10);
		}
	});
}

function change_voxel_size (fileTemplate, value){
	params.voxel_size = parseFloat(value,10);
	scene.traverse((object) => {
		if (object instanceof THREE.Mesh) {
			if (object.name == fileTemplate) {
				object.geometry.parameters.width = params.voxel_size * scale_factor;
				object.geometry.parameters.height = params.voxel_size * scale_factor;
				object.geometry.parameters.depth = params.voxel_size * scale_factor;
				object.geometry = new THREE.BoxGeometry(object.geometry.parameters.width, object.geometry.parameters.height, object.geometry.parameters.depth);
				object.geometry.computeBoundingBox();
				object.position.x = object.userData.X * (params.voxel_size * scale_factor) - (params.width_X/2)*(params.voxel_size * scale_factor);
				object.position.y = object.userData.Y * (params.voxel_size * scale_factor) - (params.width_Y/2)*(params.voxel_size * scale_factor);
				object.position.z = object.userData.Z * (params.voxel_size * scale_factor) - (params.width_Z/2)*(params.voxel_size * scale_factor);
			}
		}
	});
}


function update_material (fileTemplate, value ) {
	if(params.color_offset) offset = maxValue * params.min_scale_factor / 100;
	if(!params.color_offset) offset = minValue ;
	var maxOffset = params.max_scale_factor * maxValue / 100;
	var LUT;
	if(params.LUT == 'bw') LUT = LUT_BW;
	if(params.LUT == 'jet') LUT = LUT_jet_color;
	if(params.LUT == 'fire') LUT = LUT_fire_color;
	if(params.LUT == 'viridis') LUT = LUT_viridis_color;
	if(params.LUT == '5ramps') LUT = LUT_5ramps_color;
	scene.traverse((object) => {
		if ( object instanceof THREE.Points  && object.name === fileTemplate) {
			if ( params.visible ) object.visible = true;
			if ( !params.visible ) object.visible = false;
		}
		if (object instanceof THREE.Mesh) {
			if (object.name == fileTemplate && (object.userData.color_value < maxValue * params.min_scale_factor / 100 || !params.visible) ) {
				object.visible = false;
			}
			if (object.name == fileTemplate && object.userData.color_value > maxValue * params.min_scale_factor / 100 && params.visible) {
				object.visible = true;
				//var object_value = Math.ceil( object.userData.color_value / ( (params.max_scale_factor * maxValue / 100) - offset ) * 255 );
				var object_value = Math.ceil( ( ( maxValue - minValue) * ( object.userData.color_value - offset) ) / ( maxOffset - minValue - offset ) ); 
				if(object_value > 255) object_value = 255;
				if(object_value < 0) object_value = 0;
				object.material.color = LUT( object_value );
				object.material.opacity = opacity_weight(object.userData.color_value, maxValue, minValue * params.min_scale_factor / 100, params.A);
			}
		}
	});
	//console.log(voxels_n, " Voxels visible");
}

let needsUpdate = false;

function change_alpha_hash(fileTemplate, value) {
	params.alphaHash = value;
	scene.traverse((object) => {
		if (object instanceof THREE.Mesh && object.name == fileTemplate) {
			object.material.alphaHash = params.alphaHash;
			object.material.transparent = ! params.alphaHash;
			object.material.depthWrite = params.alphaHash;

			object.material.needsUpdate = true;
			needsUpdate = true;
			console.log("HERE ", object.alphaHash);
		}
	});
}

// Define the ease-out function
function easeOut(t) {
	return 1 - Math.pow(1 - t, 2);
}

// Define the implosion animation function
function implodeObject(object, duration, callback) {
	let startTime = null;
	let initialPosition = object.position.clone();
	
	function animateImplosion(timestamp) {
		 if (!startTime) startTime = timestamp;
		 const progress = Math.min((timestamp - startTime) / duration, 1);
		 const easedProgress = 1 - Math.pow(1 - progress, 2); // Apply the ease-out function
		
		 // Calculate the implosion distance based on eased progress
		 const implosionDistance = initialPosition.distanceTo(object.userData.finalPosition) * easedProgress;
		 const implosionDirection = object.userData.finalPosition.clone().sub(initialPosition).normalize();
		 object.position.copy(initialPosition).addScaledVector(implosionDirection, implosionDistance);
		
		 if (progress < 1) {
		 	requestAnimationFrame(animateImplosion);
		 } else {
		 	// At the end of the implosion, set position to the final target position
		 	object.position.copy(object.userData.finalPosition);
		
		 	if (typeof callback === 'function') callback();
		 }
	}

	requestAnimationFrame(animateImplosion);
}

function implode(fileTemplate) {
	// Specify the implosion parameters here
	const duration = appParams.implosion_time; // Set the duration (milliseconds) for the implosion animation

	scene.traverse((object) => {
	if (object instanceof THREE.Mesh && object.name === fileTemplate) {
		// Call the implodeObject function to perform the implosion animation
		implodeObject(object, duration, () => {
		// This callback function will be executed when the animation is finished
		// Add any additional logic here if needed
		});
	}
	});
}

function removeFolderByName(gui, folderName) {
	for (const folderKey in gui.__folders) {
	if (gui.__folders.hasOwnProperty(folderKey)) {
		const folder = gui.__folders[folderKey];
		if (folder.name === folderName) {
		// Remove the folder from the dat.GUI DOM
		folder.domElement.parentNode.removeChild(folder.domElement);
		// Remove the folder from the dat.GUI instance
		delete gui.__folders[folderKey];
		break; // Stop the loop once the folder is removed
		}
	}
	}
}

// Define the explosion animation function with ease-out effect
function explodeObject(object, distance, duration, callback) {
	let startTime = null;
	let initialPosition = object.position.clone();
	let explosionDirection = new THREE.Vector3(Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1).normalize();
	//let explosionDirection = initialPosition.clone().normalize();
	let initialOpacity = object.material.opacity; // Store the initial opacity

	object.material.clippingPlanes = null;

	function animateExplosion(timestamp) {
	if (!startTime) startTime = timestamp;
	const progress = (timestamp - startTime) / duration;
	if (progress < 1) {
		const explosionDistance = distance * scale_factor * easeOut(progress);
		object.position.copy(initialPosition).addScaledVector(explosionDirection, explosionDistance);
		const opacity = initialOpacity * (1 - easeOut(progress)); // Gradually decrease opacity
		object.material.opacity = opacity;

		requestAnimationFrame(animateExplosion);
	} else {
		// At the end of the explosion, set position and opacity to final values
		object.position.copy(initialPosition).addScaledVector(explosionDirection, distance * scale_factor);
		object.material.opacity = 0;

		if (typeof callback === 'function') callback();
	}
	}
	requestAnimationFrame(animateExplosion);
}

function explode(fileTemplate) {
	scene.traverse((object) => {
	if (object instanceof THREE.Mesh && object.name == fileTemplate && object.visible ) {
		explodeObject(object, 80, appParams.explosion_time, () => {
		// This callback function will be executed when the animation is finished
		// Add any additional logic here if needed
			scene.remove(object);
		});
	}
	});
	removeFolderByName(gui, fileTemplate);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////			 EPD LOADER			//////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function isInside(x, y, z, BX, BY, BZ) {
	if (Math.abs(x) > BX) {
		return false;
	}
	if (Math.abs(y) > BY) {
		return false;
	}
	if (Math.abs(z) > BZ) {
		return false;
	} else {
		return true;
	}
}

var index = 0;
function Bresenham3D(x1, y1, z1, x2, y2, z2, lX, lY, lZ, mesh) {
	var dummy = new THREE.Object3D();
	var BoxX, BoxY, BoxZ;
	BoxX = lX ;
	BoxY = lY ;
	BoxZ = lZ ;
	var i, dx, dy, dz, l, m, n, x_inc, y_inc, z_inc, err_1, err_2, dx2, dy2, dz2;
	var point = [-1, -1, -1];
	var step = 1;
	point[0] = x1;
	point[1] = y1;
	point[2] = z1;
	dx = x2 - x1;
	dy = y2 - y1;
	dz = z2 - z1;
	x_inc = (dx < 0) ? -step : step;
	l = Math.abs(dx);
	y_inc = (dy < 0) ? -step : step;
	m = Math.abs(dy);
	z_inc = (dz < 0) ? -step : step;
	n = Math.abs(dz);
	dx2 = l << 1;
	dy2 = m << 1;
	dz2 = n << 1;

	if ((l >= m) && (l >= n)) {
		err_1 = dy2 - l;
		err_2 = dz2 - l;
		for (i = 0; i < l; i++) {
			if (isInside(point[0], point[1], point[2], BoxX, BoxY, BoxZ) || !config_voxel.LOR_clipping) {
				dummy.position.set(point[0], point[1], point[2]);
				dummy.updateMatrix();
				mesh.setMatrixAt(index, dummy.matrix);
				++index;
		 	}

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
			if (isInside(point[0], point[1], point[2], BoxX, BoxY, BoxZ) || !config_voxel.LOR_clipping) {
				dummy.position.set(point[0], point[1], point[2]);
				dummy.updateMatrix();
				mesh.setMatrixAt(index, dummy.matrix);
				++index;
			}
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
			if (isInside(point[0], point[1], point[2], BoxX, BoxY, BoxZ) || !config_voxel.LOR_clipping) {
				dummy.position.set(point[0], point[1], point[2]);
				dummy.updateMatrix();
				mesh.setMatrixAt(index, dummy.matrix);
				++index;
			}
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
	if (isInside(point[0], point[1], point[2], BoxX, BoxY, BoxZ) || !config_voxel.LOR_clipping) {
		dummy.position.set(point[0], point[1], point[2]);
		dummy.updateMatrix();
		mesh.setMatrixAt(index, dummy.matrix);
		++index;
	}
	mesh.instanceMatrix.needsUpdate = true;
}

var index2 = 0;
function drawCylinder(x1, y1, z1, x2, y2, z2, cylinders_mesh) {
	var vstart = new THREE.Vector3(x1, y1, z1);
	var vend = new THREE.Vector3(x2, y2, z2);
	var distance = vstart.distanceTo(vend);

	const { x: ax, y: ay, z: az } = vstart;
	const { x: bx, y: by, z: bz } = vend;
	const stickAxis = new THREE.Vector3(bx - ax, by - ay, bz - az).normalize();

	const scale = new THREE.Vector3(1, distance, 1);
	const position = new THREE.Vector3((bx + ax) / 2, (by + ay) / 2, (bz + az) / 2);
	const quaternion = new THREE.Quaternion();

	const cylinderUpAxis = new THREE.Vector3(0, 1, 0);
	quaternion.setFromUnitVectors(cylinderUpAxis, stickAxis);

	const matrix = new THREE.Matrix4();
	matrix.compose(position, quaternion, scale);

	cylinders_mesh.setMatrixAt(index2, matrix);
	++index2;
	cylinders_mesh.instanceMatrix.needsUpdate = true;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////		   APP FUNCTIONS AND RUN			//////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var stats = new Stats();
stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
stats.domElement.style.cssText = 'position:absolute;top:110px;left:0px;';
//document.body.appendChild(stats.dom);
document.getElementById('scene-container').appendChild(stats.dom);
var stats1 = new Stats();
stats1.showPanel(1); // 0: fps, 1: ms, 2: mb, 3+: custom
stats1.domElement.style.cssText = 'position:absolute;top:160px;left:0px;';
//document.body.appendChild(stats1.dom);
document.getElementById('scene-container').appendChild(stats1.dom);
//var stats2 = new Stats();
//stats2.showPanel(2); // 0: fps, 1: ms, 2: mb, 3+: custom
//stats2.domElement.style.cssText = 'position:absolute;top:144px;left:160px;';
//document.body.appendChild(stats2.dom);
//document.getElementById('scene-container').appendChild(stats2.dom);


// Build postprocessing stack
// Render Targets
const defaultTexture = new THREE.WebGLRenderTarget(clientWidth, clientHeight, {
    minFilter: THREE.LinearFilter,
    magFilter: THREE.LinearFilter,
    type: THREE.FloatType,
});
defaultTexture.depthTexture = new THREE.DepthTexture(clientWidth, clientHeight, THREE.FloatType);

// Post Effects
const effectPass = new THREE.ShaderPass(EffectShader);
const copyPass = new THREE.ShaderPass({
    uniforms: {
        diffuse: { value: defaultTexture.texture },
    },
    vertexShader: /* glsl */ `
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }`,
    fragmentShader: /* glsl */ `
        uniform sampler2D diffuse;
        varying vec2 vUv;
        void main() {
            gl_FragColor = vec4(texture2D(diffuse, vUv).rgb, 1.0);
        }`
});

const composer = new THREE.EffectComposer(renderer);

composer.addPass(copyPass);
////////////////////////////////////////////////
composer.addPass(effectPass); 
////////////////////////////////////////////////

function animate() {
    if (test == 1) {
        points.material.uniforms.uScale.value = (innerHeight / Math.abs(camera.top - camera.bottom)) * camera.zoom;
    }
	const time = - performance.now() * 0.00015;
	if (params.rotationEnabled) {
		camera.position.x = 1000 * Math.cos( time );
		camera.position.z = 1000 * Math.sin( time );
		camera.lookAt( scene.position );
	}
	controls.update();
	//////
	if(params.jet_lut){
    	renderer.setRenderTarget(defaultTexture);
    	renderer.clear();
    	renderer.render(scene, camera);
    	copyPass.uniforms.diffuse.value = defaultTexture.texture;
    	composer.render();
	}else {
        // Render directly to the screen when post-processing is disabled
        renderer.setRenderTarget(null);
        renderer.clear();
        renderer.render(scene, camera);
    }
	//////
	requestAnimationFrame(animate);
	
	renderer.render(scene, camera);
	
	//render();
	stats.update();
	stats1.update();
	//stats2.update();
}

animate();

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////		   COLOR LUTS			//////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function LUT_BW(value) {
	const color = new THREE.Color();
	color.setRGB(LUT_red_viridis[value] / 255, LUT_red_viridis[value] / 255, LUT_red_viridis[value] / 255);
	return color;
}

function LUT_viridis_color(value) {
	const color = new THREE.Color();
	color.setRGB(LUT_red_viridis[value] / 255, LUT_green_viridis[value] / 255, LUT_blue_viridis[value] / 255);
	return color;
}

function LUT_jet_color(value) {
	const color = new THREE.Color();
	color.setRGB(LUT_red_jet[value] / 255, LUT_green_jet[value] / 255, LUT_blue_jet[value] / 255);
	return color;
}

function LUT_fire_color(value) {
	const color = new THREE.Color();
	color.setRGB(LUT_red_fire[value] / 255, LUT_green_fire[value] / 255, LUT_blue_fire[value] / 255);
	return color;
}

function LUT_5ramps_color(value) {
	const color = new THREE.Color();
	color.setRGB(LUT_red_5ramps[value] / 255, LUT_green_5ramps[value] / 255, LUT_blue_5ramps[value] / 255);
	return color;
}

const LUT_red_jet = [0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	4,	8,	12,	16,	20,	24,	28,	32,	36,	40,	44,	48,	52,	56,	60,	64,	68,	72,	76,	80,	84,	88,	92,	96,	100,	104,	108,	112,	116,	120,	124,	128,	131,	135,	139,	143,	147,	151,	155,	159,	163,	167,	171,	175,	179,	183,	187,	191,	195,	199,	203,	207,	211,	215,	219,	223,	227,	231,	235,	239,	243,	247,	251,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	251,	247,	243,	239,	235,	231,	227,	223,	219,	215,	211,	207,	203,	199,	195,	191,	187,	183,	179,	175,	171,	167,	163,	159,	155,	151,	147,	143,	139,	135,	131,	128];
const LUT_red_fire = [0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	4,	7,	10,	13,	16,	19,	22,	25,	28,	31,	34,	37,	40,	43,	46,	49,	52,	55,	58,	61,	64,	67,	70,	73,	76,	79,	82,	85,	88,	91,	94,	98,	101,	104,	107,	110,	113,	116,	119,	122,	125,	128,	131,	134,	137,	140,	143,	146,	148,	150,	152,	154,	156,	158,	160,	162,	163,	164,	166,	167,	168,	170,	171,	173,	174,	175,	177,	178,	179,	181,	182,	184,	185,	186,	188,	189,	190,	192,	193,	195,	196,	198,	199,	201,	202,	204,	205,	207,	208,	209,	210,	212,	213,	214,	215,	217,	218,	220,	221,	223,	224,	226,	227,	229,	230,	231,	233,	234,	235,	237,	238,	240,	241,	243,	244,	246,	247,	249,	250,	252,	252,	252,	253,	253,	253,	254,	254,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255];
const LUT_red_viridis = [68,	68,	68,	69,	69,	69,	70,	70,	70,	70,	71,	71,	71,	71,	71,	71,	71,	72,	72,	72,	72,	72,	72,	72,	72,	72,	71,	71,	71,	71,	71,	71,	71,	70,	70,	70,	70,	69,	69,	69,	69,	68,	68,	67,	67,	67,	66,	66,	66,	65,	65,	64,	64,	63,	63,	62,	62,	61,	61,	61,	60,	60,	59,	59,	58,	58,	57,	57,	56,	56,	55,	55,	54,	54,	53,	53,	52,	52,	51,	51,	50,	50,	49,	49,	49,	48,	48,	47,	47,	46,	46,	46,	45,	45,	44,	44,	44,	43,	43,	42,	42,	42,	41,	41,	40,	40,	40,	39,	39,	39,	38,	38,	38,	37,	37,	36,	36,	36,	35,	35,	35,	34,	34,	34,	33,	33,	33,	32,	32,	32,	31,	31,	31,	31,	31,	30,	30,	30,	30,	30,	30,	30,	30,	30,	30,	30,	31,	31,	31,	32,	32,	33,	33,	34,	35,	35,	36,	37,	38,	39,	40,	41,	42,	43,	44,	46,	47,	48,	50,	51,	53,	54,	56,	57,	59,	61,	62,	64,	66,	68,	69,	71,	73,	75,	77,	79,	81,	83,	85,	87,	89,	91,	94,	96,	98,	100,	103,	105,	107,	109,	112,	114,	116,	119,	121,	124,	126,	129,	131,	134,	136,	139,	141,	144,	146,	149,	151,	154,	157,	159,	162,	165,	167,	170,	173,	175,	178,	181,	183,	186,	189,	191,	194,	197,	199,	202,	205,	207,	210,	212,	215,	218,	220,	223,	225,	228,	231,	233,	236,	238,	241,	243,	246,	248,	250,	253];
const LUT_green_jet = [0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	4,	8,	12,	16,	20,	24,	28,	32,	36,	40,	44,	48,	52,	56,	60,	64,	68,	72,	76,	80,	84,	88,	92,	96,	100,	104,	108,	112,	116,	120,	124,	128,	131,	135,	139,	143,	147,	151,	155,	159,	163,	167,	171,	175,	179,	183,	187,	191,	195,	199,	203,	207,	211,	215,	219,	223,	227,	231,	235,	239,	243,	247,	251,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	251,	247,	243,	239,	235,	231,	227,	223,	219,	215,	211,	207,	203,	199,	195,	191,	187,	183,	179,	175,	171,	167,	163,	159,	155,	151,	147,	143,	139,	135,	131,	128,	124,	120,	116,	112,	108,	104,	100,	96,	92,	88,	84,	80,	76,	72,	68,	64,	60,	56,	52,	48,	44,	40,	36,	32,	28,	24,	20,	16,	12,	8,	4,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0];
const LUT_green_fire = [0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	3,	5,	7,	8,	10,	12,	14,	16,	19,	21,	24,	27,	29,	32,	35,	37,	40,	43,	46,	48,	51,	54,	57,	59,	62,	65,	68,	70,	73,	76,	79,	81,	84,	87,	90,	92,	95,	98,	101,	103,	105,	107,	109,	111,	113,	115,	117,	119,	121,	123,	125,	127,	129,	131,	133,	134,	136,	138,	140,	141,	143,	145,	147,	148,	150,	152,	154,	155,	157,	159,	161,	162,	164,	166,	168,	169,	171,	173,	175,	176,	178,	180,	182,	184,	186,	188,	190,	191,	193,	195,	197,	199,	201,	203,	205,	206,	208,	210,	212,	213,	215,	217,	219,	220,	222,	224,	226,	228,	230,	232,	234,	235,	237,	239,	241,	242,	244,	246,	248,	248,	249,	250,	251,	252,	253,	254,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255];
const LUT_green_viridis = [1,	2,	3,	5,	6,	8,	9,	11,	12,	14,	15,	17,	18,	20,	21,	22,	24,	25,	26,	28,	29,	30,	32,	33,	34,	35,	37,	38,	39,	40,	42,	43,	44,	45,	47,	48,	49,	50,	52,	53,	54,	55,	57,	58,	59,	60,	61,	62,	64,	65,	66,	67,	68,	69,	71,	72,	73,	74,	75,	76,	77,	78,	80,	81,	82,	83,	84,	85,	86,	87,	88,	89,	90,	91,	92,	93,	94,	95,	96,	97,	98,	99,	100,	101,	102,	103,	104,	105,	106,	107,	108,	109,	110,	111,	112,	113,	114,	115,	116,	117,	118,	119,	120,	121,	122,	122,	123,	124,	125,	126,	127,	128,	129,	130,	131,	132,	133,	134,	135,	136,	137,	137,	138,	139,	140,	141,	142,	143,	144,	145,	146,	147,	148,	149,	150,	151,	152,	153,	153,	154,	155,	156,	157,	158,	159,	160,	161,	162,	163,	164,	165,	166,	167,	167,	168,	169,	170,	171,	172,	173,	174,	175,	176,	177,	177,	178,	179,	180,	181,	182,	183,	184,	185,	185,	186,	187,	188,	189,	190,	190,	191,	192,	193,	194,	194,	195,	196,	197,	198,	198,	199,	200,	201,	201,	202,	203,	204,	204,	205,	206,	206,	207,	208,	208,	209,	210,	210,	211,	211,	212,	213,	213,	214,	214,	215,	215,	216,	216,	217,	217,	218,	218,	219,	219,	220,	220,	221,	221,	221,	222,	222,	223,	223,	223,	224,	224,	224,	225,	225,	225,	226,	226,	226,	227,	227,	227,	228,	228,	228,	229,	229,	229,	230,	230,	230,	231];
const LUT_blue_jet = [131,	135,	139,	143,	147,	151,	155,	159,	163,	167,	171,	175,	179,	183,	187,	191,	195,	199,	203,	207,	211,	215,	219,	223,	227,	231,	235,	239,	243,	247,	251,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	255,	251,	247,	243,	239,	235,	231,	227,	223,	219,	215,	211,	207,	203,	199,	195,	191,	187,	183,	179,	175,	171,	167,	163,	159,	155,	151,	147,	143,	139,	135,	131,	128,	124,	120,	116,	112,	108,	104,	100,	96,	92,	88,	84,	80,	76,	72,	68,	64,	60,	56,	52,	48,	44,	40,	36,	32,	28,	24,	20,	16,	12,	8,	4,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0];
const LUT_blue_fire = [0,	7,	15,	22,	30,	38,	45,	53,	61,	65,	69,	74,	78,	82,	87,	91,	96,	100,	104,	108,	113,	117,	121,	125,	130,	134,	138,	143,	147,	151,	156,	160,	165,	168,	171,	175,	178,	181,	185,	188,	192,	195,	199,	202,	206,	209,	213,	216,	220,	220,	221,	222,	223,	224,	225,	226,	227,	224,	222,	220,	218,	216,	214,	212,	210,	206,	202,	199,	195,	191,	188,	184,	181,	177,	173,	169,	166,	162,	158,	154,	151,	147,	143,	140,	136,	132,	129,	125,	122,	118,	114,	111,	107,	103,	100,	96,	93,	89,	85,	82,	78,	74,	71,	67,	64,	60,	56,	53,	49,	45,	42,	38,	35,	31,	27,	23,	20,	16,	12,	8,	5,	4,	3,	3,	2,	1,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	4,	8,	13,	17,	21,	26,	30,	35,	42,	50,	58,	66,	74,	82,	90,	98,	105,	113,	121,	129,	136,	144,	152,	160,	167,	175,	183,	191,	199,	207,	215,	223,	227,	231,	235,	239,	243,	247,	251,	255,	255,	255,	255,	255,	255,	255,	255];
const LUT_blue_viridis = [84,	85,	87,	88,	90,	91,	92,	94,	95,	97,	98,	99,	101,	102,	103,	105,	106,	107,	108,	110,	111,	112,	113,	114,	115,	116,	117,	118,	119,	120,	121,	122,	123,	124,	124,	125,	126,	127,	127,	128,	129,	129,	130,	131,	131,	132,	132,	133,	133,	134,	134,	135,	135,	135,	136,	136,	137,	137,	137,	137,	138,	138,	138,	138,	139,	139,	139,	139,	139,	140,	140,	140,	140,	140,	140,	140,	141,	141,	141,	141,	141,	141,	141,	141,	141,	141,	141,	141,	141,	142,	142,	142,	142,	142,	142,	142,	142,	142,	142,	142,	142,	142,	142,	142,	142,	142,	142,	142,	142,	142,	142,	142,	142,	142,	141,	141,	141,	141,	141,	141,	141,	141,	141,	141,	141,	140,	140,	140,	140,	140,	140,	139,	139,	139,	139,	138,	138,	138,	138,	137,	137,	137,	136,	136,	136,	135,	135,	134,	134,	133,	133,	133,	132,	132,	131,	130,	130,	129,	129,	128,	127,	127,	126,	125,	125,	124,	123,	122,	122,	121,	120,	119,	118,	118,	117,	116,	115,	114,	113,	112,	111,	110,	109,	108,	107,	105,	104,	103,	102,	101,	100,	98,	97,	96,	95,	93,	92,	91,	89,	88,	86,	85,	84,	82,	81,	79,	78,	76,	75,	73,	71,	70,	68,	67,	65,	63,	62,	60,	58,	56,	55,	53,	51,	50,	48,	46,	44,	43,	41,	39,	38,	36,	34,	33,	31,	30,	29,	28,	27,	26,	25,	24,	24,	24,	24,	24,	25,	25,	26,	27,	28,	30,	31,	33,	34,	36];
const LUT_red_5ramps = [0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	5,	10,	15,	20,	25,	30,	35,	40,	45,	50,	55,	60,	65,	70,	75,	80,	85,	90,	95,	100,	105,	110,	115,	120,	125,	130,	135,	140,	145,	150,	155,	160,	165,	170,	175,	180,	185,	190,	195,	200,	205,	210,	215,	220,	225,	230,	235,	240,	245,	250,	1,	5,	10,	15,	20,	25,	30,	35,	40,	45,	50,	55,	60,	65,	70,	75,	80,	85,	90,	95,	100,	105,	110,	115,	120,	125,	130,	135,	140,	145,	150,	155,	160,	165,	170,	175,	180,	185,	190,	195,	200,	205,	210,	215,	220,	225,	230,	235,	240,	245,	250,	1,	5,	10,	15,	20,	25,	30,	35,	40,	45,	50,	55,	60,	65,	70,	75,	80,	85,	90,	95,	100,	105,	110,	115,	120,	125,	130,	135,	140,	145,	150,	155,	160,	165,	170,	175,	180,	185,	190,	195,	200,	205,	210,	215,	220,	225,	230,	235,	240,	245,	250,	255];
const LUT_green_5ramps = [0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	5,	10,	15,	20,	25,	30,	35,	40,	45,	50,	55,	60,	65,	70,	75,	80,	85,	90,	95,	100,	105,	110,	115,	120,	125,	130,	135,	140,	145,	150,	155,	160,	165,	170,	175,	180,	185,	190,	195,	200,	205,	210,	215,	220,	225,	230,	235,	240,	245,	250,	1,	5,	10,	15,	20,	25,	30,	35,	40,	45,	50,	55,	60,	65,	70,	75,	80,	85,	90,	95,	100,	105,	110,	115,	120,	125,	130,	135,	140,	145,	150,	155,	160,	165,	170,	175,	180,	185,	190,	195,	200,	205,	210,	215,	220,	225,	230,	235,	240,	245,	250,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	5,	10,	15,	20,	25,	30,	35,	40,	45,	50,	55,	60,	65,	70,	75,	80,	85,	90,	95,	100,	105,	110,	115,	120,	125,	130,	135,	140,	145,	150,	155,	160,	165,	170,	175,	180,	185,	190,	195,	200,	205,	210,	215,	220,	225,	230,	235,	240,	245,	250,	255];
const LUT_blue_5ramps = [1,	5,	10,	15,	20,	25,	30,	35,	40,	45,	50,	55,	60,	65,	70,	75,	80,	85,	90,	95,	100,	105,	110,	115,	120,	125,	130,	135,	140,	145,	150,	155,	160,	165,	170,	175,	180,	185,	190,	195,	200,	205,	210,	215,	220,	225,	230,	235,	240,	245,	250,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	5,	10,	15,	20,	25,	30,	35,	40,	45,	50,	55,	60,	65,	70,	75,	80,	85,	90,	95,	100,	105,	110,	115,	120,	125,	130,	135,	140,	145,	150,	155,	160,	165,	170,	175,	180,	185,	190,	195,	200,	205,	210,	215,	220,	225,	230,	235,	240,	245,	250,	255];

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////			   EXPERIMENTAL			//////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Function to add a bounding box and control arrows
function addBoundingBox(fileTemplate) {
  const cubes = [];
  scene.traverse((object) => {
	if (object instanceof THREE.Mesh && object.name === fileTemplate) {
	  cubes.push(object);
	}
  });
  // Find the min and max positions of all cubes
  let minX = Infinity;
  let minY = Infinity;
  let minZ = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;
  let maxZ = -Infinity;

  for (const cube of cubes) {
	minX = Math.min(minX, cube.position.x);
	minY = Math.min(minY, cube.position.y);
	minZ = Math.min(minZ, cube.position.z);
	maxX = Math.max(maxX, cube.position.x);
	maxY = Math.max(maxY, cube.position.y);
	maxZ = Math.max(maxZ, cube.position.z);
  }

  // Calculate the center of the bounding box
  const centerX = (maxX + minX) / 2;
  const centerY = (maxY + minY) / 2;
  const centerZ = (maxZ + minZ) / 2;

  // Create the bounding box
  const boundingBoxSize = new THREE.Vector3(maxX - minX, maxY - minY, maxZ - minZ);
  const boundingBoxGeometry = new THREE.BoxGeometry(boundingBoxSize.x, boundingBoxSize.y, boundingBoxSize.z);
  const boundingBoxMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true, transparent: true });
  const boundingBox = new THREE.Mesh(boundingBoxGeometry, boundingBoxMaterial);
  boundingBox.position.set(centerX, centerY, centerZ);
  scene.add(boundingBox);

  // Arrow geometries
  const arrowHeadGeometry = new THREE.ConeGeometry(0.1, 0.3, 8);
  const arrowShaftGeometry = new THREE.CylinderGeometry(0.05, 0.05, 0.8, 8);
  
  // Arrow materials
  const arrowMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 }); // Replace with your desired color
  
  // Create the arrows
  const arrowX = new THREE.Object3D();
  const arrowY = new THREE.Object3D();
  const arrowZ = new THREE.Object3D();
  
  const arrowHead = new THREE.Mesh(arrowHeadGeometry, arrowMaterial);
  const arrowShaft = new THREE.Mesh(arrowShaftGeometry, arrowMaterial);
  
  arrowShaft.position.y = 0.4;
  
  arrowX.add(arrowHead);
  arrowX.add(arrowShaft);
  arrowY.add(arrowHead.clone());
  arrowY.add(arrowShaft.clone());
  arrowZ.add(arrowHead.clone());
  arrowZ.add(arrowShaft.clone());
  
  arrowX.rotation.z = -Math.PI / 2;
  arrowY.rotation.x = Math.PI / 2;
  
  scene.add(arrowX);
  scene.add(arrowY);
  scene.add(arrowZ);

  // Create clickable arrows
  //const arrowX = new THREE.ArrowHelper(new THREE.Vector3(1, 0, 0), new THREE.Vector3(centerX, centerY, centerZ), boundingBoxSize.x, 0xff0000);
  //const arrowY = new THREE.ArrowHelper(new THREE.Vector3(0, 1, 0), new THREE.Vector3(centerX, centerY, centerZ), boundingBoxSize.y, 0x00ff00);
  //const arrowZ = new THREE.ArrowHelper(new THREE.Vector3(0, 0, 1), new THREE.Vector3(centerX, centerY, centerZ), boundingBoxSize.z, 0x0000ff);

  scene.add(arrowX);
  scene.add(arrowY);
  scene.add(arrowZ);

	// Add event listeners for mouse events on the arrows
  arrowX.addEventListener('mousedown', onMouseDown);
  arrowX.addEventListener('mouseup', onMouseUp);
  arrowX.addEventListener('mousemove', onMouseMove);
  arrowY.addEventListener('mousedown', onMouseDown);
  arrowY.addEventListener('mouseup', onMouseUp);
  arrowY.addEventListener('mousemove', onMouseMove);
  arrowZ.addEventListener('mousedown', onMouseDown);
  arrowZ.addEventListener('mouseup', onMouseUp);
  arrowZ.addEventListener('mousemove', onMouseMove);

  // Store the arrows in an array for later use
  controlArrows = [arrowX, arrowY, arrowZ];

  // Define arrow drag behavior
  arrowX.onDrag = (delta) => {
	boundingBox.position.x += delta.x;
	for (const cube of cubes) {
	  cube.position.x += delta.x;
	}
  };

  arrowY.onDrag = (delta) => {
	boundingBox.position.y += delta.y;
	for (const cube of cubes) {
	  cube.position.y += delta.y;
	}
  };

  arrowZ.onDrag = (delta) => {
	boundingBox.position.z += delta.z;
	for (const cube of cubes) {
	  cube.position.z += delta.z;
	}
  };
}

let isDragging = false;
let currentArrow = null;
let intersection = null;

function onMouseDown(event) {
  event.preventDefault();
  const mouse = new THREE.Vector2(
	(event.clientX / window.innerWidth) * 2 - 1,
	-(event.clientY / window.innerHeight) * 2 + 1
  );

  raycaster.setFromCamera(mouse, camera);

  const intersects = raycaster.intersectObjects(controlArrows);

  if (intersects.length > 0) {
	isDragging = true;
	currentArrow = intersects[0].object;
  }
}

function onMouseUp(event) {
  event.preventDefault();
  isDragging = false;
  currentArrow = null;
}

function onMouseMove(event) {
  event.preventDefault();

  if (isDragging && currentArrow) {
	const mouse = new THREE.Vector2(
	  (event.clientX / window.innerWidth) * 2 - 1,
	  -(event.clientY / window.innerHeight) * 2 + 1
	);

	raycaster.setFromCamera(mouse, camera);
	const intersects = raycaster.intersectObject(plane);

	if (intersects.length > 0) {
	  const point = intersects[0].point;

	  // Update the position of the bounding box and cubes based on the currentArrow
	  // You can implement the translation logic here using the 'point' position.
	}
  }
}


/*
function checkFPS(targetFPS, minScaleFactor, maxScaleFactor, fileTemplate) {
  let scaleFactor = params.min_scale_factor;
  const maxDuration = 40 * 1000; // 20 seconds in milliseconds
  let startTime = Date.now();

  performFPSCheck(currentFPS => {
	if (Date.now() - startTime >= maxDuration) {
	  console.log("Max duration reached. Exiting loop.");
	  return;
	}

	console.log("Current FPS:", currentFPS);
	if (Math.abs(targetFPS - currentFPS) >= 2) {
	  scaleFactor += targetFPS > currentFPS ? 1 : -1;
	  if (scaleFactor < minScaleFactor) {
		scaleFactor = minScaleFactor;
	  } else if (scaleFactor > maxScaleFactor) {
		scaleFactor = maxScaleFactor;
	  }
	  console.log(scaleFactor, minScaleFactor, maxScaleFactor);
	  params.min_scale_factor = scaleFactor;
	  gui.updateDisplay();
	  var voxels_n = 0;
	  scene.traverse((object) => {
	  	if (object instanceof THREE.Mesh) {
	  		if (object.name == fileTemplate && object.userData.color_value < maxValue * params.min_scale_factor / 100 ) {
	  			object.visible = false;
	  		}
	  		if (object.name == fileTemplate && object.userData.color_value > maxValue * params.min_scale_factor / 100 && params.visible) {
	  			object.visible = true;
				voxels_n = voxels_n + 1;
	  			// TODO fix this opacity max and min range!!!
	  			//object.material.opacity = opacity_weight(object.userData.color_value, maxValue, minValue * params.min_scale_factor / 100, params.A);
	  		}
	  	}
  	  });
	  console.log(voxels_n, " voxels visible");

	  // Continue checking FPS
	  performFPSCheck(currentFPS);
	} else {
	  console.log("Target FPS achieved. Exiting loop.");
	}
  });
}
*/

function checkFPS(targetFPS, minScaleFactor, maxScaleFactor, fileTemplate) {
  let scaleFactor = params.min_scale_factor;
  const maxDuration = 40 * 1000; // 20 seconds in milliseconds
  let startTime = Date.now();
  let continueLoop = true; // Flag to control the loop

  function performFPSCheck() {
	if (!continueLoop) {
	  console.log("Max duration reached. Exiting loop.");
	  return;
	}

	let currentFPS = 0;
	let frameCount = 0;
	let fpsStartTime = performance.now();

	function checkFPS() {
	  frameCount++;
	  const currentTime = performance.now();
	  const timeElapsed = currentTime - fpsStartTime;

	  if (timeElapsed >= 1000) {
		currentFPS = frameCount;
		frameCount = 0;
		fpsStartTime = currentTime;
	  }

	  console.log("Current FPS:", currentFPS);
	  if (Math.abs(targetFPS - currentFPS) >= 5) {
		scaleFactor += targetFPS > currentFPS ? 1 : -1;
		scaleFactor = Math.min(maxScaleFactor, Math.max(minScaleFactor, scaleFactor));
		console.log(scaleFactor, minScaleFactor, maxScaleFactor);
		params.min_scale_factor = scaleFactor;
		gui.updateDisplay();
		var voxels_n = 0;
		scene.traverse((object) => {
		  if (object instanceof THREE.Mesh) {
			if (object.name == fileTemplate && object.userData.color_value < maxValue * params.min_scale_factor / 100 ) {
			  object.visible = false;
			}
			if (object.name == fileTemplate && object.userData.color_value > maxValue * params.min_scale_factor / 100 && params.visible) {
			  object.visible = true;
			  voxels_n = voxels_n + 1;
			  // TODO fix this opacity max and min range!!!
			  //object.material.opacity = opacity_weight(object.userData.color_value, maxValue, minValue * params.min_scale_factor / 100, params.A);
			}
		  }
		});
		console.log(voxels_n, " voxels visible");
		requestAnimationFrame(checkFPS);
	  } else {
		console.log("Target FPS achieved. Exiting loop.");
		continueLoop = false; // Stop the outer loop
	  }
	}

	// Start the inner loop
	requestAnimationFrame(checkFPS);
  }

  // Start the outer loop
  performFPSCheck();
}
});
