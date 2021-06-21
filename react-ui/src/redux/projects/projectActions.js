import { createAction } from "@reduxjs/toolkit";

export const getAllProjectsRequest = createAction("projects/getAllRequest");
export const getAllProjectsSuccess = createAction("projects/getAllSuccess");
export const getAllProjectsError = createAction("projects/getAllError");

export const getPublishedProjectsRequest = createAction(
  "projects/getPublishedRequest"
);
export const getPublishedProjectsSuccess = createAction(
  "projects/getPublishedSuccess"
);
export const getPublishedProjectsError = createAction(
  "projects/getPublishedError"
);

export const getProjectByIdRequest = createAction("projects/getByIdRequest");
export const getProjectByIdSuccess = createAction("projects/getByIdSuccess");
export const getProjectByIdError = createAction("projects/getByIdError");

export const setCurrentProject = createAction("projects/setCurrent");
export const resetCurrentProject = createAction("projects/resetCurrent");

export const createProjectRequest = createAction("projects/createRequest");
export const createProjectSuccess = createAction("projects/createSuccess");
export const createProjectError = createAction("projects/createError");

export const addImagesToProjectRequest = createAction(
  "projects/addImagesRequest"
);
export const addImagesToProjectSuccess = createAction(
  "projects/addImagesSuccess"
);
export const addImagesToProjectError = createAction("projects/addImagesError");

export const setTagsToProjectRequest = createAction("projects/setTagsRequest");
export const setTagsToProjectSuccess = createAction("projects/setTagsSuccess");
export const setTagsToProjectError = createAction("projects/setTagsError");

export const setDescriptionToProjectRequest = createAction(
  "projects/setDescriptionRequest"
);
export const setDescriptionToProjectSuccess = createAction(
  "projects/setDescriptionSuccess"
);
export const setDescriptionToProjectError = createAction(
  "projects/setDescriptionError"
);

export const setCategoryToProjectRequest = createAction(
  "projects/setCategoryRequest"
);
export const setCategoryToProjectSuccess = createAction(
  "projects/setCategorySuccess"
);
export const setCategoryToProjectError = createAction(
  "projects/setCategoryError"
);

export const setProjectPublishRequest = createAction(
  "projects/setPublishRequest"
);
export const setProjectPublishSuccess = createAction(
  "projects/setPublishSuccess"
);
export const setProjectPublishError = createAction("projects/setPublishError");

export const setProjectNameRequest = createAction("projects/setNameRequest");
export const setProjectNameSuccess = createAction("projects/setNameSuccess");
export const setProjectNameError = createAction("projects/setNameError");

export const deleteProjectRequest = createAction("projects/deleteRequest");
export const deleteProjectSuccess = createAction("projects/deleteSuccess");
export const deleteProjectError = createAction("projects/deleteError");

export const deleteImageByGenRequest = createAction(
  "projects/deleteImageByGenRequest"
);
export const deleteImageByGenSuccess = createAction(
  "projects/deleteImageByGenSuccess"
);
export const deleteImageByGenError = createAction(
  "projects/deleteImageByGenError"
);
