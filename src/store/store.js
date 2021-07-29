import { combineReducers, createStore } from "redux";
import easyReducer from "./easyReducer";

const reducers = combineReducers({
    level1: easyReducer,
});

const store = createStore(reducers);

window.store = store;

export default store;