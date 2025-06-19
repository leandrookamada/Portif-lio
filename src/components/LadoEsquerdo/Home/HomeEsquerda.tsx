import styles from "./HomeEsquerda.module.css";
import BlurText from "../../../block/TextAnimations/BlurText/BlurText";
import Dock from "../../../block/Components/Dock/Dock";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export function HomeEsquerda() {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };
  const navigate = useNavigate();
  const items = [
    {
      icon: <FaGithub size={42} />,
      label: "Github",
      onClick: () =>
        window.open(
          "https://github.com/leandrookamada",
          "_blank",
          "noopener,noreferrer"
        ),
    },
    {
      icon: <FaInstagram size={42} />,
      label: "Instagram",
      onClick: () =>
        window.open(
          "https://www.instagram.com/leandrookamada/",
          "_blank",
          "noopener,noreferrer"
        ),
    },
    {
      icon: <FaLinkedin size={42} />,
      label: "LinkedIn",
      onClick: () =>
        window.open(
          "https://www.linkedin.com/in/leandrokamada/",
          "_blank",
          "noopener,noreferrer"
        ),
    },
  ];
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
      <Dock
        className={styles.Dock}
        items={items}
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
      />
    </main>
  );
}
