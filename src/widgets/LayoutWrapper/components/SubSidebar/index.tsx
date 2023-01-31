import { IoMdArrowDropupCircle } from "react-icons/io";
import styles from "./index.module.scss";
import { CSSTransition } from "react-transition-group";
import { useIsOpenSidebar } from "@/features/sidebar-navigation/contexts/isOpenSidebarProvider";

const SubSideBar = ({ options }: { options: string[] | undefined }) => {
  const { isOpenSubSidebar, toggleSubSidebar } = useIsOpenSidebar();
  console.log(isOpenSubSidebar);
  return (
    <CSSTransition
      in={isOpenSubSidebar}
      timeout={200}
      classNames={{
        enterActive: styles["sidebar__container--enter-active"],
        enterDone: styles["sidebar__container--enter-done"],
        exitActive: styles["sidebar__container--exit-active"],
        exitDone: styles["sidebar__container--exit-done"],
      }}
    >
      <div className={styles.sidebar__container}>
        <div className={styles.navlink}>
          <div
            onClick={() => {
              toggleSubSidebar(false);
            }}
            className={styles.navlink__wrapper}
          >
            <div className={styles.navlink__title}>Go Back</div>
            <IoMdArrowDropupCircle />
          </div>

          {options &&
            options.map((option) => (
              <div key={option} className={styles.navlink__wrapper}>
                <div className={styles.navlink__title}>{option}</div>
                <IoMdArrowDropupCircle />
              </div>
            ))}
        </div>
      </div>
    </CSSTransition>
  );
};

export default SubSideBar;
