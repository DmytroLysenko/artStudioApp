import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import {
  getAllProjectsSuccess,
  getPublishedProjectsSuccess,
  createProjectSuccess,
  deleteProjectSuccess,
  resetCurrentProject,
  setCurrentProject,
  getProjectByIdRequest,
  getProjectByIdError,
  getProjectByIdSuccess,
  deleteImageByGenSuccess,
  addImagesToProjectSuccess,
  setTagsToProjectSuccess,
  setDescriptionToProjectSuccess,
  setCategoryToProjectSuccess,
  setProjectPublishSuccess,
  setProjectNameSuccess,
} from "./projectActions";

// TODO: Check "deleteImageByGenSuccess", "deleteProjectSuccess"
const all = createReducer([], {
  [getAllProjectsSuccess]: (_, { payload }) => payload,
  [getPublishedProjectsSuccess]: (_, { payload }) => payload,
  [createProjectSuccess]: (state, { payload }) => [...state, payload],
  [addImagesToProjectSuccess]: (state, { payload }) => [
    ...state.filter((item) => item._id !== payload._id),
    payload,
  ],
  [deleteImageByGenSuccess]: (state, { payload }) => [
    ...state.filter((item) => item._id !== payload._id),
    payload,
  ],
  [setTagsToProjectSuccess]: (state, { payload }) => [
    ...state.filter((item) => item._id !== payload._id),
    payload,
  ],
  [setDescriptionToProjectSuccess]: (state, { payload }) => [
    ...state.filter((item) => item._id !== payload._id),
    payload,
  ],
  [setCategoryToProjectSuccess]: (state, { payload }) => [
    ...state.filter((item) => item._id !== payload._id),
    payload,
  ],
  [setProjectPublishSuccess]: (state, { payload }) => [
    ...state.filter((item) => item._id !== payload._id),
    payload,
  ],
  [setProjectNameSuccess]: (state, { payload }) => [
    ...state.filter((item) => item._id !== payload._id),
    payload,
  ],
  [deleteProjectSuccess]: (state, { payload }) => [
    ...state.filter((item) => item._id !== payload._id),
  ],
});

const current = createReducer(null, {
  [resetCurrentProject]: () => null,
  [setCurrentProject]: (_, { payload }) => payload,
  [getProjectByIdRequest]: () => null,
  [getProjectByIdError]: () => null,
  [getProjectByIdSuccess]: (_, { payload }) => payload,
  [deleteImageByGenSuccess]: (state, { payload }) => ({
    ...state,
    images: state.images.filter((image) => image.generation !== payload),
  }),
  [addImagesToProjectSuccess]: (_, { payload }) => payload,
  [setTagsToProjectSuccess]: (_, { payload }) => payload,
  [setDescriptionToProjectSuccess]: (_, { payload }) => payload,
  [setCategoryToProjectSuccess]: (_, { payload }) => payload,
  [setProjectPublishSuccess]: (_, { payload }) => payload,
  [setProjectNameSuccess]: (_, { payload }) => payload,
});

export default combineReducers({
  all,
  current,
});
