import { AdaptiveDpr, AdaptiveEvents, OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { lazy, memo, Suspense } from 'react';

const ModelComponent = lazy(() => import('./Logo3d.jsx'));

const Logo3dWrapper = () => {
  return (
    <Canvas shadows camera={{ fov: 14, zoom: 3 }}>
      <Suspense fallback={null}>
        <Stage environment={'city'}>
          <ModelComponent />
        </Stage>
      </Suspense>
      <AdaptiveDpr pixelated />
      <AdaptiveEvents />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate />
    </Canvas>
  );
};

export default memo(Logo3dWrapper);
