import React from "react";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { angleToRadians } from "../../utils/angle";

function index() {
  return (
    <>
      {/* Camera */}
      <PerspectiveCamera makeDefault position={[0, 1, 5]} />
      <OrbitControls />
      {/* Ball */}
      <mesh position={[0, 1, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="red" />
      </mesh>

      <mesh rotation={[-angleToRadians(45), 0, 0]}>
        {/* Adding plane */}
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
