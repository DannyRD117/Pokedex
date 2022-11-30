import React from "react";
import styles from "./Type.module.css";

const Type = (props) => {
  return (
    <div className={`${props.className} ${styles["type-box"]}`}>
      <p>{props.name}</p>
    </div>
  );
};

export default Type;
