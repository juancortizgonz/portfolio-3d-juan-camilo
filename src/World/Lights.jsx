// Hooks
import { PointLightHelper, SpotLightHelper } from 'three';
import { useHelper } from '@react-three/drei';
import { useMemo, useRef } from 'react';
import { useControls } from 'leva';

const Lights = () => {
  const pointLightRef = useRef();
  const spotLightRef = useRef();
  //   useHelper(pointLightRef, PointLightHelper);
  //   useHelper(spotLightRef, SpotLightHelper);

  const options = useMemo(() => {
    return {
      intensitySL: { value: 100, min: 0, max: 1000, step: 1 },
      colorSL: { value: '#ffffff' },
    };
  }, []);

  const { intensitySL, colorSL } = useControls('Spot Light', options);

  return (
    <>
      <ambientLight intensity={1.5} />
      <directionalLight position={[10, 10, 5]} intensity={2} castShadow />
      <pointLight
        ref={pointLightRef}
        position={[0, 0, 1]}
        intensity={4}
        color={'0x7fc6a4'}
        castShadow
      />
      <spotLight
        ref={spotLightRef}
        position={[7, 1.7, -5.4]}
        intensity={intensitySL}
        penumbra={1}
        distance={6}
        color={colorSL}
        angle={Math.PI / 24}
        castShadow
      />
    </>
  );
};

export default Lights;
