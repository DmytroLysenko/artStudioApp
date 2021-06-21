import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Button from "../../../../common/UI/Button";

import { getCurrentProject } from "../../../../redux/projects/projectSelectors";
import { setDescriptionToProject } from "../../../../redux/projects/projectOperations";

import styles from "./setDescriptionToProject.module.css";

export default function SetDescriptionToProject({ onClose }) {
  const dispatch = useDispatch();

  const currentProject = useSelector(getCurrentProject);

  const [desc, setDesc] = useState(currentProject.description);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      setDescriptionToProject({
        description: desc,
        projectId: currentProject._id,
      })
    );
    onClose();
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
      onReset={() => setDesc(currentProject.description)}
    >
      <h2 className={styles.projectName}>{currentProject.name}</h2>
      <p className={styles.characteristic}>(Описание)</p>

      <textarea
        name="description"
        className={styles.description}
        placeholder="Enter description here..."
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      ></textarea>

      <div className={styles.controls}>
        <Button type="submit" bgImage="submit" className={styles.btnSubmit} />
        <Button type="reset" bgImage="reset" className={styles.btnReset} />
      </div>
    </form>
  );
}
