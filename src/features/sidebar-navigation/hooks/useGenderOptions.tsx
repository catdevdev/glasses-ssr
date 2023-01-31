import { useAppSelector } from "@/shared/hooks/redux";
import { useState } from "react";
import { Gender, groupByGender } from "../helpers/groupByGender";

const useGenderOptions = () => {
  const { collections } = useAppSelector((state) => state.collectionsState);
  const [selectedGender, setSelectedGender] = useState<Gender>("Man");

  const selectGender = (gender: Gender) => {
    setSelectedGender(gender);
  };

  const getOptionsForSubMenu = () => {
    const groupedByGender = groupByGender(collections);
    if (selectedGender === "Man") return groupedByGender.men.names;

    if (selectedGender === "Woman") return groupedByGender.women.names;
  };

  return {
    mainMenuOptions: ["Man", "Woman"] as Gender[],
    subManuOptions: getOptionsForSubMenu(),
    selectGender,
  };
};

export default useGenderOptions;
