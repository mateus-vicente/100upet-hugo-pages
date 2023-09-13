document.addEventListener('DOMContentLoaded', function () {
	var sideOptions = {
		'BackSide': THREE.BackSide,
		'FrontSide': THREE.FrontSide,
		'DoubleSide': THREE.DoubleSide
	};
	
	var config_scanner_vis = {
		scaner_transparency: 0.5,
		side: sideOptions['DoubleSide'],
		wire_frame: false,
		depth_write: true,
	};

	const scene = new THREE.Scene();

	var camera = new THREE.OrthographicCamera(window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2, 100, 100000);
	//var camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 0.1, 1000000 );
	camera.position.set(-900, 300, 300);
	camera.zoom = 0.5;
	camera.updateProjectionMatrix();
	
	
	const renderer = new THREE.WebGLRenderer({ powerPreference: "high-performance" });
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.render(scene, camera);
	
	const container = document.getElementById('scene-container');
	const containerWidth = container.clientWidth;
	const containerHeight = container.clientHeight;
	// Specify the desired height (in viewport height units)
	const desiredHeight = container.clientHeight; // 80vh in this example
	// Calculate the aspect ratio of your scene (width / height)
	const aspectRatio = window.innerWidth / window.innerHeight;
	// Calculate the new width based on the desired height and aspect ratio
	const newWidth = desiredHeight * aspectRatio;
	
	renderer.setSize(newWidth, containerHeight);
	renderer.setPixelRatio( window.devicePixelRatio );
	
	document.getElementById('scene-container').appendChild(renderer.domElement);
	window.addEventListener('resize', function () {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize(window.innerWidth, window.innerHeight);
	});

	const light1 = new THREE.AmbientLight(0xffffff, 1); // soft white light
	const light2 = new THREE.AmbientLight(0xFFFFC1, 1); // soft white light
	scene.add(light1);
	scene.add(light2);

	var scannerobj = new THREE.Object3D();
	var scannerobj1= new THREE.Object3D();
	var scannerobj2= new THREE.Object3D();
	var scannerobj3= new THREE.Object3D();
	const loader = new THREE.GLTFLoader().setPath( 'models_and_data/' );
	loader.load( 'tower_w_2blocks.glb', function ( gltf ) {
		gltf.scene.traverse(child => {
			if (child.isMesh) {
				child.name = "Scanner";
				child.material.wireframe = config_scanner_vis.wire_frame;
				child.material.depthWrite = config_scanner_vis.depth_write;
				child.material.transparent = true;
				child.material.opacity = config_scanner_vis.scaner_transparency;
				//child.material.format = THREE.RGBAFormat;
				child.material.side = config_scanner_vis.side;
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


});
