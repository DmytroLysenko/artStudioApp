import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { getAllCategories } from "../../../redux/categories/categoriesSelectors";

import styles from "./projectItem.module.css";

export default function ProjectsTableItem({ project }) {
  const allCategories = useSelector(getAllCategories);
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <span className={styles.itemTitle}>Название</span>
        <span>{project.name}</span>
      </li>
      <li className={styles.item}>
        <span className={styles.itemTitle}>Категория</span>
        <span>
          {
            allCategories.find(
              (category) => category._id === project.categoryId
            ).name
          }
        </span>
      </li>
      <li className={styles.item}>
        <span className={styles.itemTitle}>Количество фото</span>
        <span>{project.images.length}</span>
      </li>
      <li className={styles.item}>
        <span className={styles.itemTitle}>Статус</span>
        <span>{project.isPublished ? "Опубликован" : "Скрыт"}</span>
      </li>
      <li className={styles.item}>
        <Link className={styles.linkTo} to={`/admin/projects/${project._id}`}>
          Подробно
        </Link>
      </li>
    </ul>
  );
}
