// Camera controller
import { OrbitControls } from '@react-three/drei';
// Performance
import { Perf } from 'r3f-perf';

const Controls = () => {


    return (
        <>
        <OrbitControls makeDefault maxPolarAngle={Math.PI / 3} />
        <Perf position={'top-right'} />
        </>
    )
}

export default Controls;