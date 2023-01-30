import SubSideBar from "../SubSidebar";
import { CSSTransition } from "react-transition-group";
import styles from "./index.module.scss";
import MainSideBar from "../MainSidebar";

const SidebarsGroup = () => {
  return (
    <div>
      <MainSideBar />
      <SubSideBar />
    </div>
  );
};

export default SidebarsGroup;
