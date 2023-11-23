//import * as THREE from 'three';
//import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
//import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
//import { FontLoader } from 'three/addons/loaders/FontLoader.js';

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
		scaner_transparency: 0.01,
		 side: sideOptions['DoubleSide'],
		 wire_frame: true,
		 depth_write: false,
	};

	// Initialize Three.js
	function init() {
		// Create a scene
		scene = new THREE.Scene();

		camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight,	10,1000);
		//camera = new THREE.OrthographicCamera(window.innerWidth, window.innerWidth window.innerHeight, window.innerHeight, 100, 100000);
		camera.position.set(0, 0, 130);
		//camera.lookAt(new THREE.Vector3(0, -100, 0));
		//camera.zoom = 0.5;

		// Create a renderer
		renderer = new THREE.WebGLRenderer({ powerPreference: "high-performance",  antialias: true });
		renderer.setSize(window.innerWidth, window.innerHeight);
		document.getElementById('scene-container').appendChild(renderer.domElement);

		//const controls = new THREE.OrbitControls(camera, renderer.domElement);
		//controls.enableZoom = false;

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
			gltf.scene.rotation.set(0,Math.PI,0);
			//gltf.scene.translateX(16.2);
			//gltf.scene.translateY(18.15);


			scannerobj = gltf.scene;
			scannerobj1 = gltf.scene.clone();
			scannerobj2 = gltf.scene.clone();
			scannerobj3 = gltf.scene.clone();

			scannerobj.translateX(19);
			scannerobj.translateY(200);

			scannerobj1.translateY(-300);
			scannerobj1.translateX(100);
			scannerobj1.rotation.set(Math.PI,0,0);

			scannerobj2.translateX(-300);
			scannerobj2.translateY(0);
			scannerobj2.rotation.set(Math.PI,0,-0.5*Math.PI);

			scannerobj3.translateX(300);
			scannerobj3.translateY(0);
			scannerobj3.rotation.set(Math.PI,0,0.5*Math.PI);

			scene.add(scannerobj);
			scene.add(scannerobj1);
			scene.add(scannerobj2);
			scene.add(scannerobj3);
			//*/

			scene.add( gltf.scene );

			scanner_anim_tl
				.to(".square", { y: -370}, "test")
				.to(camera.position, { z: 100}, "test")
				.to(scannerobj.position,  {  z: 0, y: 19, x: -19 }, "test") 
				.to(scannerobj1.position, {  z: 0, y: -19, x: 19 }, "test") 
				.to(scannerobj2.position, {  z: 0, y: 19, x: 19 }, "test") 
				.to(scannerobj3.position, {  z: 0, y: -19, x: -19 }, "test") 
				.to(camera.position, { x: 50, z: 100 }, "test2") 
				.to(".square", { left: "50%", y: -370}, "test2")
				.to(scene.rotation, { y: Math.PI/4 }, "test2")
				; 


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
			start: "15% 100%", 
			end: "95% 100%", 
			markers: false,
			scrub: 1, 
		}
	});

});
