// import React, { Suspense } from 'react';
// import { Canvas } from '@react-three/fiber';
// import {
//   Decal,
//   Float,
//   OrbitControls,
//   Preload,
//   useTexture,
// } from '@react-three/drei';
// import Loader from '../Loader';

// const Ball = (props) => {
//   const [decal] = useTexture([props.imgUrl]);

//   return (
//     <Float speed={2.5} rotationIntensity={1} floatIntensity={2}>
//       <ambientLight intensity={0.25} />
//       <directionalLight position={[0, 0, 0.05]} />
//       <mesh castShadow receiveShadow scale={2.75}>
//         <icosahedronGeometry args={[1, 2]} />
//         <meshStandardMaterial
//           color="#3d3d3d"
//           polygonOffset
//           polygonOffsetFactor={-5}
//           flatShading
//         />
//         <Decal
//           position={[0, 0, 1]}
//           rotation={[2 * Math.PI, 0, 6.25]}
//           flatShading
//           map={decal}
//         />
//       </mesh>
//     </Float>
//   );
// };

// const BallCanvas = ({ icon }) => {
//   return (
//     <Canvas frameloop="always" gl={{ preserveDrawingBuffer: true }}>
//       <Suspense fallback={<Loader />}>
//         <OrbitControls enableZoom={false} position0={0} />
//         <Ball imgUrl={icon} />
//       </Suspense>

//       <Preload all />
//     </Canvas>
//   );
// };

// export default BallCanvas;

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from '@react-three/drei';
import Loader from '../Loader';

const Ball = ({ imgUrl }) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <Float 
      speed={1.5} 
      rotationIntensity={0.5} 
      floatIntensity={1.5} 
      floatingRange={[0, 0.3]} // Subtle floating animation
    >
      <mesh castShadow receiveShadow scale={2.5}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#3d3d3d"
          flatShading
        />
        <Decal
          position={[0, 0, 0.9]} // Adjust closer to the surface
          rotation={[0, 0, 0]} // Ensure proper orientation
          scale={[1, 1, 1]} // Adjust size to fit properly
          flatShading
          map={decal}
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="demand" // Optimizes render loop for performance
      shadows
      gl={{ antialias: true }}
    >
      <Suspense fallback={<Loader />}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[0, 5, 5]} intensity={0.8} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
