import { combineReducers } from "redux";
import UserErrorsReducer from "./user_errors_reducer";
import SessionErrorsReducer from "./session_errors_reducer";
import TagErrorsReducer from "./tag_errors_reducer";
import ProjectErrorsReducer from "./project_errors_reducer";

const data = { errorCount: 0 };

export default combineReducers({
  session: SessionErrorsReducer(data),
  user: UserErrorsReducer(data),
  tag: TagErrorsReducer(data),
  project: ProjectErrorsReducer(data)
});