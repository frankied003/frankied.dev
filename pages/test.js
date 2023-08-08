import { Suspense, useRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Stage, ScrollControls } from "@react-three/drei";

import Model from "../components/threeJs/model";
import Home from ".";
import ScrollAnimationCtaCanvas from "../components/threeJs/scrollAnimationsCtaCanvas";
import ReverseModel from "../components/threeJs/reverseModel";
import Contact from "../components/contact";

export default function Test() {
  const [startAnimations, setStartAnimations] = useState(false);
  const [revealWebsite, setRevealWebsite] = useState(true);
  const [revealComputer, setRevealComputer] = useState(true);

  /**
   * For contact page.
   */
  const [revealContact, setRevealContact] = useState(false);
  const canvasContainerRef = useRef(null);

  /**
   * Animation for intro.
   */
  useEffect(() => {
    if (canvasContainerRef.current) {
      const titleTl = gsap.timeline();
      titleTl
        .fromTo(
          canvasContainerRef.current?.querySelector(".title"),
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
          canvasContainerRef.current?.querySelector(".title"),
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
          canvasContainerRef.current?.querySelector(".title"),
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
    }
  }, [canvasContainerRef.current]);

  return (
    <>
      {revealWebsite ? (
        revealComputer ? (
          <div className="canvas-container">
            <Canvas
              style={{
                position: "absolute",
                zIndex: 0,
              }}
              shadows
              camera={{ fov: 50 }}
            >
              <Stage
                preset="rembrandt"
                intensity={1}
                environment="sunset"
              ></Stage>
              <ScrollControls pages={2} damping={0.25}>
                <ReverseModel
                  revealWebsite={() => {
                    setRevealComputer(false);
                  }}
                  revealContact={() => {
                    setRevealContact(true);
                  }}
                />
              </ScrollControls>
            </Canvas>
            <Contact revealContact={revealContact} />
          </div>
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
