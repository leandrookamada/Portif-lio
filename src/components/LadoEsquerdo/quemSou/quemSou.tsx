import styles from "./quemSou.module.css";
import BlurText from "../../../block/TextAnimations/BlurText/BlurText";
// import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
export function QuemSou() {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };
  return (
    <main className={styles.main}>
      <BlurText
        text="Leandro Kamada"
        delay={200}
        animateBy="letters"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className={styles.BlurText}
      />
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
