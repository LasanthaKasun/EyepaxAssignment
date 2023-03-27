import { USER_LOGIN, USER_LOGOUT } from "../types";

export const userLogin = (payload) => async (dispatch) => {
  dispatch({ type: USER_LOGIN, payload });
};

export const userLogout = (payload) => async (dispatch) => {
  dispatch({ type: USER_LOGOUT, payload });
};
