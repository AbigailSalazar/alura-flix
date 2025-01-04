import styles from './Header.module.css';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <header className={styles.header}> 
            <a href="/">
                    <img src="/logo.svg" alt="AluraFlix logo" />
            </a>
            <div className={styles.link_container}>
                <Link  className={styles.link} to="/">HOME</Link>
                <Link  className={styles.link} to="/video">NUEVO VIDEO</Link>   
            </div>
        </header>
    )
}
export default Header;