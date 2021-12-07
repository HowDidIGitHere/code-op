import { RECEIVE_PROJECT, RECEIVE_PROJECTS, REMOVE_PROJECT } from "../actions/project_actions";

const ProjectsReducer = ( state={}, action ) => {
  Object.freeze(state);

  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_PROJECTS:
      return action.projects.data.data
    case RECEIVE_PROJECT:
      newState[action.project.id] = action.project
    case REMOVE_PROJECT:
      delete newState[action.id]
      return newState
    default:
      return state;
  }
}

export default ProjectsReducer;