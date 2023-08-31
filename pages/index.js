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
import Contact from "../components/contact";

export default function Home(props) {
  const mainContainerRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <main className="home" ref={mainContainerRef}>
      <Background />
      <Header
        setMenuOpen={() => setMenuOpen(true)}
        setContactOpen={() => setContactOpen(true)}
        setContactClose={() => setContactOpen(false)}
        contactOpened={contactOpen}
      />
      <Menu setMenuClosed={() => setMenuOpen(false)} menuOpen={menuOpen} />
      <Introduction />
      <BioSection />
      <ScrollText
        top
        text1={
          "My Projects - My Work - My Projects - My Work - My Projects - My Work - My Projects - My Work - My Projects -"
        }
        text2={
          "My Work • My Projects • My Work • My Projects • My Work • My Projects • My Work • My Projects • My Work •"
        }
      />
      <MyProjects parentRef={mainContainerRef} />
      <ScrollText
        bottom
        text1={
          "My Skills - My Passions - My Skills - My Passions - My Skills - My Passions - My Skills - My Passions - My Skills -"
        }
        text2={
          "My Passions • My Skills • My Passions • My Skills • My Passions • My Skills • My Passions • My Skills • My Passions •"
        }
        opposite
      />
      <MySkills />
      <Footer />
      {contactOpen ? (
        <Contact setContactClosed={() => setContactOpen(false)} />
      ) : null}
    </main>
  );
}
