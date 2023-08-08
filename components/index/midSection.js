import Image from "next/image";
import React, { useEffect, useRef } from "react";

export default function MidSection() {
  const midSectionRef = useRef(null);

  useEffect(() => {
    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: midSectionRef.current,
        scrub: 1,
        start: "top bottom",
        end: "bottom top",
        //   markers: true,
      },
    });

    scrollTl.to(midSectionRef.current.querySelector(".image-container"), {
      y: "-10%",
    });
  }, []);

  return (
    <div className="mid-section" ref={midSectionRef}>
      <div className="image-container">
        <Image src="/assets/computerPlans.png" fill />
      </div>
    </div>
  );
}
