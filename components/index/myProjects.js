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

    let mm = gsap.matchMedia();
    mm.add("(min-width: 912px)", () => {
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
            projectsContainerRef.current.querySelector(
              ".project-container.one"
            ),
            {
              y: "-10%",
              delay: 0.35,
              opacity: 0,
              scale: 0.9,
              duration: 1.5,
            }
          )
          .to(
            projectsContainerRef.current.querySelector(
              ".project-container.two"
            ),
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
            projectsContainerRef.current.querySelector(
              ".project-container.two"
            ),
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
            projectsContainerRef.current.querySelector(
              ".project-container.four"
            ),
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

          // Five.
          .to(
            projectsContainerRef.current.querySelector(
              ".project-container.four"
            ),
            {
              y: "-325%",
              delay: 0.35,
              opacity: 0,
              scale: 0.9,
              duration: 1.5,
            }
          )
          .to(
            projectsContainerRef.current.querySelector(
              ".project-container.five"
            ),
            {
              y: "-420%",
              duration: 1.5,
            },
            "<"
          )
          .to(
            projectsContainerRef.current.querySelector(".scroll-container"),
            {
              scrollTo: {
                y: projectsContainerRef.current.querySelector(".desc-five"),
              },
              duration: 1.5,
            },
            "<"
          )
          .to(
            projectsContainerRef.current.querySelector(".desc-four"),
            {
              opacity: 0.1,
              duration: 1.5,
            },
            "<"
          )
          .to(
            projectsContainerRef.current.querySelector(".desc-five"),
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
    });
  }, []);

  return (
    <div className="my-projects-container" ref={projectsContainerRef}>
      <div className="flex-container">
        <div className="projects-scroll-container">
          <Project
            index={0}
            classIndex={"one"}
            title={"Isekai / Studio Sekai"}
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
            link={"https://isekaimeta.com"}
            imageSrc={"/assets/projects/isekaimeta.webp"}
          />
          <Project
            index={1}
            classIndex={"two"}
            title={"Rosentica Stardust Gen"}
            description={
              "The Gateway to Starfall Chronicles Universe, the Soft-Staking Platform for Travelers, the Collection Gallery, where your Starfall Travelers collect Stardust for you every 24 hours."
            }
            skills={["React.JS", "JavaScript", "Vercel", "Supabase", "Python"]}
            link={"https://stardust.rosentica.jp"}
            imageSrc={"/assets/projects/rosentica.jpeg"}
          />
          <Project
            index={2}
            classIndex={"three"}
            title={"onBoard LLC"}
            description={
              "The very first modular surfboard that fits in a carry-on suitcase to improve board performance and decrease travel costs and struggle."
            }
            skills={["React.JS", "JavaScript", "Vercel"]}
            link={"https://carryonboard.com"}
            imageSrc={"/assets/projects/onBoard.webp"}
          />
          <Project
            index={3}
            classIndex={"four"}
            title={"Voleious"}
            description={
              "Voleious is an online chat and interaction social media app that encourages discussions of any topic. Our goal is to get people discussing, so start discussing!"
            }
            skills={["React Native", "Postgress", "Firebase", "Digital Ocean"]}
            link={"https://voleious.com"}
            imageSrc={"/assets/projects/voleious.webp"}
            disabled
            contain
          />
          <Project
            index={4}
            classIndex={"five"}
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
            link={"https://digisevn.com"}
            imageSrc={"/assets/projects/digiSevn.webp"}
            disabled
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
              Consultant. Developed a soft staking, gamified platform, that
              allows holders of nfts to generate points and use those points for
              items.
            </p>
            <p className="description desc-three">
              Main developer. Developed and designed a fully-functional,
              pleasing, website including a dynamic "Design your Board", page
              using React and GSAP.
            </p>
            <p className="description desc-four">
              Founder and app creator. Developed a fully functionality mobile
              app from idea creation to business plan, down to the code and
              infrastructure of the application .
            </p>
            <p className="description desc-five">
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
