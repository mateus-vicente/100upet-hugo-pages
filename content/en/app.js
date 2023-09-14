document.addEventListener('DOMContentLoaded', function () {

	// Define variables
	let scene, camera, renderer, cube;
	var sideOptions = {
	'BackSide': THREE.BackSide,
	'FrontSide': THREE.FrontSide,
	'DoubleSide': THREE.DoubleSide
	};
	let scannerobj  = new THREE.Object3D();
	let scannerobj1 = new THREE.Object3D();
	let scannerobj2 = new THREE.Object3D();
	let scannerobj3 = new THREE.Object3D();

	var config_scanner_vis = {
		scaner_transparency: 0.5,
		 side: sideOptions['DoubleSide'],
		 wire_frame: true,
		 depth_write: true,
	};

	// Initialize Three.js
	function init() {
		// Create a scene
		scene = new THREE.Scene();

		camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight,	0.1,1000);
		//camera = new THREE.OrthographicCamera(window.innerWidth, window.innerWidth window.innerHeight, window.innerHeight, 100, 100000);
		camera.position.set(-50, 0, 0);
		camera.lookAt(new THREE.Vector3(0, 0, 0));
		//camera.zoom = 0.5;

		// Create a renderer
		renderer = new THREE.WebGLRenderer();
		renderer.setSize(window.innerWidth, window.innerHeight);
		document.getElementById('scene-container').appendChild(renderer.domElement);

		const controls = new THREE.OrbitControls(camera, renderer.domElement);
		controls.enableZoom = false;

		const light1 = new THREE.AmbientLight(0xffffff, 1); // soft white light
		const light2 = new THREE.AmbientLight(0xFFFFC1, 1); // soft white light
		scene.add(light1);
		scene.add(light2);

		const loader = new THREE.GLTFLoader();
		loader.load( 'tower_w_2blocks.gltf', function ( gltf ) {
			gltf.scene.traverse(child => {
							if (child.isMesh) {
							//console.log(child.name);
							child.name = "Scanner";
							child.material.wireframe = config_scanner_vis.wire_frame;
							child.material.depthWrite = config_scanner_vis.depth_write;
							child.material.transparent = true;
							child.material.opacity = config_scanner_vis.scaner_transparency;
							//child.material.format = THREE.RGBAFormat;
							child.material.side = config_scanner_vis.side;
							}
			});
			///*
			gltf.scene.scale.setScalar(1); // Scaling is set to 1000 to go from mm to 100 µm
			gltf.scene.rotation.set(0,0.5*Math.PI,0);
			gltf.scene.translateX(16.2);
			gltf.scene.translateY(18.15);


			scannerobj = gltf.scene;
			scannerobj1 = gltf.scene.clone();
			scannerobj2 = gltf.scene.clone();
			scannerobj3 = gltf.scene.clone();

			scannerobj.translateY(100);

			scannerobj1.translateY(-100);
			scannerobj1.translateX(-32.4);
			scannerobj1.rotation.set(Math.PI,0.5*Math.PI,0);

			scannerobj2.translateX(-100);
			scannerobj2.translateY(-21);
			scannerobj2.rotation.set(Math.PI,0.5*Math.PI,-0.5*Math.PI);

			scannerobj3.translateX(100);
			scannerobj3.translateY(0);
			scannerobj3.rotation.set(Math.PI,0.5*Math.PI,0.5*Math.PI);

			scene.add(scannerobj);
			scene.add(scannerobj1);
			scene.add(scannerobj2);
			scene.add(scannerobj3);
			//*/

			scene.add( gltf.scene );

			scanner_anim_tl
				.to(camera.position, { x: -100 }, "test")
				.to(scannerobj.position,  {  x: 0, y: 19, z: -19 }, "test") 
				.to(scannerobj1.position, {  x: 0, y: -19, z: 19 }, "test") 
				.to(scannerobj2.position, {  x: 0, y: 19, z: 19 }, "test") 
				.to(scannerobj3.position, {  x: 0, y: -19, z: -19 }, "test"); 

		});

		animate();
	}

	function animate() {
		requestAnimationFrame(animate);
		renderer.render(scene, camera);
	}
	
	function onWindowResize() {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize(window.innerWidth, window.innerHeight);
	}
	
	window.addEventListener('resize', onWindowResize);
	
	init();
	
	gsap.registerPlugin(ScrollTrigger);
	ScrollTrigger.defaults({
		immediateRender: false,
		ease: "power1.inOut",
	});

	let scanner_anim_tl = gsap.timeline({
		scrollTrigger: {
			trigger: ".container",
			start: "top bottom", 
			end: "bottom bottom", 
			//markers: true,
			scrub: 1, 
		}
	});

});
