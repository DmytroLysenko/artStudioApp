import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "../../common/UI/Button";

import { openModalSetTagsToProject } from "../../redux/modals/modalActions";
import { getAllTags } from "../../redux/tags/tagSelectors";

import styles from "./projectTags.module.css";

export default function ProjectTags({ project }) {
  const dispatch = useDispatch();

  const allTags = useSelector(getAllTags);

  const [toggle, setToggle] = useState(false);

  const handleSetTags = () => {
    dispatch(openModalSetTagsToProject());
  };

  return (
    <div className={styles.container}>
      <p
        className={toggle ? styles.toggleActive : styles.toggleInactive}
        onClick={() => setToggle((prev) => !prev)}
      >
        {toggle ? "Теги" : `Теги (${project.tags.length})`}
      </p>

      {toggle ? (
        project.tags.length > 0 ? (
          <>
            <ul className={styles.list}>
              {project.tags.map((id) => (
                <li className={styles.item} key={id}>
                  {allTags.find((tag) => tag._id === id).tag}
                </li>
              ))}
            </ul>
            <div>
              <Button
                bgImage="edit"
                className={styles.btn}
                onClick={handleSetTags}
              />
            </div>
          </>
        ) : (
          <>
            <p className={styles.noData}>Нет тегов для этого проекта</p>
            <Button
              bgImage="edit"
              className={styles.btn}
              onClick={handleSetTags}
            />
          </>
        )
      ) : null}
    </div>
  );
}
