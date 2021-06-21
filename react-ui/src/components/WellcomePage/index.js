import React from "react";

import PublicHeader from "../PublicHeader";

import styles from "./wellcomePage.module.css";

export default function WellcomePage() {
  return (
    <div className={styles.container}>
      <PublicHeader />
      <h2 className={styles.title}>Wellcome Page</h2>
    </div>
  );
}
