import React from "react";
import { Canvas, useFrame } from "react-three-fiber";

import { useEffect, useRef } from "react";

const Box = () => {
    const boxRef: any = useRef();

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
            <boxBufferGeometry args={[3.1, 3.1, 3.1]} />
            <meshStandardMaterial
                attach="material"
                color="red"
                transparent
                roughness={0.8}
                metalness={0.2}
                // emissive={"Red"}
                // emissiveIntensity={0.5}
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
    );
};

export default FreeBox;
