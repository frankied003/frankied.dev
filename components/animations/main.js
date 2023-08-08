import { useEffect } from "react";
import gsap from "gsap";

export function useScrollAnimations(mainContainerRef, setRevealComputer) {
  // useEffect(() => {
  //   // Scroll animation
  //   gsap.registerPlugin(ScrollTrigger);
  //   gsap.registerPlugin(ScrollToPlugin);
  //   let ctx = gsap.context(() => {
  //     const scrollTl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: mainContainerRef.current.querySelector(".main-flex-row"),
  //         scrub: 1,
  //         pin: true,
  //         start: "bottom bottom",
  //         end: "+=3500",
  //         // markers: true,
  //       },
  //       onComplete: setRevealComputer,
  //     });
  //     scrollTl
  //       // The project scrolling.
  //       // Two.
  //       .to(mainContainerRef.current.querySelector(".project-container.one"), {
  //         y: "-10%",
  //         delay: 0.35,
  //         opacity: 0,
  //         scale: 0.9,
  //         duration: 1.5,
  //       })
  //       .to(
  //         mainContainerRef.current.querySelector(".project-container.two"),
  //         {
  //           y: "-105%",
  //           duration: 1.5,
  //         },
  //         "<"
  //       )
  //       .to(
  //         mainContainerRef.current.querySelector(".scroll-container"),
  //         {
  //           scrollTo: {
  //             y: mainContainerRef.current.querySelector(".desc-two"),
  //           },
  //           duration: 1.5,
  //         },
  //         "<"
  //       )
  //       .to(
  //         mainContainerRef.current.querySelector(".desc-one"),
  //         {
  //           opacity: 0.1,
  //           duration: 1.5,
  //         },
  //         "<"
  //       )
  //       .to(
  //         mainContainerRef.current.querySelector(".desc-two"),
  //         {
  //           opacity: 1,
  //           duration: 1.5,
  //         },
  //         "<"
  //       )
  //       // Three.
  //       .to(mainContainerRef.current.querySelector(".project-container.two"), {
  //         y: "-115%",
  //         delay: 0.35,
  //         opacity: 0,
  //         scale: 0.9,
  //         duration: 1.5,
  //       })
  //       .to(
  //         mainContainerRef.current.querySelector(".project-container.three"),
  //         {
  //           y: "-210%",
  //           duration: 1.5,
  //         },
  //         "<"
  //       )
  //       .to(
  //         mainContainerRef.current.querySelector(".scroll-container"),
  //         {
  //           scrollTo: {
  //             y: mainContainerRef.current.querySelector(".desc-three"),
  //           },
  //           duration: 1.5,
  //         },
  //         "<"
  //       )
  //       .to(
  //         mainContainerRef.current.querySelector(".desc-two"),
  //         {
  //           opacity: 0.1,
  //           duration: 1.5,
  //         },
  //         "<"
  //       )
  //       .to(
  //         mainContainerRef.current.querySelector(".desc-three"),
  //         {
  //           opacity: 1,
  //           duration: 1.5,
  //         },
  //         "<"
  //       )
  //       // Four.
  //       .to(
  //         mainContainerRef.current.querySelector(".project-container.three"),
  //         {
  //           y: "-220%",
  //           delay: 0.35,
  //           opacity: 0,
  //           scale: 0.9,
  //           duration: 1.5,
  //         }
  //       )
  //       .to(
  //         mainContainerRef.current.querySelector(".project-container.four"),
  //         {
  //           y: "-315%",
  //           duration: 1.5,
  //         },
  //         "<"
  //       )
  //       .to(
  //         mainContainerRef.current.querySelector(".scroll-container"),
  //         {
  //           scrollTo: {
  //             y: mainContainerRef.current.querySelector(".desc-four"),
  //           },
  //           duration: 1.5,
  //         },
  //         "<"
  //       )
  //       .to(
  //         mainContainerRef.current.querySelector(".desc-three"),
  //         {
  //           opacity: 0.1,
  //           duration: 1.5,
  //         },
  //         "<"
  //       )
  //       .to(
  //         mainContainerRef.current.querySelector(".desc-four"),
  //         {
  //           opacity: 1,
  //           duration: 1.5,
  //         },
  //         "<"
  //       )
  //       // Page scrolling.
  //       // Animate of project section to collapse faster.
  //       .to(mainContainerRef.current.querySelector(".main-flex-row"), {
  //         x: "-50%",
  //         delay: 0.25,
  //         duration: 4,
  //       })
  //       .to(
  //         mainContainerRef.current.querySelector(".my-projects-title"),
  //         {
  //           x: "250%",
  //           duration: 4,
  //         },
  //         "<"
  //       )
  //       .to(
  //         mainContainerRef.current.querySelector(".projects-scroll-container"),
  //         {
  //           x: "20%",
  //           duration: 4,
  //         },
  //         "<"
  //       )
  //       // Skills page animation.
  //       .fromTo(
  //         mainContainerRef.current.querySelector(".my-skills-title"),
  //         {
  //           width: 0,
  //         },
  //         {
  //           width: "100%",
  //           duration: 2,
  //         },
  //         "<"
  //       )
  //       .fromTo(
  //         mainContainerRef.current.querySelector(".my-skills-title"),
  //         {
  //           "border-right-color": "rgba(0,0,0,0.75)",
  //         },
  //         {
  //           "border-right-color": "rgba(0,0,0,0)",
  //           duration: 0.5,
  //           repeat: 4,
  //           ease: "none",
  //           yoyo: true,
  //         },
  //         "<"
  //       )
  //       .fromTo(
  //         mainContainerRef.current.querySelectorAll(".skill-section .title"),
  //         {
  //           autoAlpha: 0,
  //           x: -50,
  //         },
  //         {
  //           autoAlpha: 1,
  //           x: 0,
  //           duration: 2,
  //           stagger: 0.2,
  //         },
  //         "<"
  //       )
  //       .fromTo(
  //         mainContainerRef.current.querySelectorAll(
  //           ".skills-container .skill-container"
  //         ),
  //         {
  //           autoAlpha: 0,
  //           x: -50,
  //         },
  //         {
  //           autoAlpha: 1,
  //           x: 0,
  //           duration: 2,
  //           stagger: 0.2,
  //         },
  //         "<0.5"
  //       )
  //       // Closing of computer.
  //       // Header shrinks as well as skills container page.
  //       .to(
  //         mainContainerRef.current.querySelector(
  //           ".my-skills-container .content"
  //         ),
  //         {
  //           scale: 0.75,
  //           opacity: 0,
  //           duration: 1,
  //         }
  //       )
  //       .to(
  //         mainContainerRef.current.querySelector(".header-container"),
  //         {
  //           scale: 0.75,
  //           opacity: 0,
  //           duration: 1,
  //         },
  //         "<"
  //       );
  //   });
  //   return () => ctx.revert();
  // }, []);
}
