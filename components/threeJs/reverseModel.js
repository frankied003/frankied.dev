/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect, useState } from "react";
import { useGLTF, useAnimations, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function ReverseModel(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/assets/threeJs/macbook.glb"
  );
  const { actions } = useAnimations(animations, group);
  const scroll = useScroll();

  const vec = new THREE.Vector3();

  useEffect(() => {
    gsap.timeline().to(group.current.position, {
      x: 0,
      y: 0,
      z: 3,
      duration: 2,
      delay: 1,
    });
    actions.pan.startAt(actions.pan._clip.duration);
    actions.open.startAt(actions.open._clip.duration);
  }, [props]);

  // Decide the point at which you want the pan and open animations to stop. Here it's set at 80% of the scroll offset.
  const animationEndOffset = 0.98;

  /**
   * Animation of position back to center
   */
  useFrame((state) => {
    if (scroll.offset < animationEndOffset) {
      actions.pan.time =
        actions.pan._clip.duration - scroll.offset * actions.pan._clip.duration;
      actions.open.time =
        actions.open._clip.duration -
        scroll.offset * actions.open._clip.duration;
      actions.pan.play();
      actions.open.play();
    } else {
      actions.pan.paused = true;
      actions.open.paused = true;
    }
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      scale={[10, 10, 10]}
      position={[0, 0, 6]}
    >
      {/* <CameraControls ref={cameraControlsRef} /> */}
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
              material={materials.rubba}
            />
            <mesh
              name="mesh002_2"
              castShadow
              receiveShadow
              geometry={nodes.mesh002_2.geometry}
              material={materials.velvet}
            />
            <mesh
              name="mesh002_3"
              castShadow
              receiveShadow
              geometry={nodes.mesh002_3.geometry}
              material={materials.scr}
            />
            <mesh
              name="mesh002_4"
              castShadow
              receiveShadow
              geometry={nodes.mesh002_4.geometry}
              material={materials.miscb}
            />
            <mesh
              name="mesh002_5"
              castShadow
              receiveShadow
              geometry={nodes.mesh002_5.geometry}
              material={materials["Basic Glass"]}
            />
            <mesh
              name="mesh002_6"
              castShadow
              receiveShadow
              geometry={nodes.mesh002_6.geometry}
              material={materials.bezel}
            />
            <mesh
              name="mesh002_7"
              castShadow
              receiveShadow
              geometry={nodes.mesh002_7.geometry}
              material={materials["cam glass"]}
            />
            <mesh
              name="mesh002_8"
              castShadow
              receiveShadow
              geometry={nodes.mesh002_8.geometry}
              material={materials.sensa}
            />
            <mesh
              name="mesh002_9"
              castShadow
              receiveShadow
              geometry={nodes.mesh002_9.geometry}
              material={materials["cam-mat"]}
            />
            <mesh
              name="mesh002_10"
              castShadow
              receiveShadow
              geometry={nodes.mesh002_10.geometry}
              material={materials.cam}
            />
            <mesh
              name="Text001"
              castShadow
              receiveShadow
              geometry={nodes.Text001.geometry}
              material={materials.chrome}
              position={[0, 0.106, -0.009]}
              rotation={[-Math.PI / 2, 0, 0]}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/assets/threeJs/macbook.glb");
