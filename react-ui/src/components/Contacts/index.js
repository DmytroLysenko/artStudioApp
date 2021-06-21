import React from "react";

import styles from "./contacts.module.css";

export default function Contacts() {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>Facebook</li>
      <li className={styles.item}>Instagram</li>
      <li className={styles.item}>YouTube</li>
      <li className={styles.item}>Email</li>
      <li className={styles.item}>Phone</li>
    </ul>
  );
}
