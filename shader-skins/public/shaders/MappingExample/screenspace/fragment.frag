uniform float uTime;
uniform vec3 uResolution;
uniform sampler2D uChannel0;

varying vec2 vUv; 

void main() {
    vec2 uv = (gl_FragCoord.xy / uResolution.y) * 3.0;

    uv.x += uTime * 0.1;

    vec3 col = 0.5 + 0.5 * cos(uv.x * 6.2831 + vec3(0.0, 2.09, 4.19));

    gl_FragColor = vec4(col, 1.0);
}
