import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import {
  getCurrentUserRequest,
  getCurrentUserError,
  getCurrentUserSuccess,
} from "../auth/authActions";

import {
  getAllProjectsRequest,
  getAllProjectsError,
  getAllProjectsSuccess,
  getPublishedProjectsRequest,
  getPublishedProjectsError,
  getPublishedProjectsSuccess,
} from "../projects/projectActions";

import {
  getAllTagsRequest,
  getAllTagsError,
  getAllTagsSuccess,
} from "../tags/tagActions";

const allTags = createReducer(false, {
  [getAllTagsRequest]: () => true,
  [getAllTagsError]: () => false,
  [getAllTagsSuccess]: () => false,
});

const auth = createReducer(false, {
  [getCurrentUserRequest]: () => true,
  [getCurrentUserError]: () => false,
  [getCurrentUserSuccess]: () => false,
});

const allProjects = createReducer(false, {
  [getAllProjectsRequest]: () => true,
  [getAllProjectsError]: () => false,
  [getAllProjectsSuccess]: () => false,
  [getPublishedProjectsRequest]: () => true,
  [getPublishedProjectsError]: () => false,
  [getPublishedProjectsSuccess]: () => false,
});

export default combineReducers({
  auth,
  allTags,
  allProjects,
});
