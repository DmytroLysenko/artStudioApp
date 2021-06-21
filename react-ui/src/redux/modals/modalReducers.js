import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import * as modalActions from "./modalActions";

const isOpen = createReducer(false, {
  [modalActions.openModalCreateProject]: () => true,
  [modalActions.closeModalCreateProject]: () => false,
  [modalActions.openModalAddImagesToProject]: () => true,
  [modalActions.closeModalAddImagesToProject]: () => false,
  [modalActions.openModalSetTagsToProject]: () => true,
  [modalActions.closeModalSetTagsToProject]: () => false,
  [modalActions.openModalSetDescriptionToProject]: () => true,
  [modalActions.closeModalSetDescriptionToProject]: () => false,
  [modalActions.openModalSetCategoryToProject]: () => true,
  [modalActions.closeModalSetCategoryToProject]: () => false,
  [modalActions.openModalSetProjectName]: () => true,
  [modalActions.closeModalSetProjectName]: () => false,
  [modalActions.openModalSwiper]: () => true,
  [modalActions.closeModalSwiper]: () => false,
});

const createProject = createReducer(false, {
  [modalActions.openModalCreateProject]: () => true,
  [modalActions.closeModalCreateProject]: () => false,
});

const addImagesToProject = createReducer(false, {
  [modalActions.openModalAddImagesToProject]: () => true,
  [modalActions.closeModalAddImagesToProject]: () => false,
});

const setTagsToProject = createReducer(false, {
  [modalActions.openModalSetTagsToProject]: () => true,
  [modalActions.closeModalSetTagsToProject]: () => false,
});

const setDescriptionToProject = createReducer(false, {
  [modalActions.openModalSetDescriptionToProject]: () => true,
  [modalActions.closeModalSetDescriptionToProject]: () => false,
});

const setCategoryToProject = createReducer(false, {
  [modalActions.openModalSetCategoryToProject]: () => true,
  [modalActions.closeModalSetCategoryToProject]: () => false,
});

const setProjectName = createReducer(false, {
  [modalActions.openModalSetProjectName]: () => true,
  [modalActions.closeModalSetProjectName]: () => false,
});

const swiper = createReducer(false, {
  [modalActions.openModalSwiper]: (_, { payload }) => payload,
  [modalActions.closeModalSwiper]: () => false,
});

const modals = combineReducers({
  isOpen,
  createProject,
  addImagesToProject,
  setTagsToProject,
  setDescriptionToProject,
  setCategoryToProject,
  setProjectName,
  swiper,
});
export default modals;
