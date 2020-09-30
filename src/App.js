import React from "react";
import Menubar from "./components/menubar";
import Sidebar from "./components/sidebar";
import Hero from "./layout/hero";
import Contact from "./layout/contact";
import About from "./layout/about";
import Skills from "./layout/skills";
import Projects from "./layout/projects";
import Experience from "./layout/experience";
import TrackVisibility from "react-on-screen";

function App() {
  return (
    <div className="App">
      <Menubar />
      <Sidebar />
      <TrackVisibility>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </TrackVisibility>
    </div>
  );
}

export default App;
