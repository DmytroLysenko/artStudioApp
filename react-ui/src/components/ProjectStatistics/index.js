import React, { useState } from "react";

import styles from "./projectStatistics.module.css";

export default function ProjectStatistics({ project }) {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={styles.container}>
      <p
        className={toggle ? styles.toggleActive : styles.toggleInactive}
        onClick={() => setToggle((prev) => !prev)}
      >
        Статистика
      </p>

      {toggle && (
        <>
          <p className={styles.statistics}>Статистика о проекте</p>
        </>
      )}
    </div>
  );
}
