import { createAction } from "@reduxjs/toolkit";

export const getAllCategoriesRequest = createAction("categories/getAllRequest");
export const getAllCategoriesSuccess = createAction("categories/getAllSuccess");
export const getAllCategoriesError = createAction("categories/getAllError");

export const addNewCategoryRequest = createAction("categories/addNewRequest");
export const addNewCategorySuccess = createAction("categories/addNewSuccess");
export const addNewCategoryError = createAction("categories/addNewError");
