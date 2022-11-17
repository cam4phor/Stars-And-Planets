const atmosphereFragmentShader = `
	varying vec3 vertexNormal;
	void main() {
		float intensity = pow(0.4 - dot(vertexNormal, vec3(0, 0, 1.0)), 1.8);
		gl_FragColor = vec4(0.3,0.7,0.9,1.0) * intensity;
	}
`

export default atmosphereFragmentShader


