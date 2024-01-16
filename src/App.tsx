import { Outlet } from "react-router-dom";
import "./App.css";
import { MarcoComponent } from "./components/Marco/Marco";
export default function App() {
  return (
    <div id="App">
      <MarcoComponent />
      <Outlet/>
    </div>
  );
}
