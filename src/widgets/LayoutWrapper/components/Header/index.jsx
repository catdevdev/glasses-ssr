import styles from "./index.module.scss";
import Logo from "next/image";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__menu}>Menu</div>
      <Logo className={styles.header__logo} />
    </header>
  );
};

export default Header;
