// 1
import { useGLTF } from '@react-three/drei'
import React from 'react'

interface ModelProps {
	position?: [number, number, number]
	scale?: number
}

const Model: React.FC<ModelProps> = ({ position = [0, 0, 0], scale = 1 }) => {
	const { scene } = useGLTF('/models/scene.glft')

	return <primitive object={scene} position={position} scale={scale} />
}

export default Model

// 2
// import { useGLTF } from '@react-three/drei'
// import React from 'react'

// const Model: React.FC = () => {
// 	const { scene } = useGLTF('/models/scene.gltf')
// 	return <primitive object={scene} scale={[3, 3, 3]} position={[0, -0.3, 0]} />
// }

// export default Model

// 3
// import { useLoader } from '@react-three/fiber'
// import { GLTFLoader } from 'three/examples/jsm/Addons.js'

// const Model = () => {
// 	const gltf = useLoader(GLTFLoader, '/models/scene.gltf')
// 	return (
// 		<>
// 			<primitive object={gltf.scene} scale={0.4} />
// 		</>
// 	)
// }

// export default Model
