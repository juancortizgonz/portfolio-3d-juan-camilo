// CSS
import './styles.css';
// Hooks
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
// Camera controller
import { OrbitControls } from '@react-three/drei';
// Performance
import { Perf } from 'r3f-perf';
// Text 3D
import { Text3D } from '@react-three/drei';
// Position
import { Center, Float } from '@react-three/drei';
// Components
import Cat from './World/Cat';
import Lights from './World/Lights';
import Floor from './World/Floor';
import Car from './World/Car';

const Experience = () => {
  const welcomeRef = useRef();
  const welcomeRef2 = useRef(true);

  const handleClick = (event, type) => {
    welcomeRef.current.material.color.set(
      welcomeRef.current.material.color.getHex() === 0xfaf33e
        ? 0xda24ff
        : 0xfaf33e
    );
    welcomeRef.current.material.needsUpdate = true;
  };

  return (
    <>
      <OrbitControls makeDefault maxPolarAngle={Math.PI / 3} />
      <Perf position={'top-right'} />
      <Lights />
      {/* <Cat
        position-x={2.5}
        position-z={-2}
        rotation-y={-Math.PI * 0.3}
        scale={0.004}
      /> */}
      <Float speed={1.5} rotationIntensity={0} floatIntensity={2}>
        <Center position-y={1} rotation-y={Math.PI / 2}>
          <Text3D
            ref={welcomeRef}
            bevelEnabled
            bevelSize={0.006}
            bevelThickness={0.03}
            height={0.1}
            lineHeight={0.7}
            letterSpacing={0.06}
            size={0.35}
            font={'/assets/fonts/Martian_Mono_SemiExpanded_Regular.json'}
            castShadow
            onClick={handleClick}
          >
            {`My cool \n3D website!`}
            <meshPhysicalMaterial attach="material" color={'#FAF33E'} />
          </Text3D>
        </Center>
      </Float>
      <Car
        position-x={2.5}
        position-z={-2}
        rotation-y={-Math.PI * 0.6}
        scale={0.006}
      />
      <Floor rotation-x={-Math.PI / 2} receiveShadow />
    </>
  );
};

export default Experience;
