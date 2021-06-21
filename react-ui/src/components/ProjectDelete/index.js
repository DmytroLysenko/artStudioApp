import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { deleteProject } from "../../redux/projects/projectOperations";

import styles from "./projectDelete.module.css";

export default function ProjectDelete({ project }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);

  // TODO: Закрыть текущий проект и перейти в список оставшихся проектов
  const handleDeleteProject = () => {
    if (window.confirm(`Вы действительно хотите удалить проект?`))
      dispatch(deleteProject({ projectId: project._id }));
    history.push("/admin/projects");
  };
  // TODO: Add this type btn to UI Button
  return (
    <div className={styles.container}>
      <p
        className={toggle ? styles.toggleActive : styles.toggleInactive}
        onClick={() => setToggle((prev) => !prev)}
      >
        Удалить проект
      </p>

      {toggle && (
        <>
          <button
            type="button"
            className={styles.deleteBtn}
            onClick={handleDeleteProject}
          >
            Удалить проект
          </button>
        </>
      )}
    </div>
  );
}
