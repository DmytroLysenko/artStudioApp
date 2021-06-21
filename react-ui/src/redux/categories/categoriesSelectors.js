import { createSelector } from "@reduxjs/toolkit";

export const getAllCategories = (state) => state.ui.categories.all;

export const isCategoryValid = (categoryId) =>
  createSelector([getAllCategories], (allCategories) =>
    allCategories.map((category) => category._id).includes(categoryId)
      ? true
      : false
  );
