import { IoMdArrowDropupCircle } from "react-icons/io";
import styles from "./index.module.scss";
import { CSSTransition } from "react-transition-group";
import { useIsOpenSidebar } from "@/features/sidebar-navigation/contexts/isOpenSidebarProvider";

const SubSideBar = () => {
  const { isOpenSubSidebar } = useIsOpenSidebar();
  return (
    <CSSTransition
      in={isOpenSubSidebar}
      timeout={200}
      unmountOnExit
      classNames={{
        enterActive: styles["sidebar__container--enter-active"],
        enterDone: styles["sidebar__container--enter-done"],
        exitActive: styles["sidebar__container--exit-active"],
        exitDone: styles["sidebar__container--exit-done"],
      }}
    >
      <div className={styles.sidebar__container}>
        <div className={styles.navlink}>
          <div className={styles.navlink__wrapper}>
            <div className={styles.navlink__title}>hello</div>
            <IoMdArrowDropupCircle />
          </div>
          <div className={styles.navlink__wrapper}>
            <div className={styles.navlink__title}>hello</div>
            <IoMdArrowDropupCircle />
          </div>
          <div className={styles.navlink__wrapper}>
            <div className={styles.navlink__title}>hello</div>
          </div>
          <div className={styles.navlink__wrapper}>
            <div className={styles.navlink__title}>hello</div>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default SubSideBar;
