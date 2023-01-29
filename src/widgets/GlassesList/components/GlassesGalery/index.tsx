import React, { useEffect } from "react";
import Image from "next/image";
import {
  AppStore,
  NextThunkDispatch,
  RootState,
  wrapper,
} from "@/app/store/store";
import { fetchGlasses } from "@/entities/Product";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/redux";
import GlassesCard from "../GlassesCard";

interface GlassesGaleryProps {}

const GlassesGalery = ({}: GlassesGaleryProps) => {
  const { glasses } = useAppSelector((state) => state.glassesState);

  const dispatch = useAppDispatch();

  useEffect(() => {
    setInterval(() => {
      dispatch(fetchGlasses({ colours: [], shapes: [] }));
    }, 5000);
  }, []);

  return (
    <div>
      {glasses.map(({ id, name, glass_variants }) => {
        const firstImageUrl = glass_variants[0].media[0].url;

        return <GlassesCard key={id} name={name} imageUrl={firstImageUrl} />;
      })}
    </div>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  // @ts-ignore
  (store) => async () => {
    const {
      colours: { selected: selectedColours },
      shapes: { selected: selectedShapes },
    } = store.getState().filtersState.filterOptions;

    await store.dispatch(
      fetchGlasses({ colours: selectedColours, shapes: selectedShapes })
    );
  }
);

export default GlassesGalery;
