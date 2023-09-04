import { createRoot} from "react-dom/client";
import { Canvas } from "@react-three/fiber";
// Components
import Experience from "./Experience";
import Info from "./components/Info";

const root = createRoot(document.getElementById('root'));

root.render(
    <>
    <Info name="Juan Camilo Ortiz G." bio="Estudiante de ingeniería de sistemas de la Universidad del Valle." />
    <Canvas
        camera={{ position: [2, 0, 5] }}
    >
        <Experience />
    </Canvas>
    </>
);
