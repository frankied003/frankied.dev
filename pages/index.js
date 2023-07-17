import ComingSoon from "../components/comingSoon";
import ContactMe from "../components/index/contactMe";
import Footer from "../components/index/footer";
import Introduction from "../components/index/introduction";
import MyProjects from "../components/index/myProjects";
import MySkills from "../components/index/mySkills";
import Header from "../partials/header";

export default function Home() {
  return (
    <main className="home">
      <div className="scroll-content">
        <Introduction />
        <MyProjects />
        <MySkills />
        <ContactMe />
        <Footer />
      </div>
    </main>
  );
}
