import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import "./loaderScreen.css";

export default function FunctionComponen() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/aboutMe");
    }, 5500);
  }, []);

  return (
    <div id="loader-box">
      <div id="nameLs">
        <p translate="no" className="letterItem name_M1">
          M
        </p>
        <p translate="no" className="letterItem name_punto">
          .
        </p>
        <p translate="no" className="letterItem name_M2">
          M
        </p>
        <p translate="no" className="letterItem name_A">
          a
        </p>
        <p translate="no" className="letterItem name_R">
          r
        </p>
        <p translate="no" className="letterItem name_T">
          t
        </p>
        <p translate="no" className="letterItem name_I">
          i
        </p>
        <p translate="no" className="letterItem name_N">
          n
        </p>
        <p translate="no" className="letterItem name_E">
          e
        </p>
        <p translate="no" className="letterItem name_Z">
          z
        </p>
      </div>
      <div id="developerLS">
        <p translate="no" className="dev_D">
          D
        </p>
        <p translate="no" className="dev_E">
          e
        </p>
        <p translate="no" className="dev_V">
          v
        </p>
        <p translate="no" className="dev_E">
          e
        </p>
        <p translate="no" className="dev_L">
          l
        </p>
        <p translate="no" className="dev_O">
          o
        </p>
        <p translate="no" className="dev_P">
          p
        </p>
        <p translate="no" className="dev_E">
          e
        </p>
        <p translate="no" className="dev_R">
          r
        </p>
      </div>
      <div id="AMBox">
        <p id="AM">About me</p>
        <p id="AM2">About me</p>
      </div>
    </div>
  );
}
