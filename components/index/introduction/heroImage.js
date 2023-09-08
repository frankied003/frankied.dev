import React, { useEffect } from "react";

/**
 * Library imports.
 */
import Image from "next/image";

export default function HeroImage() {
  /**
   * Handle mouse movements for image.
   */
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;

    const handleMouseMove = (e) => {
      if (isMobile) return;

      const winWidth = window.innerWidth;
      const winHeight = window.innerHeight;
      const mouseX = e.clientX - winWidth / 2;
      const mouseY = e.clientY - winHeight / 2;

      const depth1 = 0.01;
      const depth2 = 0.03;
      const depth3 = 0.05;

      const image1 = document.querySelector(".image-1");
      const image2 = document.querySelector(".image-2");
      const image3 = document.querySelector(".image-3");

      if (image1 && image2 && image3) {
        gsap.to(image1, {
          duration: 0.5,
          x: mouseX * depth1,
          y: mouseY * depth1,
          ease: "power2.out",
        });

        gsap.to(image2, {
          duration: 0.5,
          x: mouseX * depth2,
          y: mouseY * depth2,
          ease: "power2.out",
        });

        gsap.to(image3, {
          duration: 0.5,
          x: mouseX * depth3,
          y: mouseY * depth3,
          ease: "power2.out",
        });
      }
    };

    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, []);

  return (
    <div className="flex-image-container">
      <div className="image-container">
        <Image
          src="/assets/introduction/frankied_bg.webp"
          fill
          alt="Frankied.dev Background"
          className="image image-1"
          priority
        />
        <Image
          src="/assets/introduction/frankied_char.webp"
          fill
          alt="Frankied.dev Character"
          className="image image-2"
          priority
        />
        <Image
          src="/assets/introduction/frankied_laptop.webp"
          fill
          alt="Frankied.dev Laptop"
          className="image image-3"
          priority
        />
      </div>
    </div>
  );
}
