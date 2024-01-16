import { createBrowserRouter } from "react-router-dom";
import App from "../App";
// import { MarcoComponent } from "../components/Marco/Marco";
import AboutMe from "../components/aboutMe/aboutMe";
import Projects from "../components/projects/projects";
import Skills from "../components/skills/skills";
import Services from "../components/services/services";
import Contact from "../components/contact/contact";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "aboutMe",
        element: <AboutMe />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "skills",
        element: <Skills />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);
