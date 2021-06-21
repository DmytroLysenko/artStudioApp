import React from "react";

import Header from "../../Header";

import styles from "./adminLayout.module.css";

export default function AdminLayout({ children }) {
  return (
    <div className={styles.container}>
      <Header />
      {children}
    </div>
  );
}
