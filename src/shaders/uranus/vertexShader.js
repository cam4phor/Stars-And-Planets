const vertexShader = `
	varying vec2 vertexUV;
	varying vec3 vertexNormal;

	void main() {
		vertexUV = uv;
		vertexNormal = normalize(normalMatrix * normal);

		vec4 modelPosition = modelMatrix * vec4(position, 1.0);
		vec4 viewPosition = viewMatrix * modelPosition;
		vec4 projectedPosition = projectionMatrix * viewPosition;

		gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
	}
`


export default vertexShader