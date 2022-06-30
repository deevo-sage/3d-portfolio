import React, { Suspense, useEffect, useState } from "react";
import {
  Canvas,
  MeshProps,
  useFrame,
  useLoader,
  useThree,
} from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import monitor1 from "../objs/monitorframe3.glb";
import table from "../objs/table.glb";
import { GLTFLoader } from "three-stdlib";
import * as THREE from "three";
import { MonitorScreen, MonitorScreenTop } from "./MonitorScreens";
import textures from "./textures";
import { useControls } from "leva";
const screensize = {
  width: window.innerWidth,
  height: window.innerHeight,
};
const Canvasbase: React.FunctionComponent<any> = ({ children }) => {
  return (
    <Canvas
      style={{
        width: "100vw",
        height: "100vh",
        background: "rgb(31, 33, 36)",
        position: "fixed",
        zIndex: 0,
      }}
      camera={{
        position: screensize.width > 600 ? [2.4, 0, 0] : [4, 0, 0],
        fov: 70,
      }}
    >
      {/* <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} /> */}
      {/* <axesHelper /> */}
      <pointLight position={[5, 0, 0]} intensity={0.4} />
      <spotLight intensity={1} position={[0, 10, 0]} />
      <Suspense fallback={null}>
        <Setup />
      </Suspense>
    </Canvas>
  );
};
const min = 2.4;
const Setup = () => {
  // const { rx, ry, rz, tx, ty, tz } = useControls({
  //   rx: { value: 0, step: 0.1, min: -min, max: min },
  //   ry: { value: 0, step: 0.1, min: -min, max: min },
  //   rz: { value: 0, step: 0.1, min: -min, max: min },
  //   tx: { value: 0, step: 0.1, min: -min, max: min },
  //   ty: { value: 0, step: 0.1, min: -min, max: min },
  //   tz: { value: 0, step: 0.1, min: -min, max: min },
  // });
  const [screens, setscreens] = useState([
    textures.blog,
    textures.pep,
    textures.code,
    textures.rep,
  ]);
  const [look, setlook] = useState({ x: 0, y: 0, z: 0 });

  const [scrolled, setscrolled] = useState(0);
  const { camera } = useThree();
  useEffect(() => {
    window.addEventListener("scroll", ({}) => {
      setscrolled(window.scrollY / 150);
    });
    camera.position.set(3, 0, 0);
  }, []);
  // useEffect(() => {
  //   let x =
  //     scrolled < 7 ? Math.max(scrolled, 0.3) : Math.max(7 - (scrolled - 7), 4);
  //   camera.lookAt(2 - x / 2, 0, 2 - x / 2);
  //   camera.position.set(x, 0, 0);
  // }, [scrolled, camera]);
  useFrame(() => {
    camera.lookAt(look.x, look.y, look.z);
  });
  useEffect(() => {
    camera.lookAt(2, 0, 2);
    if (screensize.width > 600) {
      window.addEventListener("mousemove", (e) => {
        const client = {
          x: 0,
          y: e.clientY / screensize.height,
          z: e.clientX / screensize.width,
        };
        setlook({
          x: client.x,
          y: client.y * 1.5,
          z: (client.z - 0.5) * 4,
        });
      });
    }
    return () => {
      screensize.width > 600 &&
        window.removeEventListener("mousemove", (e) => {
          const client = {
            x: 0,
            y: e.clientY / screensize.height,
            z: e.clientX / screensize.width,
          };
          setlook({
            x: client.x,
            y: client.y * 1.5,
            z: (client.z - 0.5) * 4,
          });
        });
    };
  }, []);

  return (
    <>
      <Table
        link={table}
        scale={[0.7, 0.7, 0.5]}
        position={[0.6, -1.24, -0.4]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <group rotation={[0, -0.06, 0]}>
        <Monitor
          link={monitor1}
          position={[0, -2, 0]}
          scale={[0.1, 0.1, 0.1]}
        />
        <MonitorScreen
          position={[0, 0.1, -0.05]}
          rotation={[0, Math.PI / 2, 0]}
          map={screens[0]}
        />
        <MonitorScreen
          position={[0.82, 0.1, -2.3]}
          rotation={[0, -1.34 + Math.PI / 2, 0]}
          map={screens[1]}
        />
        <MonitorScreen
          position={[1, 0.1, 2.2]}
          rotation={[0, 1.2 + Math.PI / 2, 0]}
          map={screens[2]}
        />
        <MonitorScreenTop
          position={[0.07, 1.9, 0.3]}
          rotation={[0.68, 0, 0]}
          map={screens[3]}
        />
      </group>
    </>
  );
};

const Monitor: React.FunctionComponent<{
  link: string;
  position?: number[];
  rotation?: number[];
  scale?: number[];
  castShadow?: boolean;
}> = (props) => {
  const gltf = useLoader(GLTFLoader, props.link);
  const primitiveProps = {
    object: gltf.scene,
    // rotation: props.rotation || [0, 0, 0],
    scale: props.scale || [1, 1, 1],
    castShadow: true,
    recieveShadow: true,
  };
  useFrame(() => {});
  return (
    <mesh rotation={props.rotation} position={props.position}>
      <primitive {...primitiveProps} />
    </mesh>
  );
};
const Table: React.FunctionComponent<{
  link: string;
  position?: number[];
  rotation?: number[];
  scale?: number[];
  castShadow?: boolean;
}> = (props) => {
  const gltf = useLoader(GLTFLoader, props.link);
  const primitiveProps = {
    object: gltf.scene,
    // rotation: props.rotation || [0, 0, 0],
    scale: props.scale || [1, 1, 1],
    castShadow: true,
    recieveShadow: true,
  };
  useFrame(() => {});
  return (
    <mesh rotation={props.rotation} position={props.position}>
      <primitive {...primitiveProps} />
    </mesh>
  );
};
export default Canvasbase;
