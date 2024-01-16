import { BtnOption } from "./Btns";
import { useState } from "react";
import "./Nav.css";

const rutesOptions = [
  { name: "ABOUT ME", rute: "/aboutMe" },
  { name: "SKILLS", rute: "/skills" },
  { name: "PROJECTS", rute: "/projects" },
  { name: "SERVICES", rute: "/services" },
  { name: "CONTACT", rute: "/contact" },
];

export const NavBar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div
      id="navBox"
      onMouseEnter={() => {
        setShowNav(true);
      }}
      onMouseLeave={() => {
        setShowNav(false);
      }}
    >
      <button id="btnMain"
      onClick={()=>{showNav === true ?  setShowNav(false) : setShowNav(true)}}
      >
        <div
          id="triangulo"
          style={{ transform: !showNav ? "rotate(180deg)" : "rotate(0deg)" }}
          
        />
      </button>
      {showNav !== false &&
        rutesOptions.map((el, i) => (
          <BtnOption
            showNav={showNav}
            setShowNav={setShowNav}
            name={el.name}
            route={el.rute}
            index={i}
            key={i}
          />
        ))}
    </div>
  );
};
