import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const Van = (props) => {
    const { nodes, materials } = useGLTF("/assets/models/van/van.glb");
  return (
    <group {...props} dispose={null}>
      <group>
        <group
          position={[0.003, -0.003, -0.002]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <group>
            <group scale={0.925}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane018_0.geometry}
                material={materials.material}
              />
            </group>
            <group
              position={[-0.383, -0.808, 0.507]}
              rotation={[1.031, -0.459, -0.928]}
              scale={0.291}
            >
              <group />
            </group>
            <group scale={0.925}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane003_0.geometry}
                material={materials.material}
              />
            </group>
            <group
              position={[-0.383, -0.808, 0.507]}
              rotation={[-1.06, 0.825, -0.557]}
              scale={0.291}
            >
              <group />
            </group>
            <group
              position={[-0.799, 0.448, 0.425]}
              rotation={[-1.939, -0.243, 2.361]}
              scale={0.291}
            >
              <group />
            </group>
            <group
              position={[-0.383, -0.808, 0.507]}
              rotation={[-2.511, -0.092, 0.562]}
              scale={0.291}
            >
              <group />
            </group>
            <group
              position={[-0.383, -0.808, 0.507]}
              rotation={[-1.118, -0.724, -1.276]}
              scale={0.291}
            >
              <group />
            </group>
            <group
              position={[-0.328, 1.208, 0.568]}
              rotation={[-1.939, -0.243, 2.361]}
              scale={0.291}
            >
              <group />
            </group>
            <group
              position={[1.302, -0.235, 0.625]}
              rotation={[-1.939, -0.243, 2.361]}
              scale={0.291}
            >
              <group />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/assets/models/van/van.glb");
export default Van;