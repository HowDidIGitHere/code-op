import { combineReducers } from "redux";
import GoalsReducer from "./goals_reducer";
import ProjectsReducer from "./projects_reducer";
import UsersReducer from "./users_reducer"
import DiagramsReducer from "./diagrams_reducer";
import RequestReducer from "./requests_reducer";

export default combineReducers({
  projects: ProjectsReducer,
  users: UsersReducer,
  goals: GoalsReducer,
  diagrams: DiagramsReducer,
  requests: RequestReducer
})