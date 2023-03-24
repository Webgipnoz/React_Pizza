import React from "react";

import styles from "./NotFoundBlock.module.scss";

console.log(styles);

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span className={styles.span}>😕</span>
        <br />
        Ничего не найдено!
      </h1>
      <p className={styles.description}>
        К сожелению данная страница отсутствует в нашем магазине
      </p>
    </div>
  );
};

export default NotFoundBlock;
