import styles from "./index.module.scss";
import Logo from "next/image";
import { useIsOpenSidebar } from "@/features/sidebar-navigation/contexts/isOpenSidebarProvider";

const Header = () => {
  const { toggleMainSidebar, toggleSubSidebar } = useIsOpenSidebar();
  return (
    <header className={styles.header}>
      <div
        onClick={() => {
          toggleMainSidebar();
          toggleSubSidebar(false);
        }}
        // onClick={toggleMainSidebar}
        className={styles.header__menu}
      >
        Menu
      </div>
      <Logo
        width={30}
        height={30}
        src="/logo.png"
        className={styles.header__logo}
      />
    </header>
  );
};

export default Header;
