import "./projects.css";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { Modal_Project } from "./modal_project/modal_project";
import { Data, itemProjectList } from "./Data";

export default function Projects() {
  const [projectSelected, setProjectSelected] =
    useState<itemProjectList | null>(null);

  return (
    <div id="projectsBackground">
      <section id="project-Box">
        <div id="projects-texts-box">
          {Data.map((element) => (
            <ul key={uuidv4()} className="projects_ul">
              <h3 className="title_projects">
                {element.title + ` (${element.projectsList.length})`}
              </h3>
              {element.projectsList.map((el) => (
                <li
                  key={uuidv4()}
                  className="li_projects"
                  onClick={() => setProjectSelected(el)}
                  translate="no"
                >
                  {el.name}
                </li>
              ))}
            </ul>
          ))}
        </div>
        {projectSelected != null && (
          <Modal_Project SPS={setProjectSelected} PS={projectSelected} />
        )}
      </section>
    </div>
  );
}
