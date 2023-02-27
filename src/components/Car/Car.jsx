import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Car(props) {
  const { nodes, materials } = useGLTF("/carModal/car-transformed.glb");
  return (
    <group dispose={null} position={[0, 0, -1]}>
      <group position={[0, 0.55, -0.53]} scale={0.1}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_172.geometry}
          material={materials.HDMC_Silver_Gray_Carpaint}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_173.geometry}
          material={materials.HDMC_Silver_Gray_Carpaint}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_174.geometry}
          material={materials.HDMC_Silver_Gray_Carpaint}
        />
      </group>
      <group
        position={[-1.18, 0.31, -1.16]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 0, 0.01]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_230.geometry}
          material={materials.Sidewall_Car_wheels_rubber_v2_by_fahd}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_231.geometry}
          material={materials.Sidewall_Car_wheels_rubber_v2_by_fahd}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_232.geometry}
          material={materials.Inner_Car_wheels_rubber_v2_by_fahd}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_233.geometry}
          material={materials.Car_wheels_rubber_v2_by_fahd}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_234.geometry}
          material={materials["04_-_Default"]}
        />
      </group>
      <group
        position={[1.18, 0.48, -1.2]}
        rotation={[-2.12, 0, Math.PI]}
        scale={[0.01, 0, 0.01]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_238.geometry}
          material={materials.Sidewall_Car_wheels_rubber_v2_by_fahd}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_239.geometry}
          material={materials.Sidewall_Car_wheels_rubber_v2_by_fahd}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_240.geometry}
          material={materials.Inner_Car_wheels_rubber_v2_by_fahd}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_241.geometry}
          material={materials.Car_wheels_rubber_v2_by_fahd}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_242.geometry}
          material={materials["04_-_Default"]}
        />
      </group>
      <group
        position={[-1.17, 0.31, 1.4]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 0, 0.01]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_272.geometry}
          material={materials.Sidewall_Car_wheels_rubber_v2_by_fahd}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_273.geometry}
          material={materials.Sidewall_Car_wheels_rubber_v2_by_fahd}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_274.geometry}
          material={materials.Inner_Car_wheels_rubber_v2_by_fahd}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_275.geometry}
          material={materials.Car_wheels_rubber_v2_by_fahd}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_276.geometry}
          material={materials["04_-_Default"]}
        />
      </group>
      <group
        position={[1.2, 0.48, 1.32]}
        rotation={[-2.12, -0.05, -3.07]}
        scale={[0.01, 0, 0.01]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_300.geometry}
          material={materials.Sidewall_Car_wheels_rubber_v2_by_fahd}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_301.geometry}
          material={materials.Sidewall_Car_wheels_rubber_v2_by_fahd}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_302.geometry}
          material={materials.Inner_Car_wheels_rubber_v2_by_fahd}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_303.geometry}
          material={materials.Car_wheels_rubber_v2_by_fahd}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_304.geometry}
          material={materials["04_-_Default"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.HD_Black_Plastik_Outdoor}
        position={[0.01, 0.64, -2.12]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        material={materials.chromium}
        position={[0, 0.6, -2.09]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_8.geometry}
        material={materials.FM_tail_Light_glass_red}
        position={[0, 0.42, -2.08]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_10.geometry}
        material={materials.Pearl_Red}
        position={[0, 0.42, -2.07]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_12.geometry}
        material={materials.FM_tail_Light_glass_red}
        position={[0, 0.42, -2.07]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_14.geometry}
        material={materials.S_M_G_Pearl_Tahitian}
        position={[0, 0.72, -2.03]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_16.geometry}
        material={materials["04_-_Default"]}
        position={[0, 0.6, -2.01]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_18.geometry}
        material={materials.FM_tail_Light_glass_red}
        position={[0, 0.68, -1.99]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_20.geometry}
        material={materials.FM_tail_Light_glass_red}
        position={[0, 0.68, -1.99]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_22.geometry}
        material={materials.Pearl_Red}
        position={[0, 0.68, -1.98]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_24.geometry}
        material={materials.S_M_G_Pearl_Tahitian}
        position={[0, 0.41, -1.98]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_26.geometry}
        material={materials["Material.001"]}
        position={[0, 0.68, -1.99]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_28.geometry}
        material={materials.FM_tail_Light_glass_red}
        position={[0, 0.68, -1.98]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_30.geometry}
        material={materials.S_M_G_Pearl_Tahitian}
        position={[0, 0.24, -1.98]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_32.geometry}
        material={materials.S_M_G_Pearl_Tahitian}
        position={[0, 0.28, -1.97]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_34.geometry}
        material={materials["04_-_Default"]}
        position={[0, 0.6, -1.95]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_36.geometry}
        material={materials.HDMC_Silver_Gray_Carpaint}
        position={[0, 0.76, -1.94]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_38.geometry}
        material={materials["04_-_Default"]}
        position={[0, 0.33, -1.93]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_40.geometry}
        material={materials.S_M_G_Pearl_Tahitian}
        position={[0, 0.41, -1.85]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_42.geometry}
        material={materials.S_M_G_Pearl_Tahitian}
        position={[0, 0.36, -1.83]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_44.geometry}
        material={materials.HDMC_Silver_Gray_Carpaint}
        position={[0, 0.8, -1.47]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_46.geometry}
        material={materials["04_-_Default"]}
        position={[0, 0.76, -1.47]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_48.geometry}
        material={materials.Matte_Chrome}
        position={[-0.87, 0.31, -1.47]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_50.geometry}
        material={materials.HD_Black_Carbon}
        position={[-0.83, 0.32, -1.47]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_52.geometry}
        material={materials.HDMC_Silver_Gray_Carpaint}
        position={[0.29, 0.87, -0.38]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_54.geometry}
        material={materials.Matte_Chrome}
        position={[0, 0.64, -2.12]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_56.geometry}
        material={materials.S_M_G_Pearl_Tahitian}
        position={[0, 0.25, -2.12]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_58.geometry}
        material={materials.HD_Black_Carbon}
        position={[0, 0.57, 0.73]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_60.geometry}
        material={materials.HDMC_Silver_Gray_Carpaint}
        position={[0, 0.69, 0.74]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_62.geometry}
        material={materials.Matte_Chrome}
        position={[0.31, 0.24, 0.87]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_64.geometry}
        material={materials.Matte_Chrome}
        position={[0.28, 0.38, 0.88]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_66.geometry}
        material={materials.S_M_G_Pearl_Tahitian}
        position={[0.84, 0.32, -1.47]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_68.geometry}
        material={materials.Matte_Chrome}
        position={[0.85, 0.31, -1.47]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_70.geometry}
        material={materials.Matte_Chrome}
        position={[-0.85, 0.31, -1.46]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_72.geometry}
        material={materials.Matte_Chrome}
        position={[0.88, 0.31, -1.46]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_74.geometry}
        material={materials["04_-_Default"]}
        position={[0.76, 0.31, -1.46]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_76.geometry}
        material={materials["04_-_Default"]}
        position={[-0.75, 0.31, -1.46]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_78.geometry}
        material={materials.HD_Black_Carbon}
        position={[0, 0.83, -1.38]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_80.geometry}
        material={materials.HDMC_Silver_Gray_Carpaint}
        position={[-0.78, 0.31, -1.32]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_82.geometry}
        material={materials.HDMC_Silver_Gray_Carpaint}
        position={[-0.78, 0.31, -1.31]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_84.geometry}
        material={materials["04_-_Default"]}
        position={[-0.81, 0.31, -1.3]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_86.geometry}
        material={materials["01_-_Default"]}
        position={[0, 0.82, -1.31]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_88.geometry}
        material={materials.HD_Black_Plastik_Outdoor}
        position={[0, 0.82, -1.31]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_90.geometry}
        material={materials.HDMC_Silver_Gray_Carpaint}
        position={[-0.81, 0.31, -1.28]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_92.geometry}
        material={materials["01_-_Default"]}
        position={[0, 0.69, -1.12]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_94.geometry}
        material={materials["04_-_Default"]}
        position={[0, 0.69, -0.96]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_96.geometry}
        material={materials.HDMC_Silver_Gray_Carpaint}
        position={[0, 0.92, -0.83]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_98.geometry}
        material={materials.HD_Black_Carbon}
        position={[0, 0.73, -0.67]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_100.geometry}
        material={materials.HDMC_Silver_Gray_Carpaint}
        position={[0, 1, -0.45]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_102.geometry}
        material={materials.brown_leather}
        position={[0, 0.62, -0.05]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_104.geometry}
        material={materials["04_-_Default"]}
        position={[0, 0.38, 0.04]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_106.geometry}
        material={materials.Matte_Chrome}
        position={[0, 0.45, 0.07]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_108.geometry}
        material={materials.brown_leather}
        position={[0, 0.46, 0.07]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_110.geometry}
        material={materials.Matte_Chrome}
        position={[0, 0.29, 0.23]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_112.geometry}
        material={materials.HD_Black_Carbon}
        position={[0, 0.55, 0.3]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_114.geometry}
        material={materials.Matte_Chrome}
        position={[0, 0.47, 0.35]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_116.geometry}
        material={materials.Matte_Chrome}
        position={[0, 0.46, 0.35]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_118.geometry}
        material={materials.Matte_Chrome}
        position={[0, 0.46, 0.36]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_120.geometry}
        material={materials.Matte_Chrome}
        position={[0, 0.5, 0.37]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_122.geometry}
        material={materials["01_-_Default"]}
        position={[0, 0.66, 0.39]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_124.geometry}
        material={materials.Matte_Chrome}
        position={[0, 0.51, 0.4]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_126.geometry}
        material={materials.Matte_Chrome}
        position={[0, 0.51, 0.41]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_128.geometry}
        material={materials.Matte_Chrome}
        position={[0.28, 0.64, 0.42]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_130.geometry}
        material={materials["04_-_Default"]}
        position={[0, 0.66, 0.42]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_132.geometry}
        material={materials.HD_Black_Carbon}
        position={[0.28, 0.59, 0.42]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_134.geometry}
        material={materials["24_-_Default"]}
        position={[0.12, 0.63, 0.43]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_136.geometry}
        material={materials.HD_Black_Plastik_Outdoor}
        position={[0, 0.52, 0.45]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_138.geometry}
        material={materials.Mirror}
        position={[0, 0.79, 0.48]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_140.geometry}
        material={materials.Matte_Chrome}
        position={[0, 0.68, 0.49]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_142.geometry}
        material={materials.Matte_Chrome}
        position={[0, 0.68, 0.5]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_144.geometry}
        material={materials["01_-_Default"]}
        position={[0, 0.52, 0.5]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_146.geometry}
        material={materials.HDMC_Silver_Gray_Carpaint}
        position={[0, 0.7, 0.51]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_148.geometry}
        material={materials.HDMC_Silver_Gray_Carpaint}
        position={[0.28, 0.66, 0.51]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_150.geometry}
        material={materials.HD_Black_Plastik_Outdoor}
        position={[0, 0.52, 0.53]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_152.geometry}
        material={materials.HD_Black_Plastik_Outdoor}
        position={[0.29, 0.73, 0.57]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_154.geometry}
        material={materials.HDMC_Silver_Gray_Carpaint}
        position={[0, 0.75, 0.57]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_156.geometry}
        material={materials.HDMC_Silver_Gray_Carpaint}
        position={[0.15, 0.76, 0.62]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_158.geometry}
        material={materials.HDMC_Silver_Gray_Carpaint}
        position={[0.41, 0.76, 0.62]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_160.geometry}
        material={materials["01_-_Default"]}
        position={[0, 0.55, 0.63]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_162.geometry}
        material={materials.HDMC_Silver_Gray_Carpaint}
        position={[0.28, 0.74, 0.65]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_164.geometry}
        material={materials.HDMC_Silver_Gray_Carpaint}
        position={[0.28, 0.71, 0.66]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_166.geometry}
        material={materials.HD_Black_Carbon}
        position={[0, 0.21, 1.89]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_168.geometry}
        material={materials.Matte_Chrome}
        position={[0, 0.5, 1.95]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_170.geometry}
        material={materials.HD_Black_Plastik_Outdoor}
        position={[0, 0.5, 1.95]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_176.geometry}
        material={materials.HDMC_Silver_Gray_Carpaint}
        position={[0, 0.59, 0.23]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_178.geometry}
        material={materials.S_M_G_Pearl_Tahitian}
        position={[0, 0.59, -2.01]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_180.geometry}
        material={materials.HDMC_Silver_Gray_Carpaint}
        position={[0, 0.44, 1.37]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_182.geometry}
        material={materials.HD_Black_Carbon}
        position={[-0.78, 0.31, -1.47]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_184.geometry}
        material={materials.S_M_G_Pearl_Tahitian}
        position={[0.78, 0.31, -1.47]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_186.geometry}
        material={materials.Matte_Chrome}
        position={[0, 0.6, -0.06]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_188.geometry}
        material={materials.HDMC_Front_Lights_Clear}
        position={[0, 0.41, 1.41]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_190.geometry}
        material={materials["01_-_Default"]}
        position={[0, 0.41, 1.41]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_192.geometry}
        material={materials.FM_reflectors}
        position={[0, 0.41, 1.41]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_194.geometry}
        material={materials.HD_Black_Plastik_Outdoor}
        position={[0, 0.64, 1.45]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_196.geometry}
        material={materials.Matte_Chrome}
        position={[0, 0.56, 1.53]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_198.geometry}
        material={materials.HDMC_Lamp_Rainbow}
        position={[0, 0.55, 1.54]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_200.geometry}
        material={materials.HD_Black_Plastik_Outdoor}
        position={[0, 0.64, 1.49]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_202.geometry}
        material={materials.FM_reflectors}
        position={[0, 0.56, 1.56]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_204.geometry}
        material={materials.HDMC_Front_Lights_Clear}
        position={[0, 0.56, 1.56]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_206.geometry}
        material={materials["04_-_Default"]}
        position={[0, 0.48, 1.53]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_208.geometry}
        material={materials.Matte_Chrome}
        position={[0, 0.56, 1.53]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_210.geometry}
        material={materials.HDMC_Lamp_Rainbow}
        position={[0, 0.55, 1.54]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_212.geometry}
        material={materials.Matte_Chrome}
        position={[0, 0.56, 1.56]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_214.geometry}
        material={materials.FM_reflectors}
        position={[0, 0.56, 1.56]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_216.geometry}
        material={materials.Matte_Chrome}
        position={[0, 0.56, 1.58]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_218.geometry}
        material={materials.Matte_Chrome}
        position={[0, 0.56, 1.58]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_220.geometry}
        material={materials.HDMC_Front_Lights_Clear}
        position={[0, 0.56, 1.62]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_222.geometry}
        material={materials["04_-_Default"]}
        position={[0, 0.22, 1.67]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_224.geometry}
        material={materials["04_-_Default"]}
        position={[0, 0.21, 1.72]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_226.geometry}
        material={materials.FM_reflectors}
        position={[0, 0.4, 1.76]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_228.geometry}
        material={materials.HDM_06_008_brake_disc}
        position={[-0.77, 0.31, -1.47]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_236.geometry}
        material={materials.HDM_06_008_brake_disc}
        position={[0.79, 0.31, -1.47]}
        rotation={[-0.55, 0, Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_244.geometry}
        material={materials.HDMC_Silver_Gray_Carpaint}
        position={[0.79, 0.31, -1.3]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_246.geometry}
        material={materials.HDMC_Silver_Gray_Carpaint}
        position={[0.79, 0.31, -1.32]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_248.geometry}
        material={materials["04_-_Default"]}
        position={[0.82, 0.31, -1.3]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_250.geometry}
        material={materials.HDMC_Silver_Gray_Carpaint}
        position={[0.82, 0.31, -1.28]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_252.geometry}
        material={materials.HDMC_Silver_Gray_Carpaint}
        position={[-0.77, 0.28, 0.95]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_254.geometry}
        material={materials.S_M_G_Pearl_Tahitian}
        position={[-0.78, 0.31, 1.09]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_256.geometry}
        material={materials["04_-_Default"]}
        position={[-0.78, 0.28, 0.95]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_258.geometry}
        material={materials.Matte_Chrome}
        position={[-0.77, 0.28, 0.95]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_260.geometry}
        material={materials["04_-_Default"]}
        position={[-0.73, 0.31, 1.08]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_262.geometry}
        material={materials.Matte_Chrome}
        position={[-0.87, 0.31, 1.09]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_264.geometry}
        material={materials.S_M_G_Pearl_Tahitian}
        position={[-0.84, 0.32, 1.09]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_266.geometry}
        material={materials.HDMC_Silver_Gray_Carpaint}
        position={[-0.79, 0.31, 1.09]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_268.geometry}
        material={materials["01_-_Default"]}
        position={[-0.85, 0.31, 1.09]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_270.geometry}
        material={materials.HDM_06_008_brake_disc}
        position={[-0.78, 0.31, 1.09]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_278.geometry}
        material={materials["04_-_Default"]}
        position={[-0.84, 0.28, 0.95]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_280.geometry}
        material={materials.S_M_G_Pearl_Tahitian}
        position={[0.79, 0.31, 1.09]}
        rotation={[-0.55, 0.07, -3.1]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_282.geometry}
        material={materials.HDMC_Silver_Gray_Carpaint}
        position={[0.77, 0.27, 0.95]}
        rotation={[-0.55, 0.07, -3.1]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_284.geometry}
        material={materials["04_-_Default"]}
        position={[0.77, 0.27, 0.96]}
        rotation={[-0.55, 0.07, -3.1]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_286.geometry}
        material={materials.Matte_Chrome}
        position={[0.77, 0.27, 0.96]}
        rotation={[-0.55, 0.07, -3.1]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_288.geometry}
        material={materials["04_-_Default"]}
        position={[0.74, 0.31, 1.09]}
        rotation={[-0.55, 0.07, -3.1]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_290.geometry}
        material={materials.Matte_Chrome}
        position={[0.88, 0.31, 1.08]}
        rotation={[-0.55, 0.07, -3.1]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_292.geometry}
        material={materials.S_M_G_Pearl_Tahitian}
        position={[0.84, 0.31, 1.09]}
        rotation={[-0.55, 0.07, -3.1]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_294.geometry}
        material={materials.HDMC_Silver_Gray_Carpaint}
        position={[0.8, 0.31, 1.09]}
        rotation={[-0.55, 0.07, -3.1]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_296.geometry}
        material={materials["01_-_Default"]}
        position={[0.85, 0.31, 1.09]}
        rotation={[-0.55, 0.07, -3.1]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_298.geometry}
        material={materials.HDM_06_008_brake_disc}
        position={[0.79, 0.31, 1.09]}
        rotation={[-0.55, 0.07, -3.1]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_306.geometry}
        material={materials["04_-_Default"]}
        position={[0.83, 0.27, 0.95]}
        rotation={[-0.55, 0.07, -3.1]}
        scale={0.1}
      />
    </group>
  );
}

useGLTF.preload("/carModal/car-transformed.glb");
