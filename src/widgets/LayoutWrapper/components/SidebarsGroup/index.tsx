import SubSideBar from "../SubSidebar";
import { CSSTransition } from "react-transition-group";
import styles from "./index.module.scss";
import MainSideBar from "../MainSidebar";
import useGenderOptions from "@/features/sidebar-navigation/hooks/useGenderOptions";

const SidebarsGroup = () => {
  const { mainMenuOptions, subManuOptions, selectGender } = useGenderOptions();

  return (
    <div>
      <MainSideBar options={mainMenuOptions} selectGender={selectGender} />
      <SubSideBar options={subManuOptions} />
    </div>
  );
};

export default SidebarsGroup;
