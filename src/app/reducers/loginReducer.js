/* eslint-disable import/no-anonymous-default-export */
import { USER_LOGIN, USER_LOGOUT } from "../types";

const initialState = {
  isLogin: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN: {
      return {
        ...state,
        isLogin: true,
      };
    }
    case USER_LOGOUT: {
      return {
        ...state,
        isLogin: false,
      };
    }
    default:
      return state;
  }
};
