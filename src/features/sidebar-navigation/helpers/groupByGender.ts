import { Collection } from "@/entities/Product/models/collections";

export type Gender = "Man" | "Woman";

export type GroupedItems = {
  men: {
    names: string[];
    configuration_names: string[];
    ids: number[];
  };
  women: {
    names: string[];
    configuration_names: string[];
    ids: number[];
  };
};

export const groupByGender = (collections: Collection[]): GroupedItems => {
  let menIds: number[] = [];
  let menNames: string[] = [];
  let menConfigNames: string[] = [];
  let womenIds: number[] = [];
  let womenNames: string[] = [];
  let womenConfigNames: string[] = [];

  collections.forEach((collection) => {
    if (collection.name.endsWith("Men")) {
      menIds = [...menIds, collection.id];
      menNames = [...menNames, collection.name.replace(" Men", "")];
      menConfigNames = [...menConfigNames, collection.configuration_name];
    } else if (collection.name.endsWith("Women")) {
      womenIds = [...womenIds, collection.id];
      womenNames = [...womenNames, collection.name.replace(" Women", "")];
      womenConfigNames = [...womenConfigNames, collection.configuration_name];
    }
  });

  return {
    men: {
      ids: menIds,
      names: menNames,
      configuration_names: menConfigNames,
    },
    women: {
      ids: womenIds,
      names: womenNames,
      configuration_names: womenConfigNames,
    },
  };
};
