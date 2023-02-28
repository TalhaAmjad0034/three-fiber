import React, { useEffect, useRef } from "react";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { angleToRadians } from "../../utils/angle";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import Car from "../Car/Car";
import Drone from "../Drone/Drone";

function index() {
  const orbitControlsRef = useRef();

  useFrame(() => {
    if (!!orbitControlsRef.current) {
      // Setting auto rotate to true
      orbitControlsRef.current.autoRotate = true;
      // Setting auto rotate speed
      orbitControlsRef.current.autoRotateSpeed = 0.5;
      // Update the camera
      orbitControlsRef.current.update();
    }
  });

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
      <PerspectiveCamera makeDefault position={[-8, 2, 3]} />
      <OrbitControls
        ref={orbitControlsRef}
        // minPolarAngle={angleToRadians(30)}
        maxPolarAngle={angleToRadians(89)}
      />
      <Car />
      <Drone />
      {/* Adding plane */}
      <mesh rotation={[-angleToRadians(90), 0, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <meshPhongMaterial color="#2280cc" />
      </mesh>
      {/* Light */}
      <spotLight
        castShadow
        args={["#ffc3a0", 40.5, 17, angleToRadians(75), 0.4]}
        position={[-1, 3, 0]}
      />
      {/* Environment */}
      <Environment background>
        <mesh>
          <boxGeometry args={[250, 200, 200]} />
          <meshBasicMaterial color="#2280cc" side={THREE.BackSide} />
        </mesh>
      </Environment>
    </>
  );
}

export default index;
