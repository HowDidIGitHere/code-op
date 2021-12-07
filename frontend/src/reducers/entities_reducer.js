import { combineReducers } from "redux";
import ProjectsReducer from "./projects_reducer";
import UsersReducer from "./users_reducer"

export default combineReducers({
  projects: ProjectsReducer,
  users: UsersReducer,
})