import styles from "./HomeDireita.module.css";
import PerfilPrincipal from "../../../../public/principalPerfil. .png";
import Orb from "../../../block/Backgrounds/Orb/Orb";

export function HomeDireita() {
  return (
    <div className={styles.divHomeDireita}>
      <Orb
        hoverIntensity={0.5}
        rotateOnHover={true}
        hue={0}
        forceHoverState={false}
      />
      <img
        src={PerfilPrincipal}
        alt="Leandro Kamada Imagem."
        className={styles.PerfilPrincipal}
      />
    </div>
  );
}
