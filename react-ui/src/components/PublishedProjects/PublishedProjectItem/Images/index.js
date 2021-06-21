import React from "react";

import styles from "./images.module.css";

export default function Images({ images, key }) {
  const handleViewProjectImages = () => {
    console.log("Open view images modal");
  };

  return (
    <div className={styles.container} onClick={handleViewProjectImages}>
      {images.map((image, idx) => {
        if (idx > 2) return null;
        return (
          <img
            key={image.id}
            className={styles[`item${idx}`]}
            src={image.mediaLink}
          />
        );
      })}
      {images.length > 3 && (
        <p className={styles.itemLast}>Остальные {images.length - 3} ...</p>
      )}
    </div>
  );
}
