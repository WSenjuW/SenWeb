import "./Marco.css";
import { FrameComponent } from "./Marco_svg";
import { NavBar } from "./WebNav/Nav";
import { BtnSocialNetworks } from "./BtnRedes";

export const MarcoComponent = () => {

  return (
    <div id="marcoBox">
      <FrameComponent />
      <BtnSocialNetworks />
      <NavBar />
    </div>
  );
};
