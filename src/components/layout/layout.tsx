import { Outlet } from "react-router-dom";
import { Header } from "../header/header";
import { HomeEsquerda } from "../LadoEsquerdo/Home/HomeEsquerda";
import { HomeDireita } from "../LadoDireito/HomeDireita/HomeDireita";
import { Projects } from "../pages/Projects/Projects";
import "./layout.css";

export function Layout() {
  return (
    <>
      <Header />
      <div className="Layout-div">
        <div className="Lado-Esquerdo">
          <HomeEsquerda />
        </div>
        <div className="Lado-Direito">
          <HomeDireita />
        </div>
      </div>
      <Projects />
      <Outlet />
    </>
  );
}
