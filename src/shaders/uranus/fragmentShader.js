const fragmentShader = `
	varying vec2 vertexUV;
	varying vec3 vertexNormal;
	
	uniform sampler2D u_globeTexture;

	void main() {
		float intensity = 1.05 - dot(vertexNormal, vec3(0.0, 0.0, 1.0));
		vec3 atmosphere = vec3(0.3,0.7,0.9) * pow(intensity, 1.1);
		gl_FragColor = vec4(atmosphere+ texture2D(u_globeTexture, vertexUV).xyz, 1.0);
	}
`

export default fragmentShader


