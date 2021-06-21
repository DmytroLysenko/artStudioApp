import React from "react";

import SelectedImagesItem from "./SelectedImagesItem";

export default function SelectedImagesPreview({ images }) {
  return (
    images.length !== 0 && (
      <ul>
        {images.map((image) => (
          <li key={image.name}>
            <SelectedImagesItem image={image} />
          </li>
        ))}
      </ul>
    )
  );
}
  