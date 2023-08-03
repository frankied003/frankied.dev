import React, { useEffect, useRef } from "react";

export default function Background() {
  const backgroundRef = useRef(null);

  useEffect(() => {
    gsap.to(backgroundRef.current, { opacity: 0, delay: 1, duration: 3 });
  }, []);

  return <div className="background-container" ref={backgroundRef} />;
}
