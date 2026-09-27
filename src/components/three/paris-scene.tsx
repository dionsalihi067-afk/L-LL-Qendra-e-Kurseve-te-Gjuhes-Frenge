"use client";

import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  Float,
  ContactShadows,
  MeshTransmissionMaterial,
  Sparkles,
} from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

function EiffelTower({ position }: { position: [number, number, number] }) {
  const group = useRef<THREE.Group>(null);

  useFrame(({ clock, pointer }) => {
    if (!group.current) return;
    group.current.rotation.y = Math.sin(clock.elapsedTime * 0.15) * 0.08 + pointer.x * 0.15;
    group.current.position.y = position[1] + Math.sin(clock.elapsedTime * 0.6) * 0.08;
  });

  return (
    <group ref={group} position={position} scale={0.85}>
      <mesh position={[0, 1.6, 0]}>
        <cylinderGeometry args={[0.02, 0.45, 3.2, 4]} />
        <meshStandardMaterial color="#103A71" metalness={0.7} roughness={0.25} />
      </mesh>
      <mesh position={[0, 3.4, 0]}>
        <cylinderGeometry args={[0.01, 0.12, 1.1, 4]} />
        <meshStandardMaterial color="#C8A646" metalness={0.85} roughness={0.2} />
      </mesh>
      <mesh position={[0, 0.15, 0]} rotation={[0, Math.PI / 4, 0]}>
        <boxGeometry args={[1.1, 0.08, 1.1]} />
        <meshStandardMaterial color="#091420" metalness={0.4} roughness={0.5} />
      </mesh>
      {[
        [-0.35, 0.9, -0.35],
        [0.35, 0.9, -0.35],
        [-0.35, 0.9, 0.35],
        [0.35, 0.9, 0.35],
      ].map((p, i) => (
        <mesh key={i} position={p as [number, number, number]}>
          <boxGeometry args={[0.04, 1.6, 0.04]} />
          <meshStandardMaterial color="#1a4f8f" metalness={0.6} roughness={0.3} />
        </mesh>
      ))}
    </group>
  );
}

function Book({
  position,
  rotation,
  color,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  color: string;
}) {
  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={1.2}>
      <mesh position={position} rotation={rotation} castShadow>
        <boxGeometry args={[0.7, 0.12, 0.95]} />
        <meshStandardMaterial color={color} metalness={0.15} roughness={0.45} />
      </mesh>
      <mesh position={[position[0], position[1] + 0.07, position[2]]} rotation={rotation}>
        <boxGeometry args={[0.62, 0.02, 0.88]} />
        <meshStandardMaterial color="#F7F9FC" roughness={0.8} />
      </mesh>
    </Float>
  );
}

function Letter({
  char,
  position,
  color,
}: {
  char: string;
  position: [number, number, number];
  color: string;
}) {
  const texture = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.fillStyle = "transparent";
      ctx.fillRect(0, 0, 128, 128);
      ctx.font = "bold 90px Georgia";
      ctx.fillStyle = color;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(char, 64, 72);
    }
    const tex = new THREE.CanvasTexture(canvas);
    tex.needsUpdate = true;
    return tex;
  }, [char, color]);

  return (
    <Float speed={2} rotationIntensity={0.6} floatIntensity={1.6}>
      <mesh position={position}>
        <planeGeometry args={[0.55, 0.55]} />
        <meshBasicMaterial map={texture} transparent opacity={0.9} side={THREE.DoubleSide} />
      </mesh>
    </Float>
  );
}

function Passport({ position }: { position: [number, number, number] }) {
  return (
    <Float speed={1.1} rotationIntensity={0.35} floatIntensity={0.9}>
      <mesh position={position} rotation={[0.4, 0.6, 0.2]} castShadow>
        <boxGeometry args={[0.55, 0.08, 0.75]} />
        <meshStandardMaterial color="#103A71" metalness={0.3} roughness={0.4} />
      </mesh>
      <mesh position={[position[0], position[1] + 0.05, position[2]]} rotation={[0.4, 0.6, 0.2]}>
        <circleGeometry args={[0.1, 24]} />
        <meshStandardMaterial color="#C8A646" metalness={0.9} roughness={0.15} />
      </mesh>
    </Float>
  );
}

function CapsuleOrb({ position }: { position: [number, number, number] }) {
  return (
    <Float speed={1.8} floatIntensity={1.4} rotationIntensity={0.5}>
      <mesh position={position}>
        <sphereGeometry args={[0.28, 32, 32]} />
        <MeshTransmissionMaterial
          backside
          samples={4}
          thickness={0.6}
          roughness={0.15}
          chromaticAberration={0.04}
          anisotropy={0.2}
          distortion={0.15}
          distortionScale={0.2}
          temporalDistortion={0.1}
          color="#E8F0FF"
        />
      </mesh>
    </Float>
  );
}

function SceneContents() {
  const light = useRef<THREE.DirectionalLight>(null);

  useFrame(({ clock, pointer }) => {
    if (light.current) {
      light.current.position.x = 3 + pointer.x * 2;
      light.current.position.y = 4 + Math.sin(clock.elapsedTime * 0.4) * 0.4;
    }
  });

  return (
    <>
      <color attach="background" args={["#071018"]} />
      <fog attach="fog" args={["#071018", 8, 22]} />
      <ambientLight intensity={0.35} />
      <directionalLight
        ref={light}
        castShadow
        intensity={1.4}
        position={[4, 6, 3]}
        shadow-mapSize={[1024, 1024]}
      />
      <pointLight position={[-3, 2, -2]} intensity={0.6} color="#C8A646" />
      <pointLight position={[2, -1, 3]} intensity={0.4} color="#E63946" />

      <EiffelTower position={[1.6, -1.2, -1]} />
      <Book position={[-2.2, 0.4, 0.2]} rotation={[0.3, -0.5, 0.2]} color="#103A71" />
      <Book position={[-1.5, -0.5, 1]} rotation={[-0.2, 0.8, -0.1]} color="#E63946" />
      <Book position={[2.4, 0.8, 0.6]} rotation={[0.5, -0.3, 0.15]} color="#C8A646" />
      <Passport position={[-0.6, 0.9, 1.2]} />
      <CapsuleOrb position={[0.2, 1.5, -0.4]} />
      <Letter char="À" position={[-2.8, 1.3, -0.5]} color="#C8A646" />
      <Letter char="É" position={[2.8, -0.2, 0.3]} color="#FFFFFF" />
      <Letter char="Ç" position={[-0.2, -0.8, 1.6]} color="#E63946" />

      <Sparkles count={60} scale={[10, 6, 6]} size={2} speed={0.35} opacity={0.45} color="#C8A646" />
      <ContactShadows position={[0, -1.8, 0]} opacity={0.45} scale={14} blur={2.6} far={5} />
      <Environment preset="city" />
      <EffectComposer>
        <Bloom luminanceThreshold={0.7} intensity={0.55} mipmapBlur />
      </EffectComposer>
    </>
  );
}

function CameraRig() {
  useFrame(({ camera, clock, pointer }) => {
    const t = clock.elapsedTime;
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointer.x * 0.6, 0.03);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, 0.4 + pointer.y * 0.3, 0.03);
    camera.position.z = 6.2 + Math.sin(t * 0.12) * 0.15;
    camera.lookAt(0, 0.2, 0);
  });
  return null;
}

export function ParisScene() {
  return (
    <div className="absolute inset-0 h-full w-full">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0.5, 6.2], fov: 42 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        shadows
      >
        <Suspense fallback={null}>
          <CameraRig />
          <SceneContents />
        </Suspense>
      </Canvas>
    </div>
  );
}
