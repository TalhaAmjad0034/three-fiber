import { Suspense, useState } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import Three from "./components/Three";

function App() {
  return (
    <>
      <Canvas colorManagement shadows shadowMap id="three-canvas-container">
        <Suspense fallback={null}>
          <Three />
          <ambientLight />
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
