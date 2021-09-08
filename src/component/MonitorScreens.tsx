import React, { useEffect, useRef } from "react";
import THREE, { Mesh } from "three";
import { MeshProps } from "@react-three/fiber";
interface Screen extends MeshProps {
  map: THREE.Texture | null;
}
const MonitorScreen: React.FunctionComponent<Screen> = (props) => {
  const ref = useRef<Mesh>();

  useEffect(() => {
    if (ref.current) {
      ref.current.material.map = props.map;
      ref.current.material.needsUpdate = true;
    }
  }, [props]);
  return (
    <mesh {...props} ref={ref}>
      <planeBufferGeometry args={[2.44, 1.4, 1]} />
      <meshStandardMaterial />
    </mesh>
  );
};
const MonitorScreenTop: React.FunctionComponent<Screen> = (props) => {
  const ref = useRef<Mesh>();
  useEffect(() => {
    if (ref.current) {
      ref.current.material.map = props.map;
      ref.current.material.needsUpdate = true;
    }
  }, [props]);
  return (
    <group rotation={[0, Math.PI / 2, 0]}>
      <mesh {...props} ref={ref}>
        <boxGeometry args={[2.44, 1.4, 0.01]} />
        <meshStandardMaterial />
      </mesh>
    </group>
  );
};
export { MonitorScreen, MonitorScreenTop };
