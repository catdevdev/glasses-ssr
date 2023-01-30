import { IoMdArrowDropupCircle } from "react-icons/io";
import styles from "./index.module.scss";

const SideBar = () => {
  return (
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
          <IoMdArrowDropupCircle />
        </div>
        <div className={styles.navlink__wrapper}>
          <div className={styles.navlink__title}>hello</div>
          <IoMdArrowDropupCircle />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
