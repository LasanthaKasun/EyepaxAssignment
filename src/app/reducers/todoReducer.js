/* eslint-disable import/no-anonymous-default-export */
import {
  GET_TODO,
  GET_TODO_ERROR,
  GET_TODO_FILTER,
  GET_TODO_FILTER_ERROR,
  GET_TODO_FILTER_SUCCESS,
  GET_TODO_SUCCESS,
} from "../types";

const initialState = {
  todos: [],
  isLoading: false,
  filterData: {},
  isFiltering: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TODO: {
      return {
        ...state,
        todos: [],
        isLoading: true,
      };
    }
    case GET_TODO_SUCCESS: {
      return {
        ...state,
        todos: action.payload,
        isLoading: false,
      };
    }
    case GET_TODO_ERROR: {
      return {
        ...state,
        todos: [],
        isLoading: false,
      };
    }
    case GET_TODO_FILTER: {
      return {
        ...state,
        filterData: {},
        isFiltering: true,
      };
    }
    case GET_TODO_FILTER_SUCCESS: {
      return {
        ...state,
        filterData: action.payload,
        isFiltering: false,
      };
    }
    case GET_TODO_FILTER_ERROR: {
      return {
        ...state,
        filterData: {},
        isFiltering: false,
      };
    }
    default:
      return state;
  }
};
