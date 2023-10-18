import Van from "./Models/Van";
import { Physics } from "@react-three/rapier";

const AboutMe = () => {

    return (
        <>
        <Van 
            position-x={3.5}
            position-y={0.5}
            position-z={-5}
            rotation-y={-Math.PI * 0.6} 
            scale={2.5} 
        />
        </>
    )
}

export default AboutMe;