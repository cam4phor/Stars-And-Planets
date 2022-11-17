import { useFrame } from "@react-three/fiber"
import image from '../../assets/textures/2k_neptune.jpg'
import vertexShader from '../../shaders/neptune/vertexShader'
import fragmentShader from '../../shaders/neptune/fragmentShader'
import atmosphereFragmentShader from '../../shaders/neptune/atmosphereFragmentShader'
import atmosphereVertexShader from '../../shaders/neptune/atmosphereVertexShader'
import * as THREE from 'three'
import React, {useMemo, Fragment, useRef} from 'react'

const Neptune = () => {
	const neptuneRef = useRef(null)
	useFrame(() => {
		if(neptuneRef.current){
			neptuneRef.current.rotation.y += 0.0003;
		}
	})

	const uniforms = useMemo(() => {
		return {
			u_globeTexture: {
				value: new THREE.TextureLoader().load(image)
			}
		}
	}, [])
	return (
		<Fragment>
			<group
				rotation={[0, 0, 0]}
				>
				{
					<mesh 
						rotation={[0, 0, 0]}
						ref={neptuneRef}>
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

export default Neptune