import React, { useState } from "react";
import { useDispatch } from "react-redux";

import Button from "../../common/UI/Button";

import { openModalSetDescriptionToProject } from "../../redux/modals/modalActions";

import styles from "./projectDescription.module.css";

export default function ProjectDescription({ project }) {
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);

  const handleSetDescription = () => {
    dispatch(openModalSetDescriptionToProject());
  };

  return (
    <div className={styles.container}>
      <p
        className={toggle ? styles.toggleActive : styles.toggleInactive}
        onClick={() => setToggle((prev) => !prev)}
      >
        Описание
      </p>

      {toggle && (
        <>
          <p className={styles.description}>{project.description}</p>

          <Button
            bgImage="edit"
            className={styles.btn}
            onClick={handleSetDescription}
          />
        </>
      )}
    </div>
  );
}
