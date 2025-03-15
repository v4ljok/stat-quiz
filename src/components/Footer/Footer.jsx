import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul>
        <li><a href="#">Kontaktid</a></li>
        <li><a href="№">📞 +372 625 9300</a></li>
        <li><a href="№">✉️ stat@stat.ee</a></li>
        <li><a href="#">Küpsiste sätted</a></li>
      </ul>
    </footer>
  );
}

export default Footer;