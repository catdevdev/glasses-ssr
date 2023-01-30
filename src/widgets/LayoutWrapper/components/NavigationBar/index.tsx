import styles from "./index.module.scss";

const NavigationBar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.navbar}>
        <div className={styles.navbar__cell}></div>
        <div className={styles.navbar__logo}>Spectacles Woman</div>
        <div className={styles.navbar__filters}>
          <button>Colour</button>
          <button>Shape</button>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
