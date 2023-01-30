import { FilterOptionsInput } from "@/entities/Product/models/filters";
import styles from "./index.module.scss";

interface FilterBarProps {
  isOpen: boolean;
  title: string;
  options: {
    label: string;
    isActive: boolean;
  }[];
  selectOption: (option: string) => void;
}

const FilterBar = ({
  isOpen,
  title,
  options,
  selectOption,
}: FilterBarProps) => {
  return (
    <div style={{ height: isOpen ? 120 : 0 }} className={styles.wrapper}>
      <div className={styles.filterbar}>
        <div className={styles.filterbar__title}>{title}</div>
        <div className={styles.filterbar__options}>
          {options.map((option) => (
            <span
              key={option.label}
              style={option.isActive ? { textDecoration: "underline" } : {}}
              className={styles.filterbar__label}
              onClick={() => selectOption(option.label)}
            >
              {option.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
