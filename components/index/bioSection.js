import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

const topicsObj = [
  {
    number: "16",
    title: "MiniGames",
    src: "/assets/bioSection/minigames.webp",
    description:
      "At 16, I first started out making simple games in Java, like pong, or snake. The fun stuff.",
  },
  {
    number: "17",
    title: "Sneakers",
    src: "/assets/bioSection/sneakers.webp",
    description:
      "At 17, I get into reselling sneakers and learned most of my skills through creating sneaker bots.",
  },
  {
    number: "21",
    title: "NFTs",
    src: "/assets/bioSection/nfts.webp",
    description:
      "At 21, I decided to take my skills into a new industry - the blockchain.",
  },
];

/**
 * Components imports.
 */
import Topic from "./bioSection/topic";

export default function BioSection() {
  const bioSectionContainerRef = useRef(null);
  const descriptionRef = useRef(null);

  /**
   * Set the first active hover to the first index in topicsObj.
   * In this case, that is MiniGames.
   */
  const [activeTopic, setActiveTopic] = useState(topicsObj[0]);

  /**
   * Animation states for changing images.
   */
  const [imageChanging, setImageChanging] = useState(false);
  const imageSectionRef = useRef(null);

  /**
   * Function for gsap change image and description.
   * @param {state} setState
   * @param {activeTopic} value
   */
  const onHoverChange = (setState, value) => {
    if (!imageChanging && value != activeTopic) {
      setImageChanging(true);

      /**
       * For image changing.
       */
      const tl1 = gsap.timeline();
      tl1
        .fromTo(
          imageSectionRef.current,
          { autoAlpha: 1, x: 0, rotate: 0 },
          { autoAlpha: 0, x: "-25%", rotate: -10 }
        )
        .fromTo(
          descriptionRef.current,
          { autoAlpha: 1, x: 0 },
          { autoAlpha: 0, x: "50%" },
          "<"
        )
        .call(
          () => {
            setState(value);
            setImageChanging(false);
          },
          null,
          null,
          1
        )
        .fromTo(
          imageSectionRef.current,
          { autoAlpha: 0, x: "-25%", rotate: -10 },
          {
            autoAlpha: 1,
            x: 0,
            rotate: 0,
            duration: 0.6,
            delay: 0.3,
            ease: "back.out(1.7)",
          }
        )
        .fromTo(
          descriptionRef.current,
          { autoAlpha: 0, x: "50%" },
          { autoAlpha: 1, x: 0, ease: "back.out(1.7)", delay: 0.1 },
          "<"
        );
    }
  };

  /**
   * GSAP animations for scrolling into the section.
   */
  useEffect(() => {
    // Scroll animation
    gsap.registerPlugin(ScrollTrigger);

    let mm = gsap.matchMedia();

    mm.add("(min-width: 912px)", () => {
      /**
       * Top of section parallax effect.
       */
      const scrollPageTl = gsap.timeline({
        scrollTrigger: {
          trigger: bioSectionContainerRef.current,
          scrub: 1,
          start: "top bottom",
          end: "75% bottom",
          //   markers: true,
        },
      });
      scrollPageTl.to(bioSectionContainerRef.current, {
        y: "-10%",
        ease: "none",
      });

      /**
       * Leaving page animations. (Scrolling to next section)
       */
      const leavingPageTl = gsap.timeline({
        scrollTrigger: {
          trigger: bioSectionContainerRef.current,
          scrub: 1,
          start: "35% top",
          end: "bottom top",
          toggleActions: "play none none reverse",
          // markers: true,
        },
      });
      leavingPageTl
        .to(bioSectionContainerRef.current.querySelector(".image-container"), {
          rotate: -20,
        })
        .to(
          bioSectionContainerRef.current.querySelector(".project-description"),
          {
            x: "10%",
          },
          "<"
        );
    });

    let ctx = gsap.context(() => {
      /**
       * Loading animations into the screen.
       */
      const loadingScrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: bioSectionContainerRef.current,
          start: "35% bottom",
          toggleActions: "play none none reverse",
          //   markers: true,
        },
      });
      loadingScrollTl
        .fromTo(
          bioSectionContainerRef.current.querySelector(".top"),
          { autoAlpha: 0, y: 25 },
          { autoAlpha: 1, y: 0 }
        )
        .fromTo(
          bioSectionContainerRef.current.querySelectorAll(".topic .title"),
          {
            clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
            y: 50,
            skewY: 3,
          },
          {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            y: 0,
            skewY: 0,
            duration: 1,
            stagger: 0.1,
          },
          "<"
        )
        .fromTo(
          bioSectionContainerRef.current.querySelector(".project-description"),
          { autoAlpha: 0, x: "50%" },
          { autoAlpha: 1, x: 0, ease: "back.out(1.7)" },
          "<0.5"
        )
        .fromTo(
          bioSectionContainerRef.current.querySelector(".image-container"),
          { autoAlpha: 0, x: "-25%", rotate: -10 },
          {
            autoAlpha: 1,
            x: 0,
            rotate: 0,
            duration: 0.6,
            ease: "back.out(1.7)",
          },
          "<0.5"
        );
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="bio-section-container" ref={bioSectionContainerRef}>
      <div className="image-container">
        <Image
          src={activeTopic.src}
          fill
          className="image"
          alt={`Frankied.dev experience in ${activeTopic.title}`}
          ref={imageSectionRef}
        />
      </div>
      <div className="content">
        <p className="description top">
          I started developing when I was <strong>16 years old.</strong>{" "}
          Throughout the years, I've never stopped learning{" "}
          <strong>new technologies</strong> in <strong>new industries.</strong>
        </p>
        <div className="topics-container">
          {topicsObj.map((topic) => (
            <Topic
              activeTopic={activeTopic.title}
              onClick={() => onHoverChange(setActiveTopic, topic)}
              number={topic.number}
              title={topic.title}
              index={topicsObj.indexOf(topic)}
              key={topicsObj.indexOf(topic)}
            />
          ))}
        </div>
        <div className="project-description" ref={descriptionRef}>
          <p className="description bottom">{activeTopic.description}</p>
        </div>
      </div>
    </div>
  );
}
