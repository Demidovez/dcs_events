import { combineReducers } from "redux";
import problemsReducer from "./problemsReducer";

const rootReducer = combineReducers({
  problems: problemsReducer,
});

export default rootReducer;
