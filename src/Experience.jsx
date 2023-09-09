// CSS
import "./styles.css";
// Hooks
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
// Camera controller
import { OrbitControls } from "@react-three/drei";
// Components
import Cat from "./World/Cat";

const Experience = () => {
    const boxRef = useRef();
    // console.log(boxRef.current.rotation.x);
    useFrame((state, delta) => {
        boxRef.current.rotation.x += 1 * delta;
        boxRef.current.rotation.y += 1 * delta;
        boxRef.current.rotation.z += 1 * delta;
    });
    
    return (
        <>
            <OrbitControls makeDefault />
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={2} />
            <mesh ref={boxRef}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="aqua" />
                {/* Sphere <sphereGeometry args={[1, 32, 10]} />
                <meshStandardMaterial color="aqua" /> */}
                {/* Torus <torusGeometry args={[1, 1, 10, 50]} />
                <meshStandardMaterial color="aqua" /> */}
                {/* <cylinderGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="aqua" /> */}
            </mesh>
            <Cat />
        </>
    );
}

export default Experience;
