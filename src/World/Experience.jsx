// CSS
import '../styles.css';
// Position
import { Center, Float } from '@react-three/drei';
// Components
import Lights from './Staging/Lights';
import Floor from './Scenes/Welcome/Models/Floor';
import Car from './Scenes/Welcome/Models/Car';
import WelcomeText from './Scenes/Welcome/Text/WelcomeText';
import Controls from './Controls/Controls';

const Experience = () => {

  return (
    <>
      <Lights />
      <Controls />
      <Float speed={1.5} rotationIntensity={0} floatIntensity={2}>
        <Center position-y={1} rotation-y={Math.PI / 2}>
          <WelcomeText />
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
