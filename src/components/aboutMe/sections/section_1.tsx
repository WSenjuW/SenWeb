import "./section_1.css";
import { useEffect } from "react";

type propsSection = {
  setPS: (element: boolean) => void;
};

export default function Section_1({ setPS }: propsSection) {
  useEffect(() => {
    setPS(true);
    setTimeout(()=>{setPS(false)}, 300);
  }, []);

  return (
    <div id="container_S1">
      <div id="text_box_S1">
        <h1 id="title_S1">ABOUT ME</h1>
        <p id="p_S1">
          Hello!, My name is Maxi Martinez, i'm 24 years old, I'm from Uruguay,
          in personally I am dedicated to full stack web development, but with a
          focus more on the front-end, besides that I like the illustrations and
          animations. Personally, I consider time as the possession of more
          value of each person, for the same reason I believe that assuming the
          responsibility when carrying out a project is something serious. I am
          often very passionate about what I do, for the same i focus on every
          detail to be able to deliver a product of the required quality or
          higher.
        </p>
      </div>
      <div id="figure_S1">
        <svg className="mask">
          <clipPath id="svgMaskS1" clipPathUnits="objectBoundingBox">
            <path d="M0.383,0.042 C0.371,0.052,0.333,0.103,0.339,0.114 C0.344,0.125,0.372,0.13,0.391,0.134 C0.409,0.138,0.493,0.163,0.501,0.174 C0.509,0.185,0.485,0.214,0.477,0.216 C0.448,0.224,0.409,0.253,0.359,0.291 C0.3,0.335,0.259,0.385,0.259,0.385 C0.217,0.389,0.013,0.426,0.002,0.45 C0.002,0.462,0.019,0.453,0.06,0.454 C0.086,0.454,0.198,0.463,0.204,0.473 C0.22,0.479,0.209,0.548,0.214,0.583 C0.219,0.619,0.231,0.666,0.23,0.672 C0.221,0.707,0.198,0.717,0.198,0.732 C0.218,0.731,0.262,0.721,0.284,0.736 C0.306,0.75,0.348,0.774,0.353,0.78 C0.358,0.787,0.367,0.828,0.373,0.831 C0.379,0.832,0.387,0.803,0.401,0.804 C0.414,0.805,0.451,0.832,0.451,0.832 C0.465,0.839,0.474,0.848,0.476,0.858 C0.478,0.867,0.5,1,0.508,1 C0.513,1,0.516,0.949,0.518,0.92 C0.521,0.867,0.519,0.864,0.526,0.854 C0.553,0.815,0.611,0.816,0.617,0.787 C0.621,0.762,0.588,0.735,0.576,0.737 C0.574,0.739,0.574,0.754,0.574,0.754 C0.574,0.754,0.571,0.773,0.566,0.776 C0.553,0.782,0.5,0.756,0.488,0.746 C0.476,0.737,0.449,0.705,0.446,0.674 C0.443,0.644,0.412,0.572,0.423,0.564 C0.433,0.556,0.629,0.666,0.647,0.656 C0.656,0.646,0.631,0.601,0.613,0.574 C0.595,0.547,0.529,0.481,0.525,0.463 C0.52,0.445,0.549,0.438,0.586,0.407 C0.622,0.376,0.62,0.364,0.678,0.316 C0.688,0.307,0.706,0.294,0.726,0.295 C0.726,0.295,0.845,0.376,0.867,0.369 C0.884,0.369,0.883,0.363,0.927,0.343 C0.964,0.326,1,0.292,1,0.282 C1,0.268,0.85,0.185,0.85,0.185 C0.831,0.171,0.82,0.155,0.798,0.144 C0.776,0.133,0.744,0.127,0.726,0.116 C0.699,0.107,0.708,0.098,0.655,0.087 C0.593,0.068,0.536,0.032,0.528,0.029 C0.495,0.014,0.491,0.001,0.468,0.001 C0.444,0,0.396,0.032,0.383,0.042" />
          </clipPath>
        </svg>
      </div>
    </div>
  );
}
