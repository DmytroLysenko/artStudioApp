import React from "react";

import styles from "./publicLayout.module.css";

export default function PublicLayout({ children }) {
  return <div className={styles.container}>{children}</div>;
}
