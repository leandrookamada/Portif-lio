// import { Link } from "react-router-dom";
import styles from "./header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header_div}></div>
      <nav className={styles.header_nav}>
        <ul className={styles.header_nav_ul}>
          <li className={styles.header_nav_ul_li}>
            <a href="#">Habilidades</a>
          </li>
          <li className={styles.header_nav_ul_li}>
            <a href="#">Projetos</a>
          </li>
          <li className={styles.header_nav_ul_li}>
            <a href="#">Contatos</a>
          </li>
        </ul>
      </nav>
      <div className={styles.header_div}></div>
    </header>
  );
}
