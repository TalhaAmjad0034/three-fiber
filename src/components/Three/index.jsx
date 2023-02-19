import React, { useEffect, useRef } from "react";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { angleToRadians } from "../../utils/angle";
import { useFrame } from "@react-three/fiber";

function index() {
  const orbitControlsRef = useRef();

  useFrame(() => {
    orbitControlsRef.current.update();
  });

  useEffect(() => {
    if (!!orbitControlsRef.current) {
      console.log(orbitControlsRef.current);
    }
  }, []);

  return (
    <>
      {/* Camera */}
      <PerspectiveCamera makeDefault position={[0, 1, 5]} />
      <OrbitControls ref={orbitControlsRef} />
      {/* Ball */}
      <mesh position={[0, 1, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="red" />
      </mesh>

      {/* Adding plane */}
      <mesh rotation={[-angleToRadians(45), 0, 0]}>
        <planeGeometry args={[7, 7]} />
        <meshStandardMaterial color="green" />
      </mesh>

      {/* Light */}
      <pointLight position={[10, 10, 10]} />
      <ambientLight intensity={0.5} />
    </>
  );
}

export default index;
