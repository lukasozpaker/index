import React from 'react';
import { Canvas, useFrame } from 'react-three-fiber';

import { useEffect, useRef } from "react";



// // Lights
// function KeyLight({ brightness, color }) {
//     return (
//       <rectAreaLight
//         width={3}
//         height={3}
//         color={color}
//         intensity={brightness}
//         position={[-2, 0, 5]}
//         lookAt={[0, 0, 0]}
//         penumbra={1}
//         castShadow
//       />
//     );
// }

// function FillLight({ brightness, color }) {
//     return (
//       <rectAreaLight
//         width={3}
//         height={3}
//         intensity={brightness}
//         color={color}
//         position={[2, 1, 4]}
//         lookAt={[0, 0, 0]}
//         penumbra={2}
//         castShadow
//       />
//     );
// }
  
// function RimLight({ brightness, color }) {
//     return (
//       <rectAreaLight
//         width={2}
//         height={2}
//         intensity={brightness}
//         color={color}
//         position={[1, 4, -2]}
//         rotation={[0, 180, 0]}
//         castShadow
//       />
//     );
// }




const Box = () => {
    const boxRef:any = useRef();
  
    useFrame(() => {
      boxRef.current.rotation.z += 0.001;
    });
  
    return (
      <mesh ref={boxRef} rotation-x={Math.PI * 0.25} rotation-y={Math.PI * -0.25} rotation-z={Math.PI * 0.25}>
        <boxBufferGeometry args={[3.1, 3.1, 3.1]} />
        <meshStandardMaterial
          attach="material"
          color="red"
          transparent
          roughness={0.8}
          metalness={0.2}
        />
      </mesh>
    );
};



const FreeBox = () => {
  
  return (
    <div className="freebox">
      <Canvas>
            
        <pointLight position={[7, 8, 7]} /> 
        {/* <KeyLight brightness={6} color={"#ffffff"} /> */}

        <Box />

      </Canvas>
    </div>
  )
}
 
export default FreeBox;