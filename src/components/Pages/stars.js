import React, { useMemo } from "react"
import * as THREE from 'three'

const Stars = ({count=1000}) => {

	const pointsPos = useMemo(() => {
		const arr = []
		for (let i = 0; i<=count; i++){
			const x = (Math.random() - 0.5) * 2000
			const y = (Math.random() - 0.5) * 2000
			const z = -Math.random() * 1000
			arr.push(x, y, z)
		}
		return new THREE.Float32BufferAttribute(arr, 3);
	}, [count])

	return (
		<points>
			<bufferGeometry>
				<bufferAttribute attach="attributes-position" count={pointsPos.array.length / 3} array={pointsPos.array} itemSize={3} />
			</bufferGeometry>
			<pointsMaterial color={"0xffffff"}></pointsMaterial>
		</points>
	)
	
}

export default Stars