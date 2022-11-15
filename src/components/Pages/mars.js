import { useFrame } from "@react-three/fiber"
import image from '../../assets/textures/2k_mars.jpg'
import vertexShader from '../../shaders/mars/vertexShader'
import fragmentShader from '../../shaders/mars/fragmentShader'
import atmosphereFragmentShader from '../../shaders/mars/atmosphereFragmentShader'
import atmosphereVertexShader from '../../shaders/mars/atmosphereVertexShader'
import * as THREE from 'three'
import React, {useMemo, Fragment, useRef} from 'react'

const Mars = () => {
	const marsRef = useRef(null)
	useFrame(() => {
		if(marsRef.current){
			marsRef.current.rotation.y += 0.0003;
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
						ref={marsRef}>
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

export default Mars