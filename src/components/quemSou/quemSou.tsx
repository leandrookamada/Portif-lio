import styles from "./quemSou.module.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
export function QuemSou() {
  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>Leandro Kamada</h1>
      <h2 className={styles.h2}>Desenvolvedor Full Stack</h2>
      <p className={styles.p}>
        Desenvolvedor Web apaixonado por criar soluções eficientes e intuitivas.
        Especialista em HTML, CSS, JavaScript e C++, com foco em performance,
        usabilidade e boas práticas. Comprometido, criativo e sempre em busca de
        novos desafios para evoluir e transformar ideias em experiências
        digitais de valor.
      </p>
    </main>
  );
}
