import { Outlet } from "react-router-dom";
import { Header } from "../header/header";
import { QuemSou } from "../quemSou/quemSou"; // <-- Primeira letra MAIÚSCULA
import Folder from "../../pages/projects/Folder";

export function Layout() {
  return (
    <>
      <Header />
      <QuemSou /> {/* <-- Também aqui */}
      <Outlet />
      <Folder />
    </>
  );
}
