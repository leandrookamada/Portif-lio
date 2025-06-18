import { Outlet } from "react-router-dom";
import { Header } from "../header/header";
import { HomeEsquerda } from "../LadoEsquerdo/Home/HomeEsquerda";
import { HomeDireita } from "../LadoDireito/HomeDireita/HomeDireita";
import Folder from "../LadoDireito/projetos/ChromaGrid";
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
          <Folder />
        </div>
      </div>
      <Outlet />
    </>
  );
}
