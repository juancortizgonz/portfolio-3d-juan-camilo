import { useGLTF, useAnimations, useTexture } from "@react-three/drei";
import { useEffect, useRef } from "react";

const Cat = () => {
    const catRef = useRef();
    const catModel = useGLTF("/assets/models/cat/scene.gltf");
    const { animations } = catModel;
    const { actions } = useAnimations(animations, catRef);

    const PATH = "/assets/textures/";

    const propsTexture = useTexture({
        map: PATH + "materialRoughAO.png",
        normalMap: PATH + "materialNormal.png",
        roughnessMap: PATH + "materialRoughMetal.png",
        aoMap: PATH + "materialColor.png",
    });

    // console.log(catModel);

    useEffect(() => {
        const action = actions["Scene"];
        action.play();
    }, []);

    return (
        <>
        <mesh ref={catRef}>
            <primitive position-x={2.5} position-z={-2} rotation-y={-Math.PI * 0.3} scale={0.004} object={catModel.scene} />
            <meshStandardMaterial {...propsTexture} />
        </mesh>
        </>
    );
}

export default Cat;
useGLTF.preload("/assets/models/cat/scene.gltf");