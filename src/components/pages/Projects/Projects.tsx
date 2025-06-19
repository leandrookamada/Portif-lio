import SpotlightCard from "../../../block/Components/SpotlightCard/SpotlightCard";
import styles from "./Projects.module.css";
import imagemEx from "../../../../public/og_og_156276560725269885.jpg";

export function Projects() {
  return (
    <main className={styles.mainProjects}>
      <div>
        <SpotlightCard
          className={styles.projects}
          spotlightColor="rgba(0, 229, 255, 0.2)"
        >
          <img src={imagemEx} className={styles.projectsImg} />
          <h1 className={styles.projectsH1}>landing page</h1>
          <p className={styles.projectsP}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
            perspiciatis libero maxime repudiandae accusamus velit perferendis
            aliquid commodi facilis maiores?
          </p>
        </SpotlightCard>
      </div>
    </main>
  );
}
