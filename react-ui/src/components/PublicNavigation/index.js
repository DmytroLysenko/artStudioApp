import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./publicNavigation.module.css";

export default function PublicNavigation() {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <NavLink to="/admin">Про нас</NavLink>
      </li>
      <li className={styles.item}>Наши работы</li>
    </ul>
  );
}
