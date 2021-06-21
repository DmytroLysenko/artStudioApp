import React from "react";

import styles from "./authLayout.module.css";

export default function AuthLayout({ children }) {
  return <div className={styles.container}>{children}</div>;
}
