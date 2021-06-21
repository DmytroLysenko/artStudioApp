import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import NavigationButton from "../../common/UI/NavigationButton";
import ProjectImages from "../ProjectImages";
import ProjectTags from "../ProjectTags";
import ProjectDescription from "../ProjectDescription";
import ProjectCategory from "../ProjectCategory";
import ProjectPublish from "../ProjectPublish";
import ProjectStatistics from "../ProjectStatistics";
import ProjectDelete from "../ProjectDelete";

import { getProjectById } from "../../redux/projects/projectSelectors";
import { openModalSetProjectName } from "../../redux/modals/modalActions";
import {
  setCurrentProject,
  resetCurrentProject,
} from "../../redux/projects/projectActions";
import { isAllProjectsLoading } from "../../redux/loading/loadingSelectors";

import styles from "./projectDetails.module.css";

export default function ProjectDetails({ projectId }) {
  const dispatch = useDispatch();

  const project = useSelector(getProjectById(projectId));
  const isProjectsLoading = useSelector(isAllProjectsLoading);

  useEffect(() => {
    dispatch(setCurrentProject(project));
    return () => dispatch(resetCurrentProject());
  }, [dispatch, project]);

  return (
    !isProjectsLoading && (
      <div className={styles.container}>
        <NavigationButton className={styles.navBtn} to="/admin/projects">
          Назад к проектам
        </NavigationButton>
        <h2
          onClick={() => dispatch(openModalSetProjectName())}
          className={styles.name}
        >
          {project.name}
        </h2>
        <ul className={styles.list}>
          <li className={styles.item}>
            <ProjectPublish project={project} />
          </li>
          <li className={styles.item}>
            <ProjectImages project={project} />
          </li>
          <li className={styles.item}>
            <ProjectTags project={project} />
          </li>
          <li className={styles.item}>
            <ProjectDescription project={project} />
          </li>
          <li className={styles.item}>
            <ProjectCategory project={project} />
          </li>
          <li className={styles.item}>
            <ProjectStatistics project={project} />
          </li>
          <li className={styles.item}>
            <ProjectDelete project={project} />
          </li>
        </ul>
      </div>
    )
  );
}
