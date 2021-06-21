import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "../../../../common/UI/Button";

import { setTagsToProject } from "../../../../redux/projects/projectOperations";
import { addNewTag } from "../../../../redux/tags/tagOperations";
import { getCurrentProject } from "../../../../redux/projects/projectSelectors";
import { getAllTags } from "../../../../redux/tags/tagSelectors";

import styles from "./setTagsToProject.module.css";

export default function SetTagsToProject({ onClose }) {
  const dispatch = useDispatch();

  const currentProject = useSelector(getCurrentProject);
  const allTags = useSelector(getAllTags);

  const [tags, setTags] = useState(currentProject.tags);
  const [toggle, setToggle] = useState(false);
  const [newTag, setNewTag] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (tags.length < 1) {
      // TODO: Add notification
      alert("Проект должен иметь хотя бы один тег");
      return;
    }
    dispatch(setTagsToProject({ tags, projectId: currentProject._id }));
    onClose();
  };

  const handleSelectTag = (id) => () => {
    if (tags.includes(id)) {
      setTags((prev) => prev.filter((item) => item !== id));
    } else {
      setTags((prev) => [...prev, id]);
    }
  };

  const handleAddNewTag = () => {
    if (newTag.includes(" ")) {
      // TODO: Add notification, use Regex
      alert("Тег должен состоять из одного слова");
      return;
    }
    if (newTag.length < 3 || newTag.length > 15) {
      // TODO: Add notification
      alert("Длина тега должна быль от 3 до 15 символов");
      return;
    }
    dispatch(addNewTag(newTag));
    setToggle(false);
  };

  const handleNewTagToggle = () => {
    if (toggle) setNewTag("");
    setToggle((prev) => !prev);
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
      onReset={() => setTags(currentProject.tags)}
    >
      <h2 className={styles.projectName}>{currentProject.name}</h2>
      <p className={styles.characteristic}>(Теги)</p>

      {allTags.length > 0 ? (
        <ul className={styles.list}>
          {allTags.map((tag) => (
            <li
              key={tag._id}
              onClick={handleSelectTag(tag._id)}
              className={
                tags.includes(tag._id) ? styles.itemActive : styles.item
              }
            >
              {tag.tag}
            </li>
          ))}
          <li className={styles.item}>
            <Button
              type="button"
              bgImage={toggle ? "remove" : "add"}
              onClick={handleNewTagToggle}
            />
          </li>
        </ul>
      ) : (
        <p className={styles.noData}>Сохраненных тегов нет</p>
      )}
      <div className={styles.controls}>
        <Button type="submit" bgImage="submit" className={styles.btnSubmit} />
        <Button type="reset" bgImage="reset" className={styles.btnReset} />
      </div>
      {toggle && (
        <div className={styles.addNewTagContainer}>
          <input
            className={styles.newTag}
            type="text"
            value={newTag}
            onChange={(e) => setNewTag(e.target.value)}
          />
          <Button type="button" bgImage="add" onClick={handleAddNewTag} />
        </div>
      )}
    </form>
  );
}
