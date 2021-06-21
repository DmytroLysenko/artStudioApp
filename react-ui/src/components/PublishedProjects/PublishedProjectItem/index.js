import React from "react";
import { useSelector } from "react-redux";

import { getAllTags } from "../../../redux/tags/tagSelectors";
import { getAllCategories } from "../../../redux/categories/categoriesSelectors";

import Images from "./Images";

import styles from "./publishedProjectItem.module.css";

export default function PublishedProjectItem({ project }) {
  const allTags = useSelector(getAllTags);
  const allCategories = useSelector(getAllCategories);



  return (
    <div className={styles.container}>
      <h3 className={styles.name}>{project.name}</h3>
      <p className={styles.description}>{project.description}</p>
      {project.tags.length > 0 && (
        <ul className={styles.tagsList}>
          {project.tags.map((tagId) => (
            <li key={tagId}>{allTags.find((tag) => tag._id === tagId).tag} </li>
          ))}
        </ul>
      )}
      <p className={styles.category}>
        {allCategories.find((item) => item._id === project.categoryId).name}
      </p>
      <Images images={project.images}/>
    </div>
  );
}
