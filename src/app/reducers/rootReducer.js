import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import loginReducer from "./loginReducer";
import todoReducer from "./todoReducer";

export const rootReducr = combineReducers({
    loginData: loginReducer,
    todoData: todoReducer,
});

const store = createStore(rootReducr, applyMiddleware(thunk));

export default store;
