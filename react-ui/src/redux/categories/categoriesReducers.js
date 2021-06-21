import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import {
  getAllCategoriesSuccess,
  addNewCategorySuccess,
} from "./categoriesActions";

const all = createReducer([], {
  [getAllCategoriesSuccess]: (_, { payload }) => payload,
  [addNewCategorySuccess]: (state, { payload }) => [...state, payload],
});

export default combineReducers({
  all,
});
