import { IoMdArrowDropupCircle } from "react-icons/io";
import styles from "./index.module.scss";
import { CSSTransition } from "react-transition-group";
import { useIsOpenSidebar } from "@/features/sidebar-navigation/contexts/isOpenSidebarProvider";
import { useAppDispatch } from "@/shared/hooks/redux";
import { collectionsSlice, filtersSlice } from "@/entities/Product";
import { useEffect } from "react";

const SubSideBar = ({
  options,
}: {
  options:
    | {
        gender: string;
        data: {
          names: string[];
          configuration_names: string[];
          ids: number[];
        };
      }
    | undefined;
}) => {
  const { isOpenSubSidebar, toggleSubSidebar, toggleMainSidebar } =
    useIsOpenSidebar();

  const dispatch = useAppDispatch();

  return (
    <CSSTransition
      in={isOpenSubSidebar}
      timeout={200}
      classNames={{
        enterActive: styles["sidebar__container--enter-active"],
        enterDone: styles["sidebar__container--enter-done"],
        exitActive: styles["sidebar__container--exit-active"],
        exitDone: styles["sidebar__container--exit-done"],
      }}
    >
      <div className={styles.sidebar__container}>
        <div className={styles.navlink}>
          <div
            onClick={() => {
              toggleSubSidebar(false);
            }}
            className={styles.navlink__wrapper}
          >
            <div className={styles.navlink__title}>Go Back</div>
            <IoMdArrowDropupCircle />
          </div>

          {options &&
            options.data.names.map((name, index) => (
              <div
                onClick={() => {
                  const selectedCollectionId = options.data.ids[index];
                  dispatch(
                    collectionsSlice.actions.setSelectedCollection({
                      id: selectedCollectionId,
                    })
                  );
                  toggleSubSidebar();
                  toggleMainSidebar();
                }}
                key={name}
                className={styles.navlink__wrapper}
              >
                <div className={styles.navlink__title}>{name}</div>
                <IoMdArrowDropupCircle />
              </div>
            ))}
        </div>
      </div>
    </CSSTransition>
  );
};

export default SubSideBar;
