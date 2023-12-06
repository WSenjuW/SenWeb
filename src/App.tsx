import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MarcoComponent } from "./components/Marco/Marco";
import AboutMe from "./components/aboutMe/aboutMe";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";
import Services from "./components/services/services";

export default function App() {
  return (
    <div id="App">
      <BrowserRouter>
        <MarcoComponent />
        <Routes>
          <Route path="/aboutMe" element={<AboutMe />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
