import { combineReducers } from "redux";
import userReducer from "./userReducer";
import actionsReducer from "./actionReducer";

export default combineReducers({
    userReducer,
    actionsReducer, 
});