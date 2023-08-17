import react, { useEffect, useRef, useState } from "react";

/**
 * Components imports.
 */
import Introduction from "../components/index/introduction";
import MyProjects from "../components/index/myProjects";
import BioSection from "../components/index/bioSection";
import ScrollText from "../components/index/scrollText";
import MySkills from "../components/index/mySkills";
import Footer from "../components/index/footer";
import Header from "../partials/header";
import Background from "../partials/background";
import Menu from "../components/header/menu";

/**
 * Animation imports.
 * (Used a separate file here since the gsap code was so long
 * and redundant).
 */
import { useScrollAnimations } from "../components/animations/main";
import MidSection from "../components/index/midSection";

export default function Home(props) {
  const mainContainerRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useScrollAnimations(mainContainerRef, props.setRevealComputer);

  return (
    <main className="home" ref={mainContainerRef}>
      <Background />
      <Header setMenuOpen={() => setMenuOpen(true)} />
      <Menu setMenuClosed={() => setMenuOpen(false)} menuOpen={menuOpen} />
      <Introduction />
      <BioSection />
      <ScrollText
        text1={"My Projects - My Work - My Projects - My Work - My Projects -"}
        text2={"My Work • My Projects • My Work • My Projects • My Work •"}
      />
      <MyProjects parentRef={mainContainerRef} />
      {/* <MidSection /> */}
      <ScrollText
        text1={
          "My Skills - My Passions - My Skills - My Passions - My Skills -"
        }
        text2={
          "My Passions • My Skills • My Passions • My Skills • My Passions -"
        }
        opposite
      />
      <MySkills />
      <Footer />
    </main>
  );
}
