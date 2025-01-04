import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <img className={styles.logo} src="/logo.svg" alt="AluraFlix logo"/>
        </footer>
    )
}
export default Footer;