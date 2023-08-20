import React, { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    /**
     * For positioning of the cursor.
     */
    if (cursorRef.current == null || cursorRef == null) return;
    document.addEventListener("mousemove", (e) => {
      if (cursorRef.current == null) return;
      cursorRef.current.setAttribute(
        "style",
        "top: " + e.clientY + "px; left: " + e.clientX + "px;"
      );
    });

    /**
     * For clicking of the cursor.
     */
    document.addEventListener("click", () => {
      if (cursorRef.current == null) return;
      cursorRef.current.classList.add("expand");
      setTimeout(() => {
        if (cursorRef.current == null) return;
        cursorRef.current.classList.remove("expand");
      }, 500);
    });
  }, []);

  return <div className="cursor" ref={cursorRef}></div>;
}
