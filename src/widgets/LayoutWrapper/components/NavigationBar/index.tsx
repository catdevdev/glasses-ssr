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
        <div className={styles.navbar__filters}>
          <button onClick={openCloseColors}>Colour</button>
          <button onClick={openCloseShapes}>Shapes</button>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
