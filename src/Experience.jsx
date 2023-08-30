// CSS
import "./styles.css";
// Camera controller
import { OrbitControls } from "@react-three/drei";
// Hooks
import { useRef } from "react";

const Experience = () => {
    const boxRef = useRef();
    console.log(boxRef.current);
    
    return (
        <>
            <OrbitControls makeDefault />
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={2} />
            <mesh ref={boxRef}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="purple" />
            </mesh>
        </>
    );
}

export default Experience;