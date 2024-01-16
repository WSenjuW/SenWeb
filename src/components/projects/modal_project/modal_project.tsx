import { itemProjectList } from "../Data";
import "./modal_project.css";
import { FaGithub } from "react-icons/fa";
import { IoMdLink } from "react-icons/io";
import { VscChromeClose } from "react-icons/vsc";
import { v4 as uuidv4 } from "uuid";

interface propsInterface {
  PS: itemProjectList;
  SPS: (element: null) => void;
}

export function Modal_Project({ PS, SPS }: propsInterface) {
  return (
    <>
      <div id="blur-modal" onClick={() => SPS(null)} />
      <span id="modal-project">
        <button id="btn-close-modal" onClick={() => SPS(null)}>
          <VscChromeClose />
        </button>
        <section id="title-img-buttons-box">
          <h1 translate="no" id="title-modal-project">
            {PS.name}
          </h1>
          <span id="img-box-modal-project">
            <img alt="project image" id="img-modal-project" src={PS.imgURL} />
            {PS.linkPage != undefined && (
              <a target="_BLANK" href={PS.linkPage} id="img-link-modal-project">
                {<IoMdLink />}
              </a>
            )}
          </span>
          <div id="buttons-modal-box">
            <a href={PS.linkGH} target="_blank" id="btn-modal-project">
              <FaGithub />
            </a>
            <div id="frameworks-box">
              {PS.FW_list.map((e) => (
                <p key={uuidv4()} className="p-FW-project">
                  {e}
                </p>
              ))}
            </div>
          </div>
        </section>

        <div id="description-modal-project">
          <h2 id="description-project">Description</h2>
          <p id="description-content-modal-project">{PS.details}</p>
          <p id="info-created-modal-project">Created in {PS.dateCreated}</p>
        </div>
      </span>
    </>
  );
}
