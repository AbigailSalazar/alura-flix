import styles from "./Header.module.css";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const { pathname } = location;

  return (
    <header className={styles.header}>
      <a href="/">
        <img src="/logo.svg" alt="AluraFlix logo" />
      </a>
      <div className={styles.link_container}>
        <Link className={pathname == "/" ? styles.link_actual : ""} to="/">
          HOME
        </Link>
        <Link
          className={pathname == "/nuevo" ? styles.link_actual : ""}
          to="/nuevo"
        >
          NUEVO VIDEO
        </Link>
      </div>
    </header>
  );
}
export default Header;
