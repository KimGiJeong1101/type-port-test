import "./App.css";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Skill from "./components/Skill";
import ProjectFrame from "./components/ProjectFrame";
import Career from "./components/Career";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <>
      <Header></Header>

      <AboutMe></AboutMe>

      <Skill></Skill>

      <ProjectFrame></ProjectFrame>

      <Career></Career>

      <Footer></Footer>
    </>
  );
};

export default App;
