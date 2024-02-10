import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import { MarcoComponent } from "./components/Marco/Marco";
import LoaderScreen from "./components/LoaderScreen/loaderScreen";

export default function App() {
  const { pathname } = useLocation();

  return (
    <div id="App">
      {pathname != "/" ? (
        <>
          <MarcoComponent />
          <Outlet />
        </>
      ) : (
        <LoaderScreen />
      )}
    </div>
  );
}
