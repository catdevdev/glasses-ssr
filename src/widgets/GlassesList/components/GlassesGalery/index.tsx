import styles from "./index.module.scss";
import GlassesCard from "../GlassesCard";
import { BarLoader } from "react-spinners";
import InfiniteScroll from "react-infinite-scroll-component";
import useGalaryLazyLoading from "@/features/glasses-galery/hooks/useGlassesGalary";

interface GlassesGaleryProps {}

const GlassesGalery = ({}: GlassesGaleryProps) => {
  const { glasses, fetchMoreData, hasMore, isUpdatesLoading } =
    useGalaryLazyLoading();

  return (
    <div className={styles.gallery__wrapper}>
      <InfiniteScroll
        dataLength={glasses.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={
          <div
            style={{
              background: "white",
              height: 40,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <BarLoader color="black" />
          </div>
        }
      >
        <div className={styles.gallery__container}>
          {glasses.map(({ name, glass_variants }, index) => {
            const firstImageUrl = glass_variants[0].media[0].url;

            return (
              <GlassesCard
                key={index}
                name={name}
                imageUrl={firstImageUrl}
                cardIsLoading={isUpdatesLoading}
              />
            );
          })}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default GlassesGalery;
