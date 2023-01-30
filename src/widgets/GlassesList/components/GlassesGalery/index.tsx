import { useEffect } from "react";
import styles from "./index.module.scss";
import { NextThunkDispatch, wrapper } from "@/app/store/store";
import { fetchCollections, fetchGlasses } from "@/entities/Product";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/redux";
import GlassesCard from "../GlassesCard";
import { BarLoader, SkewLoader } from "react-spinners";

interface GlassesGaleryProps {}

const GlassesGalery = ({}: GlassesGaleryProps) => {
  const { glasses, isLoading } = useAppSelector((state) => state.glassesState);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        (document.documentElement && document.documentElement.scrollTop) ||
        document.body.scrollTop;
      const scrollHeight =
        (document.documentElement && document.documentElement.scrollHeight) ||
        document.body.scrollHeight;
      const clientHeight =
        document.documentElement.clientHeight || window.innerHeight;
      if (scrollTop + clientHeight >= scrollHeight - 1 && !isLoading) {
        dispatch(fetchGlasses({ colours: [], shapes: [] }));
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.gallery__wrapper}>
      <div className={styles.gallery__container}>
        {glasses.map(({ id, name, glass_variants }) => {
          const firstImageUrl = glass_variants[0].media[0].url;

          return <GlassesCard key={id} name={name} imageUrl={firstImageUrl} />;
        })}
      </div>
      {isLoading && (
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
      )}
    </div>
  );
};

export default GlassesGalery;
