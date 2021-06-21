import React, { useState } from "react";
import { useDispatch } from "react-redux";

import Button from "../../common/UI/Button";

import { deleteImageByGen } from "../../redux/projects/projectOperations";
import { openModalAddImagesToProject } from "../../redux/modals/modalActions";

import styles from "./projectImages.module.css";

function ProjectImages({ project }) {
  const dispatch = useDispatch();

  const [toggle, setToggle] = useState(false);

  const handleDeleteImage = (image) => () => {
    if (window.confirm("Удалить изображение?")) {
      dispatch(
        deleteImageByGen({ imageGen: image.generation, projectId: project._id })
      );
    }
  };

  const handleAddImages = () => {
    dispatch(openModalAddImagesToProject());
  };

  return (
    <div className={styles.container}>
      <p
        className={toggle ? styles.toggleActive : styles.toggleInactive}
        onClick={() => setToggle((prev) => !prev)}
      >
        {toggle ? "Изображения" : `Изображения (${project.images.length})`}
      </p>

      {toggle ? (
        project.images.length > 0 ? (
          <ul>
            {project.images.map((image) => (
              <li className={styles.item} key={image.id}>
                <img src={image.mediaLink} alt="asd" />
                <Button
                  bgImage="delete"
                  className={styles.imageDeleteBtn}
                  onClick={handleDeleteImage(image)}
                />
              </li>
            ))}
            <li className={styles.item}>
              <Button
                bgImage="add"
                className={styles.addBtn}
                onClick={handleAddImages}
              />
            </li>
          </ul>
        ) : (
          <>
            <p className={styles.noData}>Нет изображений в этом проекте</p>
            <Button
              bgImage="add"
              className={styles.addBtn}
              onClick={handleAddImages}
            />
          </>
        )
      ) : null}
    </div>
  );
}

ProjectImages.defaultProps = {
  images: [],
};

export default ProjectImages;
