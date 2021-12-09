import { combineReducers } from "redux";
import UserErrorsReducer from "./user_errors_reducer";
import SessionErrorsReducer from "./session_errors_reducer";

const data = { errorCount: 0 };

export default combineReducers({
  user: UserErrorsReducer(data),
  session: SessionErrorsReducer(data),
});