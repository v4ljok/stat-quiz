import styles from './Header.module.scss'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerTop}>
        <p className={styles.rakenduseValik}>Statistikaamet: <b>Viktoriin</b></p>
      </div>
      <div className={styles.headerBottom}>
        <a href='https://www.stat.ee/et'><img src="https://www.stat.ee/themes/stat/logo.svg" className={styles.image} alt="" /></a>
      </div>
    </header>
  );
}

export default Header