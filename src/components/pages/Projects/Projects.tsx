import SpotlightCard from "../../../block/Components/SpotlightCard/SpotlightCard";
import styles from "./Projects.module.css";
import imagemEx from "../../../../public/og_og_156276560725269885.jpg";
import imagemEx2 from "../../../../public/dbfdb1114131382780590f3d146980e7.jpg";
import PixelTransition from "../../../block/Animations/PixelTransition/PixelTransition";
import Squares from "../../../block/Backgrounds/Squares/Squares";

export function Projects() {
  return (
    <body>
      <Squares
        speed={0.5}
        squareSize={40}
        direction="diagonal" // up, down, left, right, diagonal
        borderColor="#fff"
        hoverFillColor="#222"
      />
      <main className={styles.mainProjects}>
        ;<h1 className={styles.h1Projects}>UM POUCO DOS MEUS PROJETOS</h1>
        <section className={styles.sectionProjects}>
          <div className={styles.divProjects}>
            <SpotlightCard
              className={styles.projects}
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <PixelTransition
                firstContent={
                  <img
                    src={imagemEx}
                    alt="default pixel transition content, a cat!"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                }
                secondContent={
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "grid",
                      placeItems: "center",
                      backgroundColor: "#111",
                    }}
                  >
                    <img
                      src={imagemEx2}
                      alt=""
                      className={styles.projectsImg2}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                }
                gridSize={12}
                pixelColor="#ffffff"
                animationStepDuration={0.4}
                className="custom-pixel-card"
              />
              <h1 className={styles.projectsH1}>landing page</h1>
              <p className={styles.projectsP}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Provident perspiciatis libero maxime repudiandae accusamus velit
                perferendis aliquid commodi facilis maiores?
              </p>
            </SpotlightCard>
          </div>
          <div className={styles.divProjects}>
            <SpotlightCard
              className={styles.projects}
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <PixelTransition
                firstContent={
                  <img
                    src={imagemEx}
                    alt="default pixel transition content, a cat!"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                }
                secondContent={
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "grid",
                      placeItems: "center",
                      backgroundColor: "#111",
                    }}
                  >
                    <img
                      src={imagemEx2}
                      alt=""
                      className={styles.projectsImg2}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                }
                gridSize={12}
                pixelColor="#ffffff"
                animationStepDuration={0.4}
                className="custom-pixel-card"
              />
              <h1 className={styles.projectsH1}>landing page</h1>
              <p className={styles.projectsP}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Provident perspiciatis libero maxime repudiandae accusamus velit
                perferendis aliquid commodi facilis maiores?
              </p>
            </SpotlightCard>
          </div>
          <div className={styles.divProjects}>
            <SpotlightCard
              className={styles.projects}
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <PixelTransition
                firstContent={
                  <img
                    src={imagemEx}
                    alt="default pixel transition content, a cat!"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                }
                secondContent={
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "grid",
                      placeItems: "center",
                      backgroundColor: "#111",
                    }}
                  >
                    <img
                      src={imagemEx2}
                      alt=""
                      className={styles.projectsImg2}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                }
                gridSize={12}
                pixelColor="#ffffff"
                animationStepDuration={0.4}
                className="custom-pixel-card"
              />
              <h1 className={styles.projectsH1}>landing page</h1>
              <p className={styles.projectsP}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Provident perspiciatis libero maxime repudiandae accusamus velit
                perferendis aliquid commodi facilis maiores?
              </p>
            </SpotlightCard>
          </div>
        </section>
      </main>
    </body>
  );
}
