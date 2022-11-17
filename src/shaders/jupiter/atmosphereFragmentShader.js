const atmosphereFragmentShader = `
	varying vec3 vertexNormal;
	void main() {
		float intensity = pow(0.44 - dot(vertexNormal, vec3(0, 0, 1.0)), 1.81);
		gl_FragColor = vec4(0.8, 0.6, 0.3, 0.7) * intensity;
	}
`

export default atmosphereFragmentShader


