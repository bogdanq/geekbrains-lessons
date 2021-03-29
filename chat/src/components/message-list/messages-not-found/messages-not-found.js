import React from "react";
import styles from "./messages-not-found.module.css";

export const MessagesNotFound = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.noData}>
        <h1>Нет сообщений</h1>
      </div>
    </div>
  );
};
