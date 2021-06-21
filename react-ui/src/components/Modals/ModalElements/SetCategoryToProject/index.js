import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Button from "../../../../common/UI/Button";

import { getCurrentProject } from "../../../../redux/projects/projectSelectors";
import { setCategoryToProject } from "../../../../redux/projects/projectOperations";
import { getAllCategories } from ".././../../../redux/categories/categoriesSelectors";

import styles from "./setCategoryToProject.module.css";

export default function SetCategoryToProject({ onClose }) {
  const dispatch = useDispatch();

  const allCategories = useSelector(getAllCategories);
  const currentProject = useSelector(getCurrentProject);

  const [category, setCategory] = useState(currentProject.category);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      setCategoryToProject({
        category,
        projectId: currentProject._id,
      })
    );
    onClose();
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
      onReset={() => setCategory(currentProject.category)}
    >
      <h2 className={styles.projectName}>{currentProject.name}</h2>
      <p className={styles.characteristic}>(Категория)</p>

      {allCategories.length ? (
        <select
          className={styles.category}
          defaultValue={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {allCategories.map((category) => (
            <option key={category._id} value={category._id}>
              {category.name}
            </option>
          ))}
        </select>
      ) : (
        <p className={styles.noData}>Нет созданных категорий</p>
      )}

      <div className={styles.controls}>
        <Button type="submit" bgImage="submit" className={styles.btnSubmit} />
        <Button type="reset" bgImage="reset" className={styles.btnReset} />
      </div>
    </form>
  );
}
