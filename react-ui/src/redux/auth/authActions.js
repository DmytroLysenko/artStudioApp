import { createAction } from "@reduxjs/toolkit";

const logoutRequest = createAction("auth/logoutRequest");
const logoutSuccess = createAction("auth/logoutSuccess");
const logoutError = createAction("auth/logoutError");

const logInRequest = createAction("auth/logInRequest");
const logInSuccess = createAction("auth/logInSuccess");
const logInError = createAction("auth/logInError");

const getCurrentUserRequest = createAction("auth/getCurrentUserRequest");
const getCurrentUserSuccess = createAction("auth/getCurrentUserSuccess");
const getCurrentUserError = createAction("auth/getCurrentUserError");

export {
  logoutRequest,
  logoutSuccess,
  logoutError,
  logInRequest,
  logInSuccess,
  logInError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
};
