import React from "react";

import styles from "./categories.module.css";

export default function Select({ options, defaultValue, className, ...props }) {
  return (
    <select
      defaultValue={defaultValue ? defaultValue : options[0]._id}
      className={styles.list}
      {...props}
    >
      {options.map((item) => (
        <option className={styles.item} value={item._id} key={item._id}>
          {item.name}
        </option>
      ))}
    </select>
  );
}
