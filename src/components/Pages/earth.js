import { useFrame } from "@react-three/fiber"
import { Fragment, useMemo, useRef } from "react"
import image from '../../assets/textures/earth_color_10K.png'
import vertexShader from "../../shaders/earth/vertexShader"
import fragmentShader from "../../shaders/earth/fragmentShader"
import * as THREE from 'three'
import atmosphereVertexShader from "../../shaders/earth/atmosphereVertexShader"
import atmosphereFragmentShader from "../../shaders/earth/atmosphereFragmentShader"
import mousePos from "../globalVariables/mousePos"

const Earth = () => {
	const ref = useRef(null)
	const earthRef = useRef(null)

	useFrame(() => {
		if(earthRef.current){
			earthRef.current.rotation.y += 0.0003;
		}

		if(ref.current && mousePos.clicked){
			ref.current.rotation.y = THREE.MathUtils.damp(ref.current.rotation.y, ref.current.rotation.y + mousePos.x, 0.007, 2);
			ref.current.rotation.x = THREE.MathUtils.damp(ref.current.rotation.x, ref.current.rotation.x + mousePos.y, 0.007, 2);
		}
	})

	const uniforms = useMemo(() => {
		return {
			u_test: {
				value: 1.0
			},
			u_globeTexture: {
				value: new THREE.TextureLoader().load(image)
			}
		}
	}, [])
	return (
		<Fragment>
			<group
				ref={ref} 
				rotation={[0, 0, 0]}
				>
				{
					<mesh 
						rotation={[0, 0, 0]} ref={earthRef}>
						<sphereGeometry args={[3, 50, 50]}/>
						<shaderMaterial 
							attach="material" 
							vertexShader={vertexShader} 
							fragmentShader={fragmentShader} 
							uniforms={uniforms}
							/>
					</mesh>	
				}
				{
					<mesh scale={1.5}>
						<sphereGeometry args={[3, 50, 50]}/>
						<shaderMaterial 
							attach="material" 
							vertexShader={atmosphereVertexShader} 
							fragmentShader={atmosphereFragmentShader} 
							blending={THREE.AdditiveBlending}
							side={THREE.BackSide}
							/>
					</mesh>	
				}	
			</group>
		</Fragment>
		
	)
}
export default Earth