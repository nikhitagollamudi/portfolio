import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Education from "./pages/Education/Education";
import Experience from "./pages/Experience/Experience";
import Projects from "./pages/Projects/Projects";
import Skills from "./pages/Skills/Skills";
import Contact from "./pages/Contact/Contact";
import './App.css'; // Make sure to include your CSS file for smooth scrolling
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./Context/ThemeContent";

function App() {
  const [theme]=useTheme()
  return (
    <>
    <div id={theme}>
       <Layout />
      <div className="container">
     
        
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
      <div className="footer">
        <h4 className="text-center">Nikhita Gollamudi &copy; 2024</h4>
      </div>
      </div>
      <ScrollToTop smooth  color='white' style={{backgroundColor:'coral',borderRadis:'80px'}}/>
    </>
  );
}

export default App;
