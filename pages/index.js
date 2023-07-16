import ComingSoon from "../components/comingSoon";
import Introduction from "../components/index/introduction";
import MyProjects from "../components/index/myProjects";
import Header from "../partials/header";

export default function Home() {
  return (
    <main className="home">
      <div className="scroll-content">
        <Introduction />
        <MyProjects />
      </div>
    </main>
  );
}
