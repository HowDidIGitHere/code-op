import { RECEIVE_PROJECT, RECEIVE_PROJECTS, REMOVE_PROJECTS } from "../actions/project_actions";

const ProjectReducer = ( state={}, action ) => {
  Object.freeze(state);

  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_PROJECTS:
      return action.projects
    case RECEIVE_PROJECT:
      newState[action.project.id] = action.project
    case REMOVE_PROJECTS:
      delete newState[action.id]
      return newState
    default:
      return state;
  }
}

export default ProjectReducer;