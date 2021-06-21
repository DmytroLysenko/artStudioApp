import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import {
  logInSuccess,
  getCurrentUserSuccess,
  getCurrentUserError,
  logoutSuccess,
} from "./authActions";

const user = createReducer(null, {
  [logInSuccess]: (_, { payload }) => payload.user,
  [getCurrentUserSuccess]: (_, { payload }) => payload,
  [logoutSuccess]: () => null,
  [getCurrentUserError]: () => null,
});
const token = createReducer(null, {
  [logInSuccess]: (_, { payload }) => payload.token,
  [logoutSuccess]: () => null,
  [getCurrentUserError]: () => null,
});

export default combineReducers({
  user,
  token,
});
