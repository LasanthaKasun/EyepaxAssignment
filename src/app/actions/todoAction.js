import { toast } from "react-toastify";
import { instance } from "../apis";
import { get_todo } from "../apis/api";
import {
  GET_TODO,
  GET_TODO_ERROR,
  GET_TODO_FILTER,
  GET_TODO_FILTER_ERROR,
  GET_TODO_FILTER_SUCCESS,
  GET_TODO_SUCCESS,
} from "../types";

export const getTodoData = () => async (dispatch) => {
  try {
    dispatch({ type: GET_TODO });
    await instance({
      url: get_todo,
      method: "GET",
    }).then((res) => {
      if (res.status === 200) {
        const data = res.data;
        dispatch({ type: GET_TODO_SUCCESS, payload: data });
      } else {
        dispatch({ type: GET_TODO_ERROR });
        toast.error("Something went wrong please try again leter");
      }
    });
  } catch (e) {
    toast.error("Something went wrong please try again leter");
    dispatch({ type: GET_TODO_ERROR });
  }
};

export const getTodoFilterData = (payload) => async (dispatch) => {
  try {
    dispatch({ type: GET_TODO_FILTER });
    await instance({
      url: get_todo + "/" + payload,
      method: "GET",
    }).then((res) => {
      if (res.status === 200) {
        const data = res.data;
        dispatch({ type: GET_TODO_FILTER_SUCCESS, payload: data });
      } else {
        dispatch({ type: GET_TODO_FILTER_ERROR });
        toast.error("Something went wrong please try again leter");
      }
    });
  } catch (e) {
    toast.error("Something went wrong please try again leter");
    dispatch({ type: GET_TODO_FILTER_ERROR });
  }
};
