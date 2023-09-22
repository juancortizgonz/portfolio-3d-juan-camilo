import { useGLTF, useAnimations, useTexture } from '@react-three/drei';
import { useEffect, useRef } from 'react';

const Cat = (props) => {
  const catRef = useRef();
  const catModel = useGLTF('/assets/models/cat/cat.glb');

  const { nodes, materials, animations } = useGLTF(
    '/assets/models/cat/cat.glb'
  );
  const { actions } = useAnimations(animations, catRef);

  const PATH = '/assets/textures/';

  const propsTexture = useTexture({
    map: PATH + 'diffuseMap.png',
    normalMap: PATH + 'normalAO.png',
    roughnessMap: PATH + 'roughMap.png',
    aoMap: PATH + 'mapAO.png',
  });

  // console.log(catModel);

  useEffect(() => {
    const action = actions['Scene'];
    action.play();
  }, []);

  return (
    <>
      <group ref={catRef} {...props} dispose={null}>
        <group name="Sketchfab_Scene">
          <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
            <group
              name="0df7f1c552db41979cdb0b8efba99edffbx"
              rotation={[Math.PI / 2, 0, 0]}
            >
              <group name="Object_2">
                <group name="RootNode">
                  <group name="Rig" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                    <group name="Object_5">
                      <primitive object={nodes._rootJoint} />
                      <skinnedMesh
                        name="Object_43"
                        geometry={nodes.Object_43.geometry}
                        material={materials.Mat_Gradient}
                        skeleton={nodes.Object_43.skeleton}
                        castShadow
                      />
                      <group
                        name="Object_42"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                    </group>
                  </group>
                  <group
                    name="Cat"
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </>
  );
};

export default Cat;
useGLTF.preload('/assets/models/cat/cat.glb');
