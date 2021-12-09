import { combineReducers } from "redux";
import GoalsReducer from "./goals_reducer";
import ProjectsReducer from "./projects_reducer";
import UsersReducer from "./users_reducer"
import SingleProjectReducer from "./single_project_reducer";
import DiagramReducer from "./diagram_reducer";
import RequestReducer from "./requests_reducer";

export default combineReducers({
  projects: ProjectsReducer,
  users: UsersReducer,
  goals: GoalsReducer,
  singleProject: SingleProjectReducer,
  diagram: DiagramReducer,
  requests: RequestReducer
})