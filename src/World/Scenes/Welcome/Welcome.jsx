import { Physics } from '@react-three/rapier';
// Position
import { Center, Float } from '@react-three/drei';
// Components
import Lights from '../../Staging/Lights';
import Floor from './Models/Floor';
import Car from './Models/Car';
import Sign from './Models/Sign';
import WelcomeText from './Text/WelcomeText';
import Controls from '../../Controls/Controls';

const Welcome = () => {

    return (
        <>
        <Lights />
        <Controls />
        <Float speed={1.5} rotationIntensity={0} floatIntensity={2}>
            <Center position-y={1} rotation-y={Math.PI / 2}>
            <WelcomeText />
            </Center>
            <Sign 
            position-x={-0.5} 
            position-z={3.4} 
            position-y={1}
            rotation-y={Math.PI * 6}
            scale={0.7}
            />
        </Float>
        <Physics>
            <Car
                position-x={2.5}
                position-z={-2}
                rotation-y={-Math.PI * 0.6}
                scale={0.006}
            />
            <Floor rotation-x={-Math.PI / 2} receiveShadow />
        </Physics>
        </>
    )
}

export default Welcome;