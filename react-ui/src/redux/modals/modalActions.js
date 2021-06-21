import { createAction } from "@reduxjs/toolkit";

export const openModalCreateProject = createAction("modals/createProject-open");
export const closeModalCreateProject = createAction(
  "modals/createProject-close"
);

export const openModalAddImagesToProject = createAction(
  "modals/addImagesToProject-open"
);
export const closeModalAddImagesToProject = createAction(
  "modals/addImagesToProject-close"
);

export const openModalSetTagsToProject = createAction(
  "modals/setTagsToProject-open"
);
export const closeModalSetTagsToProject = createAction(
  "modals/setTagsToProject-close"
);

export const openModalSetDescriptionToProject = createAction(
  "modals/setDescriptionToProject-open"
);
export const closeModalSetDescriptionToProject = createAction(
  "modals/setDescriptionToProject-close"
);

export const openModalSetCategoryToProject = createAction(
  "modals/setCategoryToProject-open"
);
export const closeModalSetCategoryToProject = createAction(
  "modals/setCategoryToProject-close"
);

export const openModalSetProjectName = createAction(
  "modals/setProjectName-open"
);
export const closeModalSetProjectName = createAction(
  "modals/setProjectName-close"
);

export const openModalSwiper = createAction("modals/swiper-open");
export const closeModalSwiper = createAction("modals/swiper-close");
