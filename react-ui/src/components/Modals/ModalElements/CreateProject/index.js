import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "../../../../common/UI/Button";
import TextArea from "../../../../common/UI/TextArea";
import Categories from "../../../Categories";

import { createNewProject } from "../../../../redux/projects/projectOperations";
import { getAllCategories } from "../../../../redux/categories/categoriesSelectors";

import styles from "./createProject.module.css";

export default function CreateProject({ onClose }) {
  const dispatch = useDispatch();

  const allCategories = useSelector(getAllCategories);

  const defaultCategory =
    allCategories.length > 0 ? allCategories[0]._id : null;

  const [name, setName] = useState("");
  const [categoryId, setCategoryId] = useState(defaultCategory);
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProject = {
      name,
      categoryId,
      description,
    };

    if (isNewProjectValid(newProject)) {
      dispatch(createNewProject(newProject));
      onClose();
    } else {
      alert("Ошибка данных нового проекта");
    }
  };

  const handleReset = () => {
    setName("");
    setCategoryId(defaultCategory);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} onReset={handleReset}>
      <h2 className={styles.title}>Создать новый проект</h2>

      <input
        type="text"
        className={styles.name}
        value={name}
        placeholder="Имя проекта"
        onChange={(e) => setName(e.target.value)}
      />

      <Categories
        defaultValue={categoryId}
        onChange={(e) => setCategoryId(e.target.value)}
      />

      <TextArea
        placeholder="Описание проекта"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <div className={styles.controls}>
        <Button type="submit" bgImage="submit" className={styles.btnSubmit} />
        <Button type="reset" bgImage="reset" className={styles.btnReset} />
      </div>
    </form>
  );
}
// TODO: Complite validation function
function isNewProjectValid(project) {
  const { name, categoryId } = project;

  if (!name || name.length < 3) return false;
  if (!categoryId) return false;

  return true;
}
