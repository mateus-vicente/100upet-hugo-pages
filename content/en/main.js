import * as THREE from 'https://unpkg.com/three@0.155.0/build/three.module.js';
import { OrbitControls } from 'https://unpkg.com/three@0.155.0/examples/jsm/controls/OrbitControls.js';
import { GUI } from "https://unpkg.com/dat.gui@0.7.7/build/dat.gui.module.js";
import { Stats } from "./stats.js";
document.addEventListener('DOMContentLoaded', function () {
async function main() {
    // Setup basic renderer, controls, and profiler
    const clientWidth = window.innerWidth;
    const clientHeight = window.innerHeight;
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(clientWidth, clientHeight);
    //document.body.appendChild(renderer.domElement);
	document.getElementById('scene-container').appendChild(renderer.domElement);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.VSMShadowMap;

    const stats = new Stats();
    stats.showPanel(0);
    document.body.appendChild(stats.dom);
    // Setup scene
    scene.background = new THREE.Color(0, 0, 0); //environment;

    const dm3_path = "mouseplaque_40noise_flip_382x290x290_110um.3dm";
    // const dm3_path = "Mouse_802x208x380_90um.3dm";
    const dm3 = await (await fetch(dm3_path)).text();
    const X = 289;
    const Y = 290;
    const Z = 382;
    const MAX = Math.max(X, Y, Z);
    const aspect = clientWidth / clientHeight;
    const camera =
        new THREE.OrthographicCamera(-aspect * MAX / 2,
            aspect * MAX / 2,
            1 * MAX / 2, -1 * MAX / 2,
            0.1,
            MAX * 4
        );
    camera.position.x = MAX;
    //camera.position.y = MAX;
    //camera.position.z = MAX;

    const controls = new OrbitControls(camera, renderer.domElement);
	controls.enableZoom = false;
    controls.target.set(0, 0, 0);

    let buf = new Uint8Array(dm3.split("	").map(x => +x));
    if (buf.length != X * Y * Z) {
        if (buf.length > X * Y * Z) {
            buf = buf.slice(0, X * Y * Z);
        } else {
            let newBuf = new Uint8Array(X * Y * Z);
            newBuf.set(buf);
            buf = newBuf;
        }
    }
    let positions = [];
    let colors = [];
    let sizes = [];
    let boxes = [];
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

        if (std > 5 && count > 1) {
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
            if (density > 0) {
                let amount = density;
                let centerVec = new THREE.Vector3();
                let size = Math.max(box.max.x - box.min.x, box.max.y - box.min.y, box.max.z - box.min.z);
                sizes.push(
                    size
                )
                box.getCenter(centerVec);
                // Jitter the point
                //centerVec.x += 0.5 * (Math.random() - 0.5);
                //centerVec.y += 0.5 * (Math.random() - 0.5);
                //centerVec.z += 0.5 * (Math.random() - 0.5);

                positions.push(
                    centerVec.x - X / 2, centerVec.y - Y / 2, centerVec.z - Z / 2
                );
                colors.push(amount / 255, amount / 255, amount / 255);

            }
        }
    }
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
            // uScale: { value: innerHeight / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2))) }
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
        
            gl_PointSize = round( 1.0 * size * uScale / (perspective ? -mvPosition.z : 1.0));
        
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
    const points = new THREE.Points(geometry, material);
    scene.add(points);

    function animate() {
        if (camera.isPerspectiveCamera) {
            points.material.uniforms.perspective.value = true;
            points.material.uniforms.uScale.value = innerHeight / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)));
        } else {
            points.material.uniforms.uScale.value = (innerHeight / Math.abs(camera.top - camera.bottom)) * camera.zoom;
        }
        renderer.render(scene, camera);
        controls.update();
        stats.update();
        requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
}
main();
});
