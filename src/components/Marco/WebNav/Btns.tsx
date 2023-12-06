import { FC } from "react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Btns.css";

type propsOption = {
  name: string;
  route: string;
  index: number;
  showNav: boolean;
  setShowNav: any;
};

const BtnOption: FC<propsOption> = ({
  name,
  index,
  route,
  showNav,
  setShowNav,
}) => {
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (btnRef.current !== null) {
      const keyFrames = [
        { transform: "translateY(-50px)", opacity: 0 },
        { transform: "translateY(0px)", opacity: 1 },
      ];
      btnRef.current.animate(keyFrames, {
        duration: 30,
        delay: index * 30,
        fill: "both",
      });
    }
  }, []);

  return (
    <button
      ref={btnRef}
      id="btnOption"
      onClick={() => {
        setShowNav(!showNav);
      }}
    >
      <Link id="pOption" to={route}>
        {name}
      </Link>
    </button>
  );
};

export { BtnOption };
