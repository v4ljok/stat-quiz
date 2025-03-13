import styles from './Header.module.scss'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerTop}></div>
      <div className={styles.headerBottom}>
        <img src="https://www.stat.ee/themes/stat/logo.svg" alt="" />
      </div>
    </header>
  );
}

export default Header