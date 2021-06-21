import React from "react";
import { useSelector, useDispatch } from "react-redux";

import ProjectsTableItem from "./ProjectsTableItem";
import Button from "../../common/UI/Button";

import { getAllProjects } from "../../redux/projects/projectSelectors";
import { openModalCreateProject } from "../../redux/modals/modalActions";

import styles from "./projectsTable.module.css";

export default function ProjectsTable() {
  const dispatch = useDispatch();

  const projects = useSelector(getAllProjects);

  const onCreateProject = () => dispatch(openModalCreateProject());

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Проекты</h2>

      {projects.length ? (
        <ul className={styles.list}>
          {projects.map((project) => (
            <li className={styles.projectItem} key={project._id}>
              <ProjectsTableItem project={project} />
            </li>
          ))}
        </ul>
      ) : (
        <p>Пока проектов нет</p>
      )}
      <Button
        bgImage="add"
        onClick={onCreateProject}
        className={styles.addBtn}
      />
    </div>
  );
}
