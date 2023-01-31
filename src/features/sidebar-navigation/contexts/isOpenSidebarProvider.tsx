import { useState, createContext, useContext } from "react";

export const IsOpenSidebarContext = createContext({
  isOpenMainSidebar: false,
  toggleMainSidebar: (changeTo?: boolean) => {},
  isOpenSubSidebar: false,
  toggleSubSidebar: (changeTo?: boolean) => {},
});

interface IsOpenSidebarProviderProps {
  children: React.ReactNode;
}

export const IsOpenSidebarProvider = ({
  children,
}: IsOpenSidebarProviderProps) => {
  const [isOpenMainSidebar, setIsOpenMainSidebar] = useState(false);
  const [isOpenSubSidebar, setIsOpenSubSidebar] = useState(false);

  const toggleMainSidebar = (changeTo?: boolean) => {
    if (changeTo !== undefined) return setIsOpenMainSidebar(changeTo);
    setIsOpenMainSidebar(!isOpenMainSidebar);
  };
  const toggleSubSidebar = (changeTo?: boolean) => {
    if (changeTo !== undefined) return setIsOpenSubSidebar(changeTo);
    setIsOpenSubSidebar(!isOpenSubSidebar);
  };

  return (
    <IsOpenSidebarContext.Provider
      value={{
        isOpenMainSidebar,
        toggleMainSidebar,
        isOpenSubSidebar,
        toggleSubSidebar,
      }}
    >
      {children}
    </IsOpenSidebarContext.Provider>
  );
};

export const useIsOpenSidebar = () => useContext(IsOpenSidebarContext);

//

// can you create Context with name IsOpenSidebar with two states. Create function for   and also create custom hook for it. add types from typescript

// const [isOpenMainSideNavigation, setIsOpenMainSideNavigation] =
//     useState(false);
//   const [isOpenSubSideNavigation, setIsOpenSubSideNavigation] = useState(false);
