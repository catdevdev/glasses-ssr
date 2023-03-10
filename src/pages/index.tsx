import Head from "next/head";
import { GlassesGalery } from "@/widgets/GlassesList";
import { LayoutWrapper } from "@/widgets/LayoutWrapper";
import { wrapper } from "@/app/store/store";
import {
  collectionsSlice,
  fetchCollections,
  fetchGlasses,
} from "@/entities/Product";
import { IsOpenSidebarProvider } from "@/features/sidebar-navigation/contexts/isOpenSidebarProvider";

const Home = () => {
  return (
    <>
      <Head>
        <title>Glasses</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <IsOpenSidebarProvider>
          <LayoutWrapper>
            <GlassesGalery />
          </LayoutWrapper>
        </IsOpenSidebarProvider>
      </main>
    </>
  );
};

export const getStaticProps = wrapper.getStaticProps(
  // @ts-ignore
  (store) => async () => {
    const {
      colours: { selected: selectedColours },
      shapes: { selected: selectedShapes },
    } = store.getState().filtersState.filterOptions;

    await store.dispatch(fetchCollections());
    store.dispatch(
      collectionsSlice.actions.setSelectedCollection({
        id: 1,
      })
    );
    await store.dispatch(
      fetchGlasses({ colours: selectedColours, shapes: selectedShapes })
    );
  }
);

export default Home;
