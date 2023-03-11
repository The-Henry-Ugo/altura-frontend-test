import {
  IoEyeOutline,
  IoOptionsOutline,
  IoSearchOutline,
} from "react-icons/io5";
import styles from "../styles/SearchHeader.module.css";

const SearchHeader = () => {
  return (
    <div className={styles.search_header}>
      <form className={styles.input_form} method="get" action="#">
        <div className={styles.input_container}>
          <input
            type="search"
            name="search"
            placeholder="Search by Address, Domain name..."
          />
          <button type="submit">
            <p>Search</p>
            <IoSearchOutline className={styles.search_icon} />
          </button>
        </div>
        <div className={styles.input_secondary_btns}>
          <div className={styles.search_bar_secondary_btn}>
            <p>Sort by</p>
            <IoOptionsOutline />
          </div>
          <div className={styles.search_bar_secondary_btn}>
            <p>Watch</p>
            <IoEyeOutline />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchHeader;
