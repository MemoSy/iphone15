// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

"use client"

import { OrbitControls, PerspectiveCamera } from "@react-three/drei"
import * as THREE from 'three'
import Lights from './Lights';
import IPhone from './IPhone';
import { Suspense } from "react";

const ModelView = ({ index, groupRef, controlRef, setRotationState, size, item }) => {
  return (
    <>
      <ambientLight intensity={0.3} />

      <PerspectiveCamera makeDefault position={[0, 0, 4]} />

      <Lights />

      <OrbitControls
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0, 0)}
        onEndDrag={() => {
          if (controlRef.current) {
            setRotationState(controlRef.current.getAzimuthalAngle())
          }
        }}
        makeDefault
      />

      <group ref={groupRef} name={index === 1 ? 'small' : 'large'} position={[0, 0, 0]}>
        <Suspense fallback={null}>
          <IPhone
            scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
            item={item}
            size={size}
            position={[0, 0, 0]}
          />
        </Suspense>
      </group>
    </>
  )
}

export default ModelView