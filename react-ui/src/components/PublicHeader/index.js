import React from "react";

import Logo from "../Logo";
import PublicNavigation from "../PublicNavigation";
import Contacts from "../Contacts";

import styles from "./publicHeader.module.css";

export default function PublicHeader() {
  return (
    <div className={styles.container}>
      <div className={styles.upContainer}>
        <Logo />
        <PublicNavigation />
      </div>

      <Contacts />
    </div>
  );
}
