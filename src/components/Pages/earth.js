import { useTexture } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import image from '../../assets/textures/earth_color_10K.png'

const Earth = () => {
	const ref = useRef(null)
	useFrame(() => {
		if(ref.current){
			ref.current.rotation.y += 0.0003;
		}
	})
	return (
		<mesh ref={ref} rotation={[0, 0, 0]}>
			<sphereGeometry args={[3, 50, 50]}/>
			<meshStandardMaterial map={useTexture(image)} />
		</mesh>
	)
}
export default Earth