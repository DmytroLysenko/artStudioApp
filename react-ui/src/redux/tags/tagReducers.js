import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import { getAllTagsSuccess, addNewTagSuccess, selectTag } from "./tagActions";
import { createProjectSuccess } from "../projects/projectActions";

const all = createReducer([], {
  [getAllTagsSuccess]: (_, { payload }) => payload,
  [addNewTagSuccess]: (state, { payload }) => [...state, payload],
});

const selected = createReducer([], {
  [selectTag]: (state, { payload }) => {
    if (state.includes(payload)) {
      return state.filter((item) => item !== payload);
    }
    return [...state, payload];
  },
  [createProjectSuccess]: () => [],
});

export default combineReducers({
  all,
  selected,
});
