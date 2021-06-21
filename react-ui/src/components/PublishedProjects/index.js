import React from "react";
import { useSelector } from "react-redux";

import PublishedProjectItem from "./PublishedProjectItem";

import { getAllProjects } from "../../redux/projects/projectSelectors";

import styles from "./publishedProjects.module.css";

export default function PublishedProjects() {
  const projects = useSelector(getAllProjects);

  return (
    projects.length > 0 && (
      <ul className={styles.list}>
        {projects.map((project) => (
          <li key={project._id} className={styles.item}>
            <PublishedProjectItem project={project} />
          </li>
        ))}
      </ul>
    )
  );
}
