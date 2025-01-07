import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className={styles.footer}>
      <img className={styles.logo} src="/logo.svg" alt="AluraFlix logo" />
      <section className={styles.buttons_container}>
        <Link to="/" className={styles.home_button}>
          <img src="assets/home.svg" alt="home" /> HOME
        </Link>
        <Link to="/nuevo">
          <img src="assets/plus.svg" alt="plus" />
        </Link>
      </section>
    </footer>
  );
}
export default Footer;
