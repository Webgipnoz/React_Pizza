import React from "react";

import styles from "./Search.module.scss";

const Search = ({ searchValue, setSearchValue }) => {
  return (
    <div>
      <input className={styles.root} placeholder="Поиск пиццы..."></input>;
    </div>
  );
};

export default Search;
