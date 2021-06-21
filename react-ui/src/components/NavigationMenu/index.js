import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./navigationMenu.module.css";

export default () => {
  return (
    <ul className={styles.menu}>
      <li>
        <NavLink activeClassName={styles.activeLink} exact to="/admin">
          В начало
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName={styles.activeLink} to="/admin/projects">
          Проекты
        </NavLink>
      </li>
      <li>
        <NavLink
          activeClassName={styles.activeLink}
          to="/admin/settings"
        ></NavLink>
        Настройки
      </li>
      <li>
        <NavLink activeClassName={styles.activeLink} exact to="/">
          На сайт
        </NavLink>
      </li>
    </ul>
  );
};
