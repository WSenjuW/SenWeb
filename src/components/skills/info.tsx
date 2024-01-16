import { SiAdobeaftereffects, SiAdobeillustrator } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import { ReactNode } from "react";

type Info_Type = {
  [index: string]: dev_Type | ill_Type;
  readonly dev: dev_Type;
  readonly ill: ill_Type;
};

type dev_Type = {
  skill_List: item_Type[];
  soft_skills: string[];
};

type ill_Type = {
  skill_List: item_Type[];
  soft_skills: string[];
};
type item_Type = {
  readonly name: string;
  readonly icon?: ReactNode;
  readonly skill: number;
  readonly id: number;
};

const INFO: Info_Type = {
  dev: {
    skill_List: [
      {
        name: "HTML",
        icon: <FaHtml5 />,
        skill: 5,
        id: 0,
      },
      {
        name: "CSS",
        icon: <FaCss3Alt />,
        skill: 4,
        id: 1,
      },
      {
        name: "Java Script",
        icon: <IoLogoJavascript />,
        skill: 4,
        id: 2,
      },
      {
        name: "React",
        icon: <FaReact />,
        skill: 4,
        id: 3,
      },
      {
        name: "Node.js",
        icon: <FaNodeJs />,
        skill: 3,
        id: 4,
      },
      {
        name: "Git",
        icon: <FaGitAlt />,
        skill: 3,
        id: 5,
      },
      {
        name: "React Native",
        icon: <FaReact />,
        skill: 2,
        id: 6,
      },
      {
        name: "Figma",
        icon: <FaFigma />,
        skill: 3,
        id: 7,
      },
    ],
    soft_skills: [
      "Good teamwork",
      "Critical thinking",
      "Adaptability",
      "Creativity",
      "Communication",
      "Ability to solve problems",
      "Positivism",
    ],
  },
  ill: {
    skill_List: [
      {
        name: "Illustrator",
        icon: <SiAdobeillustrator  />,
        skill: 2,
        id: 0,
      },
      { name: "OpenToonz", id: 1, skill: 1 },
      {
        name: "After Effects",
        icon: <SiAdobeaftereffects />,
        skill: 3,
        id: 2,
      },
      {
        name: "Figma",
        icon: <FaFigma  />,
        skill: 4,
        id: 3,
      },
    ],
    soft_skills: [
      "Creativity",
      "Positivism",
      "Communication",
      "Attention to details",
    ],
  },
};
export { INFO };
export type { item_Type };
