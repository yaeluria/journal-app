import { combineReducers } from "redux";
import authReducers from "./authReducers";
import errorReducers from "./errorReducers";
import entryReducers from "./entryReducers";
export default combineReducers({
  auth: authReducers,
  errors: errorReducers,
  entries: entryReducers
});