import { createRoot } from 'react-dom/client';
import { Canvas } from '@react-three/fiber';
// Components
import Experience from './Experience';
import Info from './components/Info';
// React
import { Suspense } from 'react';
// Loader
import { Loader } from '@react-three/drei';

const root = createRoot(document.getElementById('root'));

root.render(
  <>
    <Info
      name="Juan Camilo Ortiz G."
      bio="Estudiante de ingeniería de sistemas de la Universidad del Valle."
    />
    <Canvas camera={{ position: [6, 4, 5] }} shadows>
      <Suspense fallback={null}>
        <Experience />
      </Suspense>
    </Canvas>
    <Loader />
  </>
);
