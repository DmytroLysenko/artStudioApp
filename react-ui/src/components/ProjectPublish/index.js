import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { setProjectPublish } from "../../redux/projects/projectOperations";

import styles from "./projectPublish.module.css";

export default function ProjectPublish({ project }) {
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);

  const handleSetPublish = () => {
    if (
      window.confirm(
        `Вы действительно хотите ${
          project.isPublished ? "выключить" : "включить"
        } публикацию?`
      )
    )
      dispatch(
        setProjectPublish({
          publish: !project.isPublished,
          projectId: project._id,
        })
      );
  };
  // TODO: Add this type btn to UI Button
  return (
    <div className={styles.container}>
      <p
        className={toggle ? styles.toggleActive : styles.toggleInactive}
        onClick={() => setToggle((prev) => !prev)}
      >
        {toggle
          ? "Публикация"
          : `Публикация (${project.isPublished ? "Вкл" : "Выкл"})`}
      </p>

      {toggle && (
        <>
          <p className={styles.info}>
            На данный момент проект{" "}
            {project.isPublished ? "опубликован" : "скрыт"}
          </p>
          <button
            type="button"
            className={project.isPublished ? styles.offAirBtn : styles.onAirBtn}
            onClick={handleSetPublish}
          >
            {project.isPublished ? "Скрыть" : "Опубликовать"}
          </button>
        </>
      )}
    </div>
  );
}
