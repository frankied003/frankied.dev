import { Suspense, useRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Stage, ScrollControls } from "@react-three/drei";

/**
 * Components imports.
 */
import Model from "../components/threeJs/model";
import ScrollAnimationCtaCanvas from "../components/threeJs/scrollAnimationsCtaCanvas";

/**
 * Pages imports.
 */
import Home from "./home";

/**
 * Metadata imports.
 */
import Metadata from "../components/metadata";

export default function Index() {
  const [startAnimations, setStartAnimations] = useState(false);
  const [revealWebsite, setRevealWebsite] = useState(false);

  /**
   * For contact page.
   */
  const canvasContainerRef = useRef(null);

  /**
   * Animation for intro.
   */
  useEffect(() => {
    /**
     * If the window width is less than 768 pixels, assume it's mobile
     */
    if (window.innerWidth < 768) {
      setRevealWebsite(true);
    }

    if (canvasContainerRef.current) {
      const titleTl = gsap.timeline();
      titleTl
        .fromTo(
          canvasContainerRef.current?.querySelector(".title"),
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
            duration: 0.2,
          }
        )
        .fromTo(
          canvasContainerRef.current?.querySelector(".title"),
          {
            width: 0,
          },
          {
            width: "100%",
            duration: 1.5,
            delay: 1,
          }
        )
        .to(
          canvasContainerRef.current?.querySelector(".title"),
          {
            width: 0,
            duration: 1,
            delay: 1.8,
            "border-right-color": "rgba(0,0,0,0)",
          },
          "<"
        );
      const timeout = setTimeout(() => {
        setStartAnimations(true);
      }, 3500);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, []);

  return (
    <>
      <Metadata />
      {revealWebsite ? (
        <Home />
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
