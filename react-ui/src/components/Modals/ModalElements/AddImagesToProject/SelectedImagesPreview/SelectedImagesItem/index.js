import React, { useState } from "react";

import styles from "./selectedImagesItem.module.css";

export default function SelectedImagesItem({ image }) {
  const [imgSrc, setImgSrc] = useState(null);
  const reader = new FileReader();

  reader.onloadend = (e) => {
    setImgSrc(reader.result);
  };

  reader.readAsDataURL(image);

  return (
    imgSrc && (
      <div className={styles.container}>
        <img src={imgSrc} alt="test" />
      </div>
    )
  );
}
