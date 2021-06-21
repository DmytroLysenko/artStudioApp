import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Button from "../../common/UI/Button";

import { getUser } from "../../redux/auth/authSelectors";
import { logout } from "../../redux/auth/authOperations";
import { getPublishedProjects } from "../../redux/projects/projectOperations";

import styles from "./userPanel.module.css";

export default function UserPanel() {
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const onLogout = () => {
    dispatch(getPublishedProjects());
    dispatch(logout());
  };
  return user ? (
    <div className={styles.container}>
      <p className={styles.login}>{user.email}</p>
      <Button bgImage="logout" onClick={onLogout} />
    </div>
  ) : null;
}
