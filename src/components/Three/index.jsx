import React from "react";

function index() {
  return (
    <>
      {/* Ball */}
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="red" />
      </mesh>

      <mesh>
        
      </mesh>

      {/* Light */}
      {/* <pointLight position={[10, 10, 10]} /> */}
      <ambientLight intensity={0.5} />
    </>
  );
}

export default index;
