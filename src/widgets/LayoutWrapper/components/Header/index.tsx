import styles from "./index.module.scss";
import Logo from "next/image";
import { useIsOpenSidebar } from "@/features/sidebar-navigation/contexts/isOpenSidebarProvider";

const Header = () => {
  const { toggleMainSidebar } = useIsOpenSidebar();
  return (
    <header className={styles.header}>
      <div onClick={toggleMainSidebar} className={styles.header__menu}>
        Menu
      </div>
      <Logo className={styles.header__logo} />
    </header>
  );
};

export default Header;
