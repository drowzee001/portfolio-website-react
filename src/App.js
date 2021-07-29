import "./App.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="App ">
      <Nav />
      <Home />
      <About />
      <Projects />
        <Contact />
    </div>
  );
}

export default App;
