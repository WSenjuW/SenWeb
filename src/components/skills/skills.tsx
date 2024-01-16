import "./skills.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { INFO, item_Type } from "./info";
import NavSwitch from "./NavSwitch/NavSwitch";
import { IconContext } from "react-icons";

export default function Skills() {
  const [mode, setMode] = useState<string>("dev");
  const [isHover, setIsHover] = useState(-1);

  const colorBKG: String = mode === "dev" ? "#a547f5" : "#ff1900";

  const LG = `linear-gradient(-45deg,
    transparent 5%,
    ${colorBKG} 5%, 
    ${colorBKG} 95%,
    transparent 95%`;

  return (
    <div id="container-skill">
      <IconContext.Provider value={{ className: "iconLanguageList" }}>
        <NavSwitch SM={setMode} Mode={mode} />
        <div id="skillModalBox" style={{ background: LG }}>
          <ul id="tec-skills">
            {INFO[mode].skill_List.map(({ id, name, icon }: item_Type) => (
              <li
              style={{color:(mode === "dev"? "#3afa00":"#c0f500")}}
                onMouseEnter={() => setIsHover(id)}
                onMouseLeave={() => setIsHover(-1)}
                className="tec-skills-item"
                key={uuidv4()}
              >
                {icon != undefined && icon}
                {name}
              </li>
            ))}
          </ul>
          <div id="soft_skills">
            {/* A continuación tenemos 2 map que renderiza una misma lista 2 veces para poder crear el efecto de doble texto */}
            {isHover === -1 ? (
              <ul id="soft_skills_ul">
                {INFO[mode].soft_skills.map((el) => (
                  <li id={`soft_skills_li_${mode}`} key={uuidv4()}>
                    {el}
                  </li>
                ))}
              </ul>
            ) : (
              <section id="hover_skills">
                <p id="icon_hover_skills">
                  {INFO[mode].skill_List[isHover].icon != undefined &&
                    INFO[mode].skill_List[isHover].icon}
                </p>
                <p id="p_hover_skills">
                  Skills: {INFO[mode].skill_List[isHover].skill} / 5
                </p>
              </section>
            )}
          </div>
        </div>
      </IconContext.Provider>
    </div>
  );
}
