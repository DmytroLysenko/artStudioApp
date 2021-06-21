import React from "react";
import classNames from "classnames";

import styles from "./textarea.module.css";

export default function TextArea({ value, className, ...props }) {
  return (
    <textarea
      className={classNames(styles.base, className)}
      value={value}
      {...props}
    />
  );
}
