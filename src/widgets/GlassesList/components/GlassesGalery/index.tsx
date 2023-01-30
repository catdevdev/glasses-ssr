import { useEffect } from "react";
import styles from "./index.module.scss";

import { fetchGlasses } from "@/entities/Product";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/redux";
import GlassesCard from "../GlassesCard";
import { BarLoader } from "react-spinners";
import InfiniteScroll from "react-infinite-scroll-component";

interface GlassesGaleryProps {}

const GlassesGalery = ({}: GlassesGaleryProps) => {
  const { glasses, isLoading, hasMore } = useAppSelector(
    (state) => state.glassesState
  );

  const { colours, shapes } = useAppSelector(
    (state) => state.filtersState.filterOptions
  );

  const fetchMoreData = () => {
    if (!isLoading && hasMore) {
      dispatch(
        fetchGlasses({ colours: colours.selected, shapes: shapes.selected })
      );
    }
  };

  const dispatch = useAppDispatch();

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
          {glasses.map(({ id, name, glass_variants }) => {
            const firstImageUrl = glass_variants[0].media[0].url;

            return (
              <GlassesCard key={id} name={name} imageUrl={firstImageUrl} />
            );
          })}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default GlassesGalery;
