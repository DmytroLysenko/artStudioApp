import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import SelectedImagesPreview from "./SelectedImagesPreview";
import Button from "../../../../common/UI/Button";

import { addImagesToProject } from "../../../../redux/projects/projectOperations";
import { getCurrentProject } from "../../../../redux/projects/projectSelectors";

import styles from "./addImagesToProject.module.css";

export default function AddImagesToProject({ onClose }) {
  const dispatch = useDispatch();

  const currentProject = useSelector(getCurrentProject);

  const [images, setImages] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const imageTypes = ["image/jpeg", "image/jpg", "image/png"];

    if (images.length === 0) return;

    for (let i = 0; i < images.length; i++) {
      if (!imageTypes.includes(images[i].type)) {
        setImages([]);
        alert("Недопустимый формат файла (jpeg, jpg, png)");
        return;
      }
    }

    dispatch(addImagesToProject({ images, projectId: currentProject._id }));
    onClose();
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
      onReset={() => setImages([])}
    >
      <h2 className={styles.projectName}>{currentProject.name}</h2>
      <p className={styles.characteristic}>(Изображения)</p>
      <label className={styles.label}>
        Добавить фото
        <input
          className={styles.input}
          name="files"
          type="file"
          accept="image/*"
          multiple
          onChange={(e) => setImages(Object.values(e.target.files))}
        />
      </label>
      <SelectedImagesPreview images={images} />
      {images.length > 0 && (
        <div className={styles.controls}>
          <Button type="submit" bgImage="submit" className={styles.btnSubmit} />
          <Button type="reset" bgImage="reset" className={styles.btnReset} />
        </div>
      )}
    </form>
  );
}
