// will fix the fact that this is a .jsx when I port the site to next.js from create-react-app
import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";

import { useRef } from "react";

const Box = () => {
    const boxRef = useRef(null);

    useFrame(() => {
        boxRef.current.rotation.z += 0.002;
    });

    return (
        <mesh
            ref={boxRef}
            rotation-x={Math.PI * 0.25}
            rotation-y={Math.PI * -0.25}
            rotation-z={Math.PI * 0.25}
        >
            <boxGeometry args={[3.1, 3.1, 3.1]} />
            <meshStandardMaterial
                attach="material"
                color="White"
                transparent
                roughness={0.8}
                metalness={0.2}
                emissive={"White"}
            />
        </mesh>
    );
};

const FreeBox = () => {
    return (
        <div className="freebox">
            <Canvas>
                <pointLight position={[7, 8, 7]} />

                <Box />
            </Canvas>
        </div>
    );
};

export default FreeBox;
