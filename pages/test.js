import { Suspense, useRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Stage, ScrollControls } from "@react-three/drei";

import Model from "../components/threeJs/model";
import Home from ".";
import ScrollAnimationCtaCanvas from "../components/threeJs/scrollAnimationsCtaCanvas";
import ReverseModel from "../components/threeJs/reverseModel";

export default function Test() {
  const [startAnimations, setStartAnimations] = useState(false);
  const [revealWebsite, setRevealWebsite] = useState(false);
  const [revealComputer, setRevealComputer] = useState(false);
  const canvasContainerRef = useRef(null);

  useEffect(() => {
    const titleTl = gsap.timeline();
    titleTl
      .fromTo(
        canvasContainerRef.current.querySelector(".title"),
        {
          width: 0,
        },
        {
          width: "100%",
          duration: 2,
          delay: 1,
        }
      )
      .fromTo(
        canvasContainerRef.current.querySelector(".title"),
        {
          "border-right-color": "rgba(0,0,0,0.75)",
          paddingRight: 0,
        },
        {
          "border-right-color": "rgba(0,0,0,0)",
          duration: 0.5,
          repeat: 8,
          ease: "none",
          yoyo: true,
        },
        "<"
      )
      .to(
        canvasContainerRef.current.querySelector(".title"),
        {
          width: 0,
          duration: 1,
          delay: 2.5,
        },
        "<"
      );
    const timeout = setTimeout(() => {
      setStartAnimations(true);
    }, 4500);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      {revealWebsite ? (
        revealComputer ? (
          <Canvas style={{ position: "absolute" }} shadows camera={{ fov: 50 }}>
            <Stage
              preset="rembrandt"
              intensity={1}
              environment="sunset"
            ></Stage>
            <ScrollControls pages={2} damping={0.25}>
              <ReverseModel />
            </ScrollControls>
          </Canvas>
        ) : (
          <Home setRevealComputer={() => setRevealComputer(true)} />
        )
      ) : (
        <div className="canvas-container" ref={canvasContainerRef}>
          <div className="title-container">
            <p className="title">Frankied.dev</p>
          </div>
          <div className="absolute-container">
            <ScrollAnimationCtaCanvas startAnimations={startAnimations} />
          </div>
          <Canvas style={{ position: "absolute" }} shadows camera={{ fov: 50 }}>
            <Stage
              preset="rembrandt"
              intensity={1}
              environment="sunset"
            ></Stage>
            <ScrollControls pages={2} damping={0.25}>
              <Model
                revealWebsite={() => setRevealWebsite(true)}
                startAnimations={startAnimations}
              />
            </ScrollControls>
          </Canvas>
        </div>
      )}
    </>
  );
}
