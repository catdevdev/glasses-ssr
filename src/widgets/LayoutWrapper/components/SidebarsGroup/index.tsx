import SubSideBar from "../SubSidebar";
import { CSSTransition } from "react-transition-group";
import styles from "./index.module.scss";
import MainSideBar from "../MainSidebar";

const SidebarsGroup = ({
  activeMain,
  activeSub,
}: {
  activeMain: boolean;
  activeSub: boolean;
}) => {
  return (
    <div>
      <MainSideBar active={activeMain} />
      <SubSideBar active={activeSub} />
    </div>
  );
};

export default SidebarsGroup;
