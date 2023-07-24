/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/assets/threeJs/macbook8.glb"
  );
  const { actions } = useAnimations(animations, group);
  const scroll = useScroll();

  useFrame(() => {
    actions.pan.clampWhenFinished = true;
    actions.pan.play();
    actions.open.play();
    actions.pan.time = scroll.offset * actions.pan._clip.duration;
    actions.open.time = scroll.offset * actions.open._clip.duration;
    actions.pan.clampWhenFinished = true;
    actions.open.clampWhenFinished = true;
  });

  return (
    <group ref={group} {...props} dispose={null} scale={[10, 10, 10]}>
      <group name="Scene">
        <group name="MacGroup" scale={[0.16, 0.14, 0.24]}>
          <group
            name="high_bottom"
            rotation={[Math.PI / 2, 0, 0]}
            scale={[6.25, 4.167, 7.143]}
          >
            <mesh
              name="mesh"
              castShadow
              receiveShadow
              geometry={nodes.mesh.geometry}
              material={materials.mlack}
            />
            <mesh
              name="mesh_1"
              castShadow
              receiveShadow
              geometry={nodes.mesh_1.geometry}
              material={materials.frame}
            />
            <mesh
              name="mesh_2"
              castShadow
              receiveShadow
              geometry={nodes.mesh_2.geometry}
              material={materials.magb}
            />
            <mesh
              name="mesh_3"
              castShadow
              receiveShadow
              geometry={nodes.mesh_3.geometry}
              material={materials.gold}
            />
            <mesh
              name="mesh_4"
              castShadow
              receiveShadow
              geometry={nodes.mesh_4.geometry}
              material={materials.chrome}
            />
            <mesh
              name="mesh_5"
              castShadow
              receiveShadow
              geometry={nodes.mesh_5.geometry}
              material={materials.keys}
            />
            <mesh
              name="mesh_6"
              castShadow
              receiveShadow
              geometry={nodes.mesh_6.geometry}
              material={materials.rubba}
            />
          </group>
          <group
            name="high_top"
            position={[0, 0.757, 0.023]}
            rotation={[-Math.PI, 0, 0]}
            scale={[6.25, 7.143, 4.167]}
          >
            <mesh
              name="mesh002"
              castShadow
              receiveShadow
              geometry={nodes.mesh002.geometry}
              material={materials.frame}
            />
            <mesh
              name="mesh002_1"
              castShadow
              receiveShadow
              geometry={nodes.mesh002_1.geometry}
              material={materials.chrome}
            />
            <mesh
              name="mesh002_2"
              castShadow
              receiveShadow
              geometry={nodes.mesh002_2.geometry}
              material={materials.rubba}
            />
            <mesh
              name="mesh002_3"
              castShadow
              receiveShadow
              geometry={nodes.mesh002_3.geometry}
              material={materials.velvet}
            />
            <mesh
              name="mesh002_4"
              castShadow
              receiveShadow
              geometry={nodes.mesh002_4.geometry}
              material={materials.scr}
            />
            <mesh
              name="mesh002_5"
              castShadow
              receiveShadow
              geometry={nodes.mesh002_5.geometry}
              material={materials.miscb}
            />
            <mesh
              name="mesh002_6"
              castShadow
              receiveShadow
              geometry={nodes.mesh002_6.geometry}
              material={materials["Basic Glass"]}
            />
            <mesh
              name="mesh002_7"
              castShadow
              receiveShadow
              geometry={nodes.mesh002_7.geometry}
              material={materials.bezel}
            />
            <mesh
              name="mesh002_8"
              castShadow
              receiveShadow
              geometry={nodes.mesh002_8.geometry}
              material={materials["cam glass"]}
            />
            <mesh
              name="mesh002_9"
              castShadow
              receiveShadow
              geometry={nodes.mesh002_9.geometry}
              material={materials.sensa}
            />
            <mesh
              name="mesh002_10"
              castShadow
              receiveShadow
              geometry={nodes.mesh002_10.geometry}
              material={materials["cam-mat"]}
            />
            <mesh
              name="mesh002_11"
              castShadow
              receiveShadow
              geometry={nodes.mesh002_11.geometry}
              material={materials.cam}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/assets/threeJs/macbook8.glb");