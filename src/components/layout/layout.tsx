import { Outlet } from "react-router-dom";
import { Header } from "../header/header";
import { QuemSou } from "../quemSou/quemSou"; // <-- Primeira letra MAIÚSCULA

export function Layout() {
  return (
    <>
      <Header />
      <QuemSou /> {/* <-- Também aqui */}
      <Outlet />
    </>
  );
}
