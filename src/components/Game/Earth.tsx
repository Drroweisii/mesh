import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, Center } from '@react-three/drei';
import { MODEL_URLS } from '../../constants/models';
import type { Group } from 'three';

export function Earth() {
  const earthRef = useRef<Group>(null);
  const { scene } = useGLTF(MODEL_URLS.earth);

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.002;
    }
  });

  return (
    <Center>
      <primitive
        ref={earthRef}
        object={scene}
        scale={[2, 2, 2]}
        rotation={[0.4, 0, 0]}
      />
    </Center>
  );
}

useGLTF.preload(MODEL_URLS.earth);