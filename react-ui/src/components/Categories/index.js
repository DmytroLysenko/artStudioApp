import React from "react";
import { useSelector } from "react-redux";

import {
  getAllCategories,
  isCategoryValid,
} from "../../redux/categories/categoriesSelectors";

import styles from "./categories.module.css";

function Categories({ defaultValue, ...props }) {
  const allCategories = useSelector(getAllCategories);

  const setDefaultValue = () => {
    if (isCategoryValid(defaultValue)) return defaultValue;
    return allCategories[0]._id;
  };

  return (
    <div className={styles.container}>
      {allCategories.length > 0 ? (
        <select
          {...props}
          defaultValue={setDefaultValue()}
          className={styles.list}
        >
          {allCategories.map((category) => (
            <option
              className={styles.item}
              value={category._id}
              key={category._id}
            >
              {category.name}
            </option>
          ))}
        </select>
      ) : (
        <p>Нет добавленных категорий. Выполните добавление в настройках</p>
      )}
    </div>
  );
}

Categories.defaultValue = {
  value: null,
};

export default Categories;
