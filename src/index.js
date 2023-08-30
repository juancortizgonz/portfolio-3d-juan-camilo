import { createRoot} from "react-dom/client";
import { Canvas } from "@react-three/fiber";
// Components
import Experience from "./Experience";

const root = createRoot(document.getElementById('root'));

root.render(
    <Canvas
        camera={{ position: [2, 0, 5] }}
    >
        <Experience />
    </Canvas>
);
