import { Outlet } from "react-router-dom";
import { Header } from "../header/header";
import { HomeEsquerda } from "../LadoEsquerdo/Home/HomeEsquerda"; // <-- Primeira letra MAIÚSCULA
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
          <Folder />
        </div>
      </div>
      <Outlet />
    </>
  );
}
