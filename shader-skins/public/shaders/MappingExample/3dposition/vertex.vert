#include <skinning_pars_vertex>

varying vec2 vUv;
varying vec3 vPosition;

void main() {
    #include <skinbase_vertex>
    #include <begin_vertex>
    #include <skinning_vertex>

    vUv = uv;
    vPosition = transformed;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
}
