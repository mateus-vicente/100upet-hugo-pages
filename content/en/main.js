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
		 wire_frame: false,
		 depth_write: true,
	};

	// Initialize Three.js
	function init() {
		// Create a scene
		scene = new THREE.Scene();

		camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight,	10,1000);
		//camera = new THREE.OrthographicCamera(window.innerWidth, window.innerWidth window.innerHeight, window.innerHeight, 100, 100000);
		camera.position.set(-120, 0, 0);
		//camera.lookAt(new THREE.Vector3(0, -100, 0));
		//camera.zoom = 0.5;

		// Create a renderer
		renderer = new THREE.WebGLRenderer({ powerPreference: "high-performance",  antialias: true });
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

			scannerobj.translateZ(100);
			scannerobj.translateY(100);

			scannerobj1.translateY(-300);
			scannerobj1.translateX(-32.4);
			scannerobj1.rotation.set(Math.PI,0.5*Math.PI,0);

			scannerobj2.translateX(-300);
			scannerobj2.translateY(-21);
			scannerobj2.rotation.set(Math.PI,0.5*Math.PI,-0.5*Math.PI);

			scannerobj3.translateX(300);
			scannerobj3.translateY(0);
			scannerobj3.rotation.set(Math.PI,0.5*Math.PI,0.5*Math.PI);

			scene.add(scannerobj);
			scene.add(scannerobj1);
			scene.add(scannerobj2);
			scene.add(scannerobj3);
			//*/

			scene.add( gltf.scene );

			scanner_anim_tl
				.to(camera.position, { x: -100}, "test")
				.to(scannerobj.position,  {  x: 0, y: 19, z: -19 }, "test") 
				.to(scannerobj1.position, {  x: 0, y: -19, z: 19 }, "test") 
				.to(scannerobj2.position, {  x: 0, y: 19, z: 19 }, "test") 
				.to(scannerobj3.position, {  x: 0, y: -19, z: -19 }, "test")//; 
				.to(camera.position, { z: 50 }, "test2") 
				.to(scene.rotation, { y: Math.PI/4 }, "test2"); 

		});
		/*
						const loader_txt = new FontLoader();
				loader_txt.load( 'fonts/helvetiker_regular.typeface.json', function ( font ) {

					const color = 0x006699;

					const matDark = new THREE.LineBasicMaterial( {
						color: color,
						side: THREE.DoubleSide
					} );

					const matLite = new THREE.MeshBasicMaterial( {
						color: color,
						transparent: true,
						opacity: 0.4,
						side: THREE.DoubleSide
					} );

					const message = '   Three.js\nSimple text.';

					const shapes = font.generateShapes( message, 100 );

					const geometry = new THREE.ShapeGeometry( shapes );

					geometry.computeBoundingBox();

					const xMid = - 0.5 * ( geometry.boundingBox.max.x - geometry.boundingBox.min.x );

					geometry.translate( xMid, 0, 0 );

					// make shape ( N.B. edge view not visible )

					const text = new THREE.Mesh( geometry, matLite );
					text.position.z = - 150;
					scene.add( text );

					// make line shape ( N.B. edge view remains visible )

					const holeShapes = [];

					for ( let i = 0; i < shapes.length; i ++ ) {

						const shape = shapes[ i ];

						if ( shape.holes && shape.holes.length > 0 ) {

							for ( let j = 0; j < shape.holes.length; j ++ ) {

								const hole = shape.holes[ j ];
								holeShapes.push( hole );

							}

						}

					}

					shapes.push.apply( shapes, holeShapes );

					const lineText = new THREE.Object3D();

					for ( let i = 0; i < shapes.length; i ++ ) {

						const shape = shapes[ i ];

						const points = shape.getPoints();
						const geometry = new THREE.BufferGeometry().setFromPoints( points );

						geometry.translate( xMid, 0, 0 );

						const lineMesh = new THREE.Line( geometry, matDark );
						lineText.add( lineMesh );

					}

					scene.add( lineText );

					//render();

				} ); //end load function
	*/

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
			start: "50% 100%", 
			end: "bottom bottom", 
			markers: true,
			scrub: 1, 
		}
	});

});
