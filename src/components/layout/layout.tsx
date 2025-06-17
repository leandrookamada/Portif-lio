import { Outlet } from "react-router-dom";
import { Header } from "../header/header";
import { QuemSou } from "../quemSou/quemSou"; // <-- Primeira letra MAIÚSCULA
import Folder from "../../pages/projects/ChromaGrid";
import "./layout.css";

export function Layout() {
  return (
    <>
      <Header />
      <div className="bodyy">
        <div>
          <QuemSou /> {/* <-- Também aqui */}
        </div>
        <div>
          <Folder />
        </div>
      </div>
      <Outlet />
    </>
  );
}
