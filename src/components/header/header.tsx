import { Link } from "react-router-dom";

import "./header.css";

export function Header() {
  return (
    <header id="header">
      <div className="header_div"></div>
      <nav className="header_nav">
        <ul className="header_nav_ul">
          <li className="header_nav_ul_li">
            <a href="#">Sobre mim</a>
          </li>
          <li className="header_nav_ul_li">
            <a href="#">Habilidades</a>
          </li>
          <li className="header_nav_ul_li">
            <a href="#">Projetos</a>
          </li>
          <li className="header_nav_ul_li">
            <a href="#">Experiência</a>
          </li>
          <li className="header_nav_ul_li">
            <a href="#">Contatos</a>
          </li>
        </ul>
      </nav>
      <div className="header_div"></div>
    </header>
  );
}
