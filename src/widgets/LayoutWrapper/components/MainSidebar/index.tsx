import { IoMdArrowDropupCircle } from "react-icons/io";
import styles from "./index.module.scss";
import { CSSTransition } from "react-transition-group";
import { useIsOpenSidebar } from "@/features/sidebar-navigation/contexts/isOpenSidebarProvider";
import { Gender } from "@/features/sidebar-navigation/helpers/groupByGender";

const MainSideBar = ({
  options,
  selectGender,
}: {
  options: Gender[];
  selectGender: (gender: Gender) => void;
}) => {
  const { isOpenMainSidebar, toggleSubSidebar } = useIsOpenSidebar();
  console.log(isOpenMainSidebar);

  return (
    <CSSTransition
      in={isOpenMainSidebar}
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
          {options.map((option) => {
            return (
              <div
                key={option}
                onClick={() => {
                  selectGender(option);
                  toggleSubSidebar();
                }}
                className={styles.navlink__wrapper}
              >
                <div className={styles.navlink__title}>{option}</div>
                <IoMdArrowDropupCircle />
              </div>
            );
          })}

          <div className={styles.navlink__wrapper}>
            <div className={styles.navlink__title}>test1</div>
          </div>
          <div className={styles.navlink__wrapper}>
            <div className={styles.navlink__title}>test2</div>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default MainSideBar;
