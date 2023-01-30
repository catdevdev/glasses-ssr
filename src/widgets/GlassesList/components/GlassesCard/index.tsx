import styles from "./index.module.scss";

interface GlassesCardProps {
  name: string;
  imageUrl: string;
}

const GlassesCard = ({ name, imageUrl }: GlassesCardProps) => {
  return (
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className={styles.card__container}
    >
      {name}
    </div>
  );
};

export default GlassesCard;
