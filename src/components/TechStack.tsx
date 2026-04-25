import * as THREE from "three";
import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { EffectComposer, N8AO } from "@react-three/postprocessing";
import {
  BallCollider,
  Physics,
  RigidBody,
  CylinderCollider,
  RapierRigidBody,
} from "@react-three/rapier";

const textureLoader = new THREE.TextureLoader();
const BASE = import.meta.env.BASE_URL;
const imageUrls = [
  `${BASE}images/tools/dynamics365.png`,
  `${BASE}images/tools/zoominfo.png`,
  `${BASE}images/tools/seamless-ai.png`,
  `${BASE}images/tools/excel.png`,
  `${BASE}images/tools/powerpoint.png`,
  `${BASE}images/tools/powerbi.webp`,
  `${BASE}images/tools/marketo.png`,
  `${BASE}images/tools/clickup.svg`,
  `${BASE}images/tools/notebook-llm.svg`,
  `${BASE}images/tools/chatgpt.png`,
  `${BASE}images/tools/claude-code.webp`,
  `${BASE}images/tools/claude-ai.png`,
  `${BASE}images/tools/codex.png`,
  `${BASE}images/tools/gemini.png`,
];
const textures = imageUrls.map((url) => {
  const tex = textureLoader.load(url);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  return tex;
});

const COIN_RADIUS = 1;
const COIN_HEIGHT = 0.32;
const coinGeometry = new THREE.CylinderGeometry(
  COIN_RADIUS,
  COIN_RADIUS,
  COIN_HEIGHT,
  48
);

const coins = [...Array(33)].map((_, index) => ({
  scale: [0.85, 1, 0.95, 1, 1.05][Math.floor(Math.random() * 5)],
  materialIndex: index % imageUrls.length,
}));

type CoinProps = {
  vec?: THREE.Vector3;
  scale: number;
  r?: typeof THREE.MathUtils.randFloatSpread;
  material: THREE.MeshPhysicalMaterial;
  isActive: boolean;
};

function Coin({
  vec = new THREE.Vector3(),
  scale,
  r = THREE.MathUtils.randFloatSpread,
  material,
  isActive,
}: CoinProps) {
  const api = useRef<RapierRigidBody | null>(null);

  useFrame((_state, delta) => {
    if (!isActive) return;
    delta = Math.min(0.1, delta);
    const impulse = vec
      .copy(api.current!.translation())
      .normalize()
      .multiply(
        new THREE.Vector3(
          -50 * delta * scale,
          -150 * delta * scale,
          -50 * delta * scale
        )
      );

    api.current?.applyImpulse(impulse, true);
  });

  return (
    <RigidBody
      linearDamping={0.75}
      angularDamping={0.18}
      friction={0.25}
      position={[r(20), r(20) - 25, r(20) - 10]}
      rotation={[r(Math.PI), r(Math.PI), r(Math.PI)]}
      ref={api}
      colliders={false}
    >
      <CylinderCollider
        args={[(COIN_HEIGHT / 2) * scale, COIN_RADIUS * scale]}
      />
      <mesh
        castShadow
        receiveShadow
        scale={scale}
        geometry={coinGeometry}
        material={material}
      />
    </RigidBody>
  );
}

type PointerProps = {
  vec?: THREE.Vector3;
  isActive: boolean;
};

function Pointer({ vec = new THREE.Vector3(), isActive }: PointerProps) {
  const ref = useRef<RapierRigidBody>(null);

  useFrame(({ pointer, viewport }) => {
    if (!isActive) return;
    const targetVec = vec.lerp(
      new THREE.Vector3(
        (pointer.x * viewport.width) / 2,
        (pointer.y * viewport.height) / 2,
        0
      ),
      0.2
    );
    ref.current?.setNextKinematicTranslation(targetVec);
  });

  return (
    <RigidBody
      position={[100, 100, 100]}
      type="kinematicPosition"
      colliders={false}
      ref={ref}
    >
      <BallCollider args={[2]} />
    </RigidBody>
  );
}

const TechStack = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const techstack = document.querySelector(".techstack");
    if (!techstack) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsActive(entry.isIntersecting),
      { rootMargin: "260px" }
    );
    observer.observe(techstack);
    document.querySelectorAll(".header a").forEach((elem) => {
      const element = elem as HTMLAnchorElement;
      element.addEventListener("click", () => {
        const interval = setInterval(() => {
          setIsActive(
            techstack.getBoundingClientRect().top < window.innerHeight + 260
          );
        }, 10);
        setTimeout(() => {
          clearInterval(interval);
        }, 1000);
      });
    });
    return () => {
      observer.disconnect();
    };
  }, []);
  const materials = useMemo(() => {
    return textures.map(
      (texture) =>
        new THREE.MeshPhysicalMaterial({
          map: texture,
          emissive: "#ffffff",
          emissiveMap: texture,
          emissiveIntensity: 0.18,
          metalness: 0.25,
          roughness: 0.55,
          clearcoat: 0.4,
          clearcoatRoughness: 0.35,
        })
    );
  }, []);

  return (
    <div className="techstack">
      <h2>Account &amp; Campaign Stack</h2>

      <Canvas
        shadows
        dpr={[1, 1.35]}
        frameloop={isActive ? "always" : "demand"}
        gl={{ alpha: true, stencil: false, depth: false, antialias: false }}
        camera={{ position: [0, 0, 20], fov: 32.5, near: 1, far: 100 }}
        onCreated={(state) => (state.gl.toneMappingExposure = 1.5)}
        className="tech-canvas"
      >
        <ambientLight intensity={1} />
        <spotLight
          position={[20, 20, 25]}
          penumbra={1}
          angle={0.2}
          color="white"
          castShadow
          shadow-mapSize={[512, 512]}
        />
        <directionalLight position={[0, 5, -4]} intensity={2} />
        <Physics gravity={[0, 0, 0]}>
          <Pointer isActive={isActive} />
          {coins.map((props, i) => (
            <Coin
              key={i}
              {...props}
              material={materials[props.materialIndex]}
              isActive={isActive}
            />
          ))}
        </Physics>
        <Environment
          files={`${BASE}models/char_enviorment.hdr`}
          environmentIntensity={0.5}
          environmentRotation={[0, 4, 2]}
        />
        <EffectComposer enableNormalPass={false}>
          <N8AO color="#0f002c" aoRadius={2} intensity={1.15} />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default TechStack;
