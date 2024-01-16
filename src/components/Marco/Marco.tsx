import "./Marco.css";
import { NavBar } from "./WebNav/Nav";
import { BtnSocialNetworks } from "./BtnRedes";

export const MarcoComponent = () => {
  return (
    <>








      <div id="marcoRight">
        <svg className="svg_marco">
          <clipPath id="CP_marcoRight" clipPathUnits="objectBoundingBox">
            <path d="M0,0 H0.15 V0.835 L1,0.89 V1 H0.85 V0.89 L0,0.835 V0"></path>
          </clipPath>
        </svg>
      </div>
      <div id="marcoBottom">
        <svg className="svg_marco">
          <clipPath id="CP_marcoBottom" clipPathUnits="objectBoundingBox">
            <path d="M0.076,0 H0.939 L0.949,0.85 H1 V1 H0.949 L0.939,0.15 H0.076 L0.051,1 H0 V0.85 H0.051 L0.076,0"></path>
          </clipPath>
        </svg>
      </div>
      <div id="marcoLeft">
        <svg className="svg_marco">
          <clipPath id="CP_marcoLeft" clipPathUnits="objectBoundingBox">
            <path d="M0.85,0.136 L0,0.09 V0 H0.15 V0.09 L1,0.136 V0.346 H0.85 V0.136 M0.85,0.864 L0,0.91 V1 H0.15 V0.91 L1,0.864 V0.652 H0.85 V0.864 M1,0.418 C1,0.418,0.966,0.419,0.925,0.419 C0.884,0.419,0.85,0.418,0.85,0.418 C0.85,0.417,0.884,0.416,0.925,0.416 C0.966,0.416,1,0.417,1,0.418 M1,0.5 C1,0.5,0.966,0.501,0.925,0.501 C0.884,0.501,0.85,0.5,0.85,0.5 C0.85,0.499,0.884,0.498,0.925,0.498 C0.966,0.498,1,0.499,1,0.5 M1,0.541 C1,0.541,0.966,0.542,0.925,0.542 C0.884,0.542,0.85,0.541,0.85,0.541 C0.85,0.54,0.884,0.539,0.925,0.539 C0.966,0.539,1,0.54,1,0.541 M1,0.459 C1,0.459,0.966,0.46,0.925,0.46 C0.884,0.46,0.85,0.459,0.85,0.459 C0.85,0.458,0.884,0.457,0.925,0.457 C0.966,0.457,1,0.458,1,0.459 M1,0.581 C1,0.582,0.966,0.583,0.925,0.583 C0.884,0.583,0.85,0.582,0.85,0.581 C0.85,0.581,0.884,0.58,0.925,0.58 C0.966,0.58,1,0.581,1,0.581"></path>
          </clipPath>
        </svg>
      </div>
      <div id="marcoTop">
        <svg className="svg_marco">
          <clipPath id="CP_marcoTop" clipPathUnits="objectBoundingBox">
            <path d="M0.09,0.85 H0.385 V1 H0.09 L0.06,0.15 H0 V0 H0.06 L0.09,0.85 M0.726,0.85 H1 V1 H0.726 V0.85"></path>
          </clipPath>
        </svg>
      </div>
      <BtnSocialNetworks />
      <NavBar />
    </>
  );
};
