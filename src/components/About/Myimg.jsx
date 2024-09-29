import React from 'react';
import { Canvas } from '@react-three/fiber';
import { MeshDistortMaterial, OrbitControls,Sphere } from "@react-three/drei";

function Myimg() {
  return (
    <Canvas>
      <OrbitControls enableZoom={false} autoRotate={true} />
      <ambientLight intensity={8}/>
       <directionalLight position={[1,5,7]} />
      <mesh>
        <Sphere args={[1, 200, 300]} scale={2.3} >
          <MeshDistortMaterial
          attach="material"
          color="#7D3C98"
          distort={0.45}
          speed={2}
           />
            </Sphere>
      </mesh>
      <ambientLight/>
    </Canvas>
  )
}

export default Myimg
