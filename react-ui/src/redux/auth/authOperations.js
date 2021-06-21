import axios from "axios";

import { loginUser, logoutUser, getUser } from "../../utils/API/artStudioAPI";
import {
  logInRequest,
  logInSuccess,
  logInError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
} from "./authActions";

const token = {
  setToken(token) {
    axios.defaults.headers.common["Authorization"] = `JWT ${token}`;
  },
  clearToken() {
    axios.defaults.headers.common["Authorization"] = null;
  },
};

export const login = (credentials) => (dispatch) => {
  dispatch(logInRequest());
  loginUser(credentials)
    .then((response) => {
      token.setToken(response.data.token);
      dispatch(logInSuccess(response.data));
    })
    .catch((err) => {
      dispatch(logInError(err.message));
    });
};

export const logout = () => (dispatch) => {
  dispatch(logoutRequest());
  logoutUser()
    .then(() => {
      token.clearToken();
      dispatch(logoutSuccess());
    })
    .catch((err) => {
      dispatch(logoutError(err.message));
    });
};

export const getCurrentUser = () => (dispatch, getState) => {
  const persistedToken = getState().auth.token;
  if (!persistedToken) return;

  token.setToken(persistedToken);

  dispatch(getCurrentUserRequest());

  getUser()
    .then((response) => {
      dispatch(getCurrentUserSuccess(response.data));
    })
    .catch((err) => {
      dispatch(getCurrentUserError(err.message));
    });
};
