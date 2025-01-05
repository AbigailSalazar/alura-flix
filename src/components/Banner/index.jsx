import styles from "./Banner.module.css";

function Baneer() {
  return (
    <div className={styles.container}>
      <img
        className={styles.background}
        src="img/Banner.png"
        alt="backgound banner"
      />
      <div className={styles.overlay}>
        <div className={styles.bannerContent}>
          <div className={styles.info}>
            <h1 className={styles.title}>FRONT END</h1>
            <h2 className={styles.subtitle}>Challenge React</h2>
            <p className={styles.description}>
              Este challenge es una forma de aprendizaje. Es un mecanismo donde
              podrás comprometerte en la resolución de un problema para poder
              aplicar todos los conocimientos adquiridos en la formación React.
            </p>
          </div>
          <img
            className={styles.image}
            src="img/player.png"
            alt="¿Qué significa pensar como programador?"
          />
        </div>
      </div>
    </div>
  );
}

export default Baneer;
