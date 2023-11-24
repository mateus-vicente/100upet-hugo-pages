const EffectShader = {

    uniforms: {

        'sceneDiffuse': { value: null },
        'tDiffuse': { value: null },
    },

    vertexShader: /* glsl */ `
		varying vec2 vUv;
		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,

    fragmentShader: /* glsl */ `
		uniform highp sampler2D sceneDiffuse;
    uniform highp sampler2D tDiffuse;
        varying vec2 vUv;
		void main() {
            vec4 diffuse = texture2D(tDiffuse, vUv);
            float density = clamp(diffuse.r, 0.0, 1.0);
            vec3 col = vec3(0.0);
             /* density = density * density;
            if (density < 0.25) {
                col = mix(vec3(0.0, 0.0, 0.0), vec3(0.0, 0.0, 1.0), density * 4.0);
            } else if (density < 0.5) {
                col = mix(vec3(0.0, 0.0, 1.0), vec3(0.0, 1.0, 0.0), (density - 0.25) * 4.0);
            } else if (density < 0.75) {
                col = mix(vec3(0.0, 1.0, 0.0), vec3(1.0, 1.0, 0.0), (density - 0.5) * 4.0);
            } else {
                col = mix(vec3(1.0, 1.0, 0.0), vec3(1.0, 0.0, 0.0), (density - 0.75) * 4.0);
            }*/

            // Apply magma colormap
            // Starts at black, ends at white
            // Black -> Blue -> Green -> Yellow -> Red -> Magenta -> White
            // 0/7 -> 1/7 -> 2/7 -> 3/7 -> 4/7 -> 5/7 -> 6/7 -> 7/7
            density = density * density;
            // 0/7 -> 1/7
            if (density < 1.0/7.0) {
                col = mix(vec3(0.0, 0.0, 0.0), vec3(0.0, 0.0, 1.0), density * 7.0);
            }
            // 1/7 -> 2/7
            else if (density < 2.0/7.0) {
                col = mix(vec3(0.0, 0.0, 1.0), vec3(0.0, 1.0, 1.0), (density - 1.0/7.0) * 7.0);
            }
            // 2/7 -> 3/7
            else if (density < 3.0/7.0) {
                col = mix(vec3(0.0, 1.0, 1.0), vec3(0.0, 1.0, 0.0), (density - 2.0/7.0) * 7.0);
            }
            // 3/7 -> 4/7
            else if (density < 4.0/7.0) {
                col = mix(vec3(0.0, 1.0, 0.0), vec3(1.0, 1.0, 0.0), (density - 3.0/7.0) * 7.0);
            }
            // 4/7 -> 5/7
            else if (density < 5.0/7.0) {
                col = mix(vec3(1.0, 1.0, 0.0), vec3(1.0, 0.0, 0.0), (density - 4.0/7.0) * 7.0);
            }
            // 5/7 -> 6/7
            else if (density < 6.0/7.0) {
                col = mix(vec3(1.0, 0.0, 0.0), vec3(1.0, 0.0, 1.0), (density - 5.0/7.0) * 7.0);
            }
            // 6/7 -> 7/7
            else {
                col = mix(vec3(1.0, 0.0, 1.0), vec3(1.0, 1.0, 1.0), (density - 6.0/7.0) * 7.0);
            }

          


               
            gl_FragColor = vec4(col, 1.0);
		}`

};

//export { EffectShader };
