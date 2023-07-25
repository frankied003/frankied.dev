import ContactMe from "../components/index/contactMe";
import Footer from "../components/index/footer";
import Introduction from "../components/index/introduction";
import MyProjects from "../components/index/myProjects";
import MySkills from "../components/index/mySkills";
import Header from "../partials/header";

export default function Home() {
  return (
    <main className="home">
      <Header />
      <Introduction />
      <MyProjects />
      <MySkills />
      <ContactMe />
      <Footer />
    </main>
  );
}
