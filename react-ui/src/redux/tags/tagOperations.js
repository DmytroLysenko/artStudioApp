import {
  getAllTagsRequest,
  getAllTagsSuccess,
  getAllTagsError,
  addNewTagRequest,
  addNewTagSuccess,
  addNewTagError,
} from "./tagActions";

import { getTags, addTag } from "../../utils/API/artStudioAPI";

export const getAllTags = () => (dispatch) => {
  dispatch(getAllTagsRequest());
  getTags()
    .then((response) => {
      dispatch(getAllTagsSuccess(response.data));
    })
    .catch((err) => dispatch(getAllTagsError(err.message)));
};

export const addNewTag = (tag) => (dispatch) => {
  dispatch(addNewTagRequest());
  addTag(tag)
    .then((response) => {
      dispatch(addNewTagSuccess(response.data));
    })
    .catch((err) => dispatch(addNewTagError(err.message)));
};
