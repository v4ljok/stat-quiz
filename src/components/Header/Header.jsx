import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Header.module.scss";
import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa6";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function Header() {
  const { t, i18n } = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerTop}>
        <div className={styles.left} ref={dropdownRef}>
          <p onClick={() => setDropdownOpen(!dropdownOpen)} className={styles.dropdownToggle}>
          {t("label")}: <b>{t("title")}</b> {dropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
          </p>
          {dropdownOpen && (
            <ul className={styles.dropdown}>
              <a href="https://stat.ee/et"><li>{t("home")}</li></a>
              <a href="https://andmed.stat.ee/et"><li>{t("database")}</li></a>
              <a href="https://estat.stat.ee/sa-auth/login?language=et"><li>{t("estat")}</li></a>
              <a href="https://klassifikaatorid.stat.ee/"><li>{t("classification")}</li></a>
              <a href="https://palgad.stat.ee/"><li>{t("salary")}</li></a>
              <a href="https://juhtimislauad.stat.ee/et"><li>{t("dashboards")}</li></a>
              <a href="https://valiskaubandus.stat.ee/profile/country/ee/?locale=et"><li>{t("trade")}</li></a>
              <a href="https://tamm.stat.ee/?lang=et"><li>{t("tamm")}</li></a>
              <a href="https://www.stat.ee/nimed/"><li>{t("names")}</li></a>
            </ul>
          )}
        </div>

        <div className={styles.center}>
          <a href="https://et-ee.facebook.com/Statistikaamet"><FaFacebookF /></a>
          <a href="https://x.com/eestistatistika"><FaXTwitter /></a>
          <a href="https://www.linkedin.com/company/statistikaamet-statistics-estonia/"><FaLinkedinIn /></a>
          <a href="https://www.youtube.com/user/Statistikaamet/featured"><FaYoutube /></a>
          <a href="https://www.instagram.com/eesti_statistika/"><FaInstagram /></a>
        </div>

        <div className={styles.right}>
          <a href="#">{t("accessibility")}</a>
          <a href="#">{t("help")}</a>
          <a href="#">{t("contacts")}</a>
          <a href="#">{t("login")}</a>

          <span className={styles.lang}>
            <span
              className={i18n.language === "et" ? styles.activeLang : styles.inactiveLang}
              onClick={() => changeLanguage("et")}
            >
              EST
            </span>
            {" | "}
            <span
              className={i18n.language === "en" ? styles.activeLang : styles.inactiveLang}
              onClick={() => changeLanguage("en")}
            >
              ENG
            </span>
          </span>
        </div>
      </div>

      <div className={styles.headerBottom}>
        <a href="https://www.stat.ee/et">
          <img src="https://www.stat.ee/themes/stat/logo.svg" className={styles.image} alt="Statistikaamet logo" />
        </a>
      </div>
    </header>
  );
}

export default Header;