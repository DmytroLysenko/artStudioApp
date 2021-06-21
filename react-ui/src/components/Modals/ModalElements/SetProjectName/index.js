import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Button from "../../../../common/UI/Button";

import { getCurrentProject } from "../../../../redux/projects/projectSelectors";
import { setProjectName } from "../../../../redux/projects/projectOperations";

import styles from "./setProjectName.module.css";

export default function SetProjectName({ onClose }) {
  const dispatch = useDispatch();

  const currentProject = useSelector(getCurrentProject);

  const [name, setName] = useState(currentProject.name);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      setProjectName({
        name,
        projectId: currentProject._id,
      })
    );
    onClose();
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
      onReset={() => setName(currentProject.name)}
    >
      <h2 className={styles.projectName}>{currentProject.name}</h2>
      <p className={styles.characteristic}>(Название проекта)</p>

      <input
        type="text"
        className={styles.name}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div className={styles.controls}>
        <Button type="submit" bgImage="submit" className={styles.btnSubmit} />
        <Button type="reset" bgImage="reset" className={styles.btnReset} />
      </div>
    </form>
  );
}
