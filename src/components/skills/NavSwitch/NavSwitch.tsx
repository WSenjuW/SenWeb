import "./NavSwitch.css";
type props = {
  Mode: string;
  SM: (e: string) => void;
};

export default function NavSwitch({ Mode, SM }: props) {
  return (
    <nav id="nav-skill-box">
      <button
        style={{
          color: Mode === "dev" ? "#2bff00 " : "#f1f1f1",
        }}
        id="nav-option-dev"
        onClick={() => SM("dev")}
      >
        Developer
      </button>
      <div id="bar-middle-nav" />
      <button
        style={{
          color: Mode === "ill" ? "#f0250d" : "#f1f1f1",
        }}
        id="nav-option-Ill"
        onClick={() => SM("ill")}
      >
        illustrator
      </button>
    </nav>
  );
}
