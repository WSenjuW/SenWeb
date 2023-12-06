import { useState, useEffect } from "react";
import {
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoPinterest,
} from "react-icons/io";
import { IconContext } from "react-icons";
import "./btnRedes.css";

interface SNE {
  name: string;
  id: number;
  url: string;
  element: any;
}

const socialNetworksList: Array<SNE> = [
  {
    name: "GIT HUB",
    id: 0,
    url: "https://github.com/WSenjuW",
    element: <IoLogoGithub />,
  },
  {
    name: "INSTAGRAM",
    id: 1,
    url: "https://www.instagram.com/wsenjuw/",
    element: <IoLogoInstagram />,
  },
  {
    name: "LINKEDIN",
    id: 2,
    url: "https://www.linkedin.com/in/maxi-martinez-55ba5421a/",
    element: <IoLogoLinkedin />,
  },
  {
    name: "PINTEREST",
    id: 3,
    url: "https://www.pinterest.com/WSenjuW/",
    element: <IoLogoPinterest />,
  },
];

export const BtnSocialNetworks = () => {
  const [socialNetwork, setSocialNetwork] = useState(0);

  useEffect(() => {
    function changeSN(): void {
      if (  socialNetwork === socialNetworksList.length - 1 ) {
        setSocialNetwork(0);
      } else {
        setSocialNetwork(socialNetwork + 1);
      }
    }
    setTimeout(changeSN, 3000);
    
  }, [socialNetwork]);

  return (
    <IconContext.Provider value={{ color: "#00FFA3", size: "3em" }}>
        <a
          id="linkA"
          target="_Blank"
          href={socialNetworksList[socialNetwork]['url']}
        >
        {socialNetworksList[socialNetwork].element}
        </a>
    </IconContext.Provider>
  );
};
