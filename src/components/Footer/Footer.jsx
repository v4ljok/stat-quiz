import styles from "./Footer.module.scss";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <ul>
        <li><a href="#">{t("footer.contacts")}</a></li>
        <li><a href="tel:+3726259300">📞 +372 625 9300</a></li>
        <li><a href="mailto:stat@stat.ee">✉️ stat@stat.ee</a></li>
        <li><a href="#">{t("footer.cookies")}</a></li>
      </ul>
    </footer>
  );
}

export default Footer;