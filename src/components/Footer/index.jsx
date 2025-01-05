import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <img className={styles.logo} src="/logo.svg" alt="AluraFlix logo" />
      <section className={styles.buttons_container}>
        <button className={styles.home_button}>
          <img src="/src/assets/home.svg" alt="home" /> HOME
        </button>
        <button>
          <img src="/src/assets/plus.svg" alt="plus" />
        </button>
      </section>
    </footer>
  );
}
export default Footer;
