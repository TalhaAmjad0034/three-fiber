import React, { useEffect, useRef } from "react";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { angleToRadians } from "../../utils/angle";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function index() {
  const orbitControlsRef = useRef();

  // We can use useFrame to update the camera position

  // useFrame((state) => {
  //   if (!!orbitControlsRef.current) {
  //     const { x, y } = state.mouse; // x and y are between -1 and 1
  //     // setting azimuthal angle to move 90 degrees to the left and right (- for fixing invert mode)
  //     orbitControlsRef.current.setAzimuthalAngle(-x * angleToRadians(90));
  //     // setting polar angle to move 90 degrees up and down
  //     orbitControlsRef.current.setPolarAngle((y + 1) * angleToRadians(90));
  //     // Update the camera
  //     orbitControlsRef.current.update();
  //   }
  // });

  // useEffect(() => {
  //   if (!!orbitControlsRef.current) {
  //     console.log(orbitControlsRef.current);
  //   }
  // }, []);

  return (
    <>
      {/* Camera */}
      <PerspectiveCamera makeDefault position={[0, -4, 8]} />
      <OrbitControls
        ref={orbitControlsRef}
        // minPolarAngle={angleToRadians(30)}
        maxPolarAngle={angleToRadians(85)}
      />
      {/* Ball */}
      <mesh position={[0, 0.5, 0]} castShadow>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial
          color="#fff"
          // emissive is the color of the light emitted by the material
          emissive={new THREE.Color("#ff0000").multiplyScalar(0.5)}
        />
      </mesh>

      {/* Adding box */}
      <mesh rotation={[-angleToRadians(90), 0, 0]} receiveShadow>
        <planeGeometry args={[7, 7]} />
        <meshPhongMaterial color="#1ea3d8" />
      </mesh>

      {/* Light */}
      <spotLight
        castShadow
        args={["#fff", 1.5, 7, angleToRadians(45), 0.4]}
        position={[-3, 1, 0]}
      />

      {/* Environment */}
      <Environment background>
        <mesh>
          <boxGeometry args={[50, 100, 100]} />
          <meshBasicMaterial color="#2280cc" side={THREE.BackSide} />
        </mesh>
      </Environment>
    </>
  );
}

export default index;
