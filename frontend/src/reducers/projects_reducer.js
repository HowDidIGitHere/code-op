import { RECEIVE_PROJECT, RECEIVE_PROJECTS, REMOVE_PROJECT } from "../actions/project_actions";

const ProjectsReducer = ( state={}, action ) => {
  Object.freeze(state);

  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_PROJECTS:
      return action.projects
    case RECEIVE_PROJECT:
      newState[action.project._id] = action.project
    case REMOVE_PROJECT:
      delete newState[action.projectId]
      return newState
    default:
      return state;
  }
}

export default ProjectsReducer;