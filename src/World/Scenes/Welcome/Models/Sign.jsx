import React, { useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { MathUtils } from "three";

const Sign = (props) => {
    const { nodes, materials } = useGLTF("/assets/models/sign/sign.glb");
    const [active, setActive] = useState(false);
    
    useFrame((state, delta) => {
      state.camera.position.x = MathUtils.lerp(state.camera.position.x, active ? 7 : 5, 0.1)
      state.camera.position.z = MathUtils.lerp(state.camera.position.z, active ? -6 : 5, 0.1)
    })


    return (
    <group {...props} dispose={null} onClick={() => setActive(!active)}>
      <group>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group>
              <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder_Clay_0.geometry}
                  material={materials.Clay}
                />
              </group>
              <group
                position={[17.932, 12.667, 147.75]}
                rotation={[1.545, 0.005, -0.207]}
                scale={100}
              >
                <group rotation={[Math.PI / 2, 0, 0]}>
                  <group />
                </group>
              </group>
              <group
                position={[97.437, -0.472, -170.425]}
                rotation={[-1.593, 0.014, -0.567]}
                scale={100}
              >
                <group rotation={[Math.PI / 2, 0, 0]}>
                  <group />
                </group>
              </group>
              <group
                position={[-244.692, 199.246, -33.952]}
                rotation={[0, 0, 1.11]}
                scale={100}
              >
                <group rotation={[Math.PI / 2, 0, 0]}>
                  <group />
                </group>
              </group>
              <group
                position={[-37.985, 0, 0]}
                rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                scale={[100, 100, 27.701]}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder001_Clay_White_0.geometry}
                  material={materials.Clay_White}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/assets/models/sign/sign.glb");
export default Sign;