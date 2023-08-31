import React, { useState, useEffect, useRef } from "react";
import Project from "./myProjects/project";

export default function MyProjects(props) {
  /**
   * Reference for gsap animations.
   */
  const projectsContainerRef = useRef(null);

  /**
   * GSAP animations for desktop project section.
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

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: projectsContainerRef.current,
          scrub: 1,
          pin: true,
          start: "top top",
          end: "+=2500",
          // markers: true,
        },
      });

      topRowScrollTl
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

      scrollTl
        // The project scrolling.
        // Two.
        .to(
          projectsContainerRef.current.querySelector(".project-container.one"),
          {
            y: "-10%",
            delay: 0.35,
            opacity: 0,
            scale: 0.9,
            duration: 1.5,
          }
        )
        .to(
          projectsContainerRef.current.querySelector(".project-container.two"),
          {
            y: "-105%",
            duration: 1.5,
          },
          "<"
        )
        .to(
          projectsContainerRef.current.querySelector(".scroll-container"),
          {
            scrollTo: {
              y: projectsContainerRef.current.querySelector(".desc-two"),
            },
            duration: 1.5,
          },
          "<"
        )
        .to(
          projectsContainerRef.current.querySelector(".desc-one"),
          {
            opacity: 0.1,
            duration: 1.5,
          },
          "<"
        )
        .to(
          projectsContainerRef.current.querySelector(".desc-two"),
          {
            opacity: 1,
            duration: 1.5,
          },
          "<"
        )
        // Three.
        .to(
          projectsContainerRef.current.querySelector(".project-container.two"),
          {
            y: "-115%",
            delay: 0.35,
            opacity: 0,
            scale: 0.9,
            duration: 1.5,
          }
        )
        .to(
          projectsContainerRef.current.querySelector(
            ".project-container.three"
          ),
          {
            y: "-210%",
            duration: 1.5,
          },
          "<"
        )
        .to(
          projectsContainerRef.current.querySelector(".scroll-container"),
          {
            scrollTo: {
              y: projectsContainerRef.current.querySelector(".desc-three"),
            },
            duration: 1.5,
          },
          "<"
        )
        .to(
          projectsContainerRef.current.querySelector(".desc-two"),
          {
            opacity: 0.1,
            duration: 1.5,
          },
          "<"
        )
        .to(
          projectsContainerRef.current.querySelector(".desc-three"),
          {
            opacity: 1,
            duration: 1.5,
          },
          "<"
        )
        // Four.
        .to(
          projectsContainerRef.current.querySelector(
            ".project-container.three"
          ),
          {
            y: "-220%",
            delay: 0.35,
            opacity: 0,
            scale: 0.9,
            duration: 1.5,
          }
        )
        .to(
          projectsContainerRef.current.querySelector(".project-container.four"),
          {
            y: "-315%",
            duration: 1.5,
          },
          "<"
        )
        .to(
          projectsContainerRef.current.querySelector(".scroll-container"),
          {
            scrollTo: {
              y: projectsContainerRef.current.querySelector(".desc-four"),
            },
            duration: 1.5,
          },
          "<"
        )
        .to(
          projectsContainerRef.current.querySelector(".desc-three"),
          {
            opacity: 0.1,
            duration: 1.5,
          },
          "<"
        )
        .to(
          projectsContainerRef.current.querySelector(".desc-four"),
          {
            opacity: 1,
            duration: 1.5,
          },
          "<"
        )

        // gap at the end for more smoothness
        .to(projectsContainerRef.current, {
          duration: 0.5,
        });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="my-projects-container" ref={projectsContainerRef}>
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
            imageSrc={"/assets/projects/isekaimeta.webp"}
          />
          <Project
            index={1}
            classIndex={"two"}
            title={"onBoard LLC"}
            description={
              "The very first modular surfboard that fits in a carry-on suitcase to improve board performance and decrease travel costs and struggle."
            }
            skills={["React.JS", "JavaScript", "Vercel"]}
            imageSrc={"/assets/projects/onBoard.webp"}
          />
          <Project
            index={2}
            classIndex={"three"}
            title={"Voleious"}
            description={
              "Voleious is an online chat and interaction social media app that encourages discussions of any topic. Our goal is to get people discussing, so start discussing!"
            }
            skills={["React Native", "Postgress", "Firebase", "Digital Ocean"]}
            imageSrc={"/assets/projects/voleious.webp"}
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
            imageSrc={"/assets/projects/digiSevn.webp"}
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
