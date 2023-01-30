import styles from "./index.module.scss";

const NavigationBar = ({
  openCloseColors,
  openCloseShapes,
}: {
  openCloseColors: () => void;
  openCloseShapes: () => void;
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.navbar}>
        <div className={styles.navbar__cell}></div>
        <div className={styles.navbar__logo}>Spectacles Woman</div>
        <div className={styles.filters}>
          <div className={styles.filters__wrapper} onClick={openCloseColors}>
            <div className={styles.filters__button}>Colors</div>
          </div>
          <div className={styles.filters__wrapper} onClick={openCloseShapes}>
            <div className={styles.filters__button}>Shapes</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
