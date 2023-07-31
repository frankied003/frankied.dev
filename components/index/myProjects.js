import React, { useState, useEffect, useRef } from "react";
import Project from "./myProjects/project";

export default function MyProjects(props) {
  /**
   * Reference for gsap animations.
   */
  const projectsContainerRef = useRef(null);

  /**
   * GSAP animations.
   */
  useEffect(() => {
    // Scroll animation
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      const topRowScrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: projectsContainerRef.current,
          scrub: 1,
          start: "top bottom",
          end: "90% bottom",
          // markers: true,
        },
      });

      topRowScrollTl
        .fromTo(
          projectsContainerRef.current.querySelector(".my-projects-title"),
          {
            width: 0,
          },
          {
            width: "100%",
            duration: 3,
          },
          "<"
        )
        .fromTo(
          projectsContainerRef.current.querySelector(".my-projects-title"),
          {
            "border-right-color": "rgba(0,0,0,0.75)",
          },
          {
            "border-right-color": "rgba(0,0,0,0)",
            duration: 0.5,
            repeat: 5,
            ease: "none",
            yoyo: true,
          },
          "<"
        )
        .fromTo(
          projectsContainerRef.current.querySelector(
            ".projects-scroll-container"
          ),
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
            duration: 3,
          },
          "<"
        )
        .fromTo(
          projectsContainerRef.current.querySelector(
            ".contributions-container"
          ),
          {
            autoAlpha: 0,
            y: 200,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 3,
          },
          "<"
        );
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="my-projects-container" ref={projectsContainerRef}>
      <div className="title-container">
        <p className="title my-projects-title">My Projects.</p>
      </div>
      <div className="flex-container">
        <div className="projects-scroll-container">
          <Project
            index={0}
            classIndex={"one"}
            title={"Isekai Meta / Studio Sekai"}
            description={
              "Isekai Meta is a story and community-driven, hand-drawn NFT collection and metaverse brand that has been summoned on the Ethereum blockchain."
            }
            skills={[
              "React.JS",
              "JavaScript",
              "Solidity",
              "Python",
              "Vercel",
              "Digital Ocean",
            ]}
            imageSrc={"/assets/projects/isekaimeta1.png"}
          />
          <Project
            index={1}
            classIndex={"two"}
            title={"onBoard LLC"}
            description={
              "The very first modular surfboard that fits in a carry-on suitcase to improve board performance and decrease travel costs and struggle."
            }
            skills={["React.JS", "JavaScript", "Vercel"]}
            imageSrc={"/assets/projects/onBoard.png"}
          />
          <Project
            index={2}
            classIndex={"three"}
            title={"Voleious"}
            description={
              "Voleious is an online chat and interaction social media app that encourages discussions of any topic. Our goal is to get people discussing, so start discussing!"
            }
            skills={["React Native", "Postgress", "Firebase", "Digital Ocean"]}
            imageSrc={"/assets/projects/voleious.png"}
            contain
          />
          <Project
            index={3}
            classIndex={"four"}
            title={"DigiSevn Delivery System"}
            description={
              "DigiSevn Delivery System is a SAAS enterprise that provides software solutions for commercial and residential deliveries of Oil."
            }
            skills={[
              "React Native",
              "JavaScript",
              "Java",
              "Postgress",
              "Supabase",
            ]}
            imageSrc={"/assets/projects/digiSevn.png"}
          />
        </div>
        <div className="contributions-container">
          <div className="contributions-title-container">
            <p className="title">Contributions.</p>
          </div>
          <div className="scroll-container">
            <p className="description desc-one">
              Ex-CoFounder and CTO. Recruited a team of 2+ developers, oversaw
              and participated in the art generation, smart contract
              development, and website creation.
            </p>
            <p className="description desc-two">
              Main developer. Developed and designed a fully-functional,
              pleasing, website including a dynamic "Design your Board", page
              using React and GSAP.
            </p>
            <p className="description desc-three">
              Founder and app creator. Developed a fully functionality mobile
              app from idea creation to business plan, down to the code and
              infrastructure of the application .
            </p>
            <p className="description desc-four">
              Mobile developer. Created and designed an online / offline React
              Native application that is curated for drivers of oil companies to
              deliver oil.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
