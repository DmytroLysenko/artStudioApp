import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "../../common/UI/Button";

import { openModalSetCategoryToProject } from "../../redux/modals/modalActions";
import { getAllCategories } from "../../redux/categories/categoriesSelectors";

import styles from "./projectCategory.module.css";

export default function ProjectCategory({ project }) {
  const dispatch = useDispatch();

  const allCategories = useSelector(getAllCategories);

  const [toggle, setToggle] = useState(false);

  const handleSetCategory = () => {
    dispatch(openModalSetCategoryToProject());
  };

  return (
    <div className={styles.conatiner}>
      <p
        className={toggle ? styles.toggleActive : styles.toggleInactive}
        onClick={() => setToggle((prev) => !prev)}
      >
        Категория
      </p>

      {toggle && (
        <>
          <p className={styles.category}>
            {
              allCategories.find(
                (category) => category._id === project.categoryId
              ).name
            }
          </p>

          <Button
            bgImage="edit"
            className={styles.btn}
            onClick={handleSetCategory}
          />
        </>
      )}
    </div>
  );
}
