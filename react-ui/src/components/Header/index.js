import React from "react";
import { useSelector } from "react-redux";

import UserPanel from "../UserPanel";
import Logo from "../Logo";
import NavigationMenu from "../NavigationMenu";

import styles from "./header.module.css";

import { getUser } from "../../redux/auth/authSelectors";

export default function Header() {
  const user = useSelector(getUser);
  return (
    <div className={styles.header}>
      <div className={styles.wrapper}>
        <Logo />
        {user && <UserPanel />}
      </div>

      <NavigationMenu />
    </div>
  );
}
