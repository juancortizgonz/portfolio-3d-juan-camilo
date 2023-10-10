// Hooks
import { useRef } from 'react';
// Text 3D
import { Text3D } from '@react-three/drei';

const WelcomeText = () => {
    const welcomeRef = useRef();

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
        </>
    )
}

export default WelcomeText;