import styles from "./index.module.scss";
import Image from "next/image";

interface GlassesCardProps {
  name: string;
  imageUrl: string;
  cardIsLoading: boolean;
}

const GlassesCard = ({ name, imageUrl, cardIsLoading }: GlassesCardProps) => {
  return (
    <div
      style={{
        padding: cardIsLoading ? 5 : 0,
      }}
      className={styles.card__container}
    >
      <div className={styles.card__title}>{name}</div>
      <img src={imageUrl} className={styles.card__image} />
    </div>
  );
};

export default GlassesCard;
