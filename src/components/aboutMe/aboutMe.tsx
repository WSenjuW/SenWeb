import "./aboutMe.css";
import Section_1 from "./sections/section_1";
import { useRef, useState } from "react";
import { Section_2 } from "./sections/section_2";
import Section_3 from "./sections/section_3";

export default function AboutMe() {
  const [sectionIndex, setSectionIndex] = useState(0);
  const [sectionPaused, setSectionPaused] = useState(true);
  const scrollBox = useRef<HTMLDivElement>(null);

  function ChangeScroll(ST: number) {
    let IndexSectionUpdate;
    if (ST === 0) {
      IndexSectionUpdate = sectionIndex === 0 ? 2 : sectionIndex - 1;
      setSectionIndex(IndexSectionUpdate);
    }
    if (ST === 200) {
      IndexSectionUpdate = sectionIndex === 2 ? 0 : sectionIndex + 1;
      setSectionIndex(IndexSectionUpdate);
    }
  }

  const SectionList = [
    <Section_1 setPS={setSectionPaused} />,
    <Section_2 setPS={setSectionPaused} />,
    <Section_3 setPS={setSectionPaused} />,
  ];

  function changeScrollOnClick(element: number) {
    setSectionIndex(element);
    if (scrollBox != null) {
      (scrollBox.current as HTMLElement).scrollTop =
        (scrollBox.current as HTMLElement).clientHeight * element;
    }
  }

  return (
    <div
      id="aboutMeBox"
      tabIndex={1}
      ref={scrollBox}
      onScroll={(e) =>
        sectionPaused === false &&
        ChangeScroll((e.target as HTMLElement).scrollTop)
      }
    >
      <nav id="navSectionIndex">
        <button
          id={`indexOptionBtn${sectionIndex === 0 ? "Selected" : ""}`}
          onClick={() => changeScrollOnClick(0)}
        />
        <button
          id={`indexOptionBtn${sectionIndex === 1 ? "Selected" : ""}`}
          onClick={() => changeScrollOnClick(1)}
        />
        <button
          id={`indexOptionBtn${sectionIndex === 2 ? "Selected" : ""}`}
          onClick={() => changeScrollOnClick(2)}
        />
      </nav>
      {SectionList[sectionIndex]}
    </div>
  );
}
