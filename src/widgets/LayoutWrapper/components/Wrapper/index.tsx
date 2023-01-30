import styles from "./index.module.scss";
import Header from "../Header";
import SideBar from "../SideBar";
import { ReactNode } from "react";
import NavigationBar from "../NavigationBar";

interface WrapperProps {
  children: ReactNode | ReactNode[];
}

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <div>
      <Header />
      <NavigationBar />
      <SideBar />
      {children}
    </div>
  );
};

export default Wrapper;
