import { useState, useRef, useEffect } from "react";
import styles from "./Header.module.scss";
import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa6";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function Header() {
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

  return (
    <header className={styles.header}>
      <div className={styles.headerTop}>
        <div className={styles.left} ref={dropdownRef}>
          <p onClick={() => setDropdownOpen(!dropdownOpen)} className={styles.dropdownToggle}>
            Statistikaamet: <b>Viktoriin</b> {dropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
          </p>
          {dropdownOpen && (
            <ul className={styles.dropdown}>
              <li><a href="https://stat.ee/et">Koduleht</a></li>
              <li><a href="https://andmed.stat.ee/et">Statistika andmebaas</a></li>
              <li><a href="https://estat.stat.ee/sa-auth/login?language=et">eSTAT</a></li>
              <li><a href="https://klassifikaatorid.stat.ee/">Klassifikaatorite portaal</a></li>
              <li><a href="https://palgad.stat.ee/">Palgarakendus</a></li>
              <li><a href="https://juhtimislauad.stat.ee/et">Juhtimislauad</a></li>
              <li><a href="https://valiskaubandus.stat.ee/profile/country/ee/?locale=et">Väliskaubanduse rakendus</a></li>
              <li><a href="https://tamm.stat.ee/?lang=et">Töetamm</a></li>
              <li><a href="https://www.stat.ee/nimed/">Nimede statistika rakendus</a></li>
            </ul>
          )}
        </div>

        <div className={styles.center}>
          <FaFacebookF />
          <FaXTwitter />
          <FaLinkedinIn />
          <FaYoutube />
          <FaInstagram />
        </div>

        <div className={styles.right}>
          <a href="https://www.stat.ee/et/juurdepaasetavus">Juurdepääsetavus</a>
          <a href="https://www.stat.ee/et/abi">Abi</a>
          <a href="https://www.stat.ee/et/statistikaamet/kontakt">Kontaktid</a>
          <a href="https://estat.stat.ee/sa-auth/login?TARGET=https%3A%2F%2Festat.stat.ee%2Fvalisportaal%2Flogin%2Fcas">Sisene eSTATi</a>
          <span className={styles.lang}>EST | ENG</span>
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