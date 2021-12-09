import { combineReducers } from "redux";
import userErrorsReducer from "./user_errors_reducer";
import authErrorsReducer from "./auth_errors_reducer";

const data = { errorCount: 0 };

export default combineReducers({
  user: userErrorsReducer(data),
  auth: authErrorsReducer(data),
});