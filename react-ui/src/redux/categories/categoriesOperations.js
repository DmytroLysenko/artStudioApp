import {
  getAllCategoriesRequest,
  getAllCategoriesSuccess,
  getAllCategoriesError,
  addNewCategoryRequest,
  addNewCategorySuccess,
  addNewCategoryError,
} from "./categoriesActions";

import { getCategories, addCategory } from "../../utils/API/artStudioAPI";

export const getAllCategories = () => (dispatch) => {
  dispatch(getAllCategoriesRequest());
  getCategories()
    .then((response) => {
      dispatch(getAllCategoriesSuccess(response.data));
    })
    .catch((err) => dispatch(getAllCategoriesError(err.message)));
};

export const addNewCategory = (category) => (dispatch) => {
  dispatch(addNewCategoryRequest());
  addCategory(category)
    .then((response) => {
      dispatch(addNewCategorySuccess(response.data));
    })
    .catch((err) => dispatch(addNewCategoryError(err.message)));
};
