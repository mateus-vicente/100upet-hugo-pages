import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

document.addEventListener('DOMContentLoaded', function () {
	    // Set up the scene
        const scene = new THREE.Scene();

        // Create a camera
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;

        // Create a renderer
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
		document.getElementById('scene-container').appendChild(renderer.domElement);

        // Create a green material
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

        // Create a cube geometry
        const geometry = new THREE.BoxGeometry();

        // Create a cube mesh with the material
        const cube = new THREE.Mesh(geometry, material);

        // Add the cube to the scene
        scene.add(cube);

		const controls = new OrbitControls(camera, renderer.domElement);

        // Create an animation function to rotate the cube
        const animate = () => {
            requestAnimationFrame(animate);

            // Rotate the cube
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            renderer.render(scene, camera);
        };

        // Start the animation
        animate();

        // Handle window resize
        window.addEventListener('resize', () => {
            const newWidth = window.innerWidth;
            const newHeight = window.innerHeight;

            camera.aspect = newWidth / newHeight;
            camera.updateProjectionMatrix();

            renderer.setSize(newWidth, newHeight);
        });
});
