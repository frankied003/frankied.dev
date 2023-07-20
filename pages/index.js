import ContactMe from "../components/index/contactMe";
import Footer from "../components/index/footer";
import Introduction from "../components/index/introduction";
import MyProjects from "../components/index/myProjects";
import MySkills from "../components/index/mySkills";

export default function Home() {
  return (
    <main className="home">
      <Introduction />
      <MyProjects />
      <MySkills />
      <ContactMe />
      <Footer />
    </main>
  );
}
