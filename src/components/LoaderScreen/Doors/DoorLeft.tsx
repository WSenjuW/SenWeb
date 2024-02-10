import "./DoorLeft.css";

export function DoorLeft() {
  return (
    <section id="DL_container">
      <span id="numberDoor">05</span>
      <p id="descriptionDoor">
        LAT-AMERICA <br />
        SD <br />
        ALFIL <br />
      </p>
      <span id="diagonal_bars"/>
      <svg
      id="svg_border_bottom"

        viewBox="0 0 319 336"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0L121 121V176L0 296V0Z" fill="#F1F1F1"  />
        <path
          d="M23 336L144 215H199L319 336H23Z"
          fill="#F1F1F1"
        />
      </svg>
      <span className="spinner" />
      <span id="bar_bottom"/>
    </section>
  );
}
