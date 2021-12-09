import { 
  RECEIVE_PROJECTS,
  RECEIVE_PROJECT,
  REMOVE_PROJECT ,
} from "../actions/project_actions";

const ProjectsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_PROJECTS:
      return Object.assign({}, action.projects);
    case RECEIVE_PROJECT:
      nextState[action.project._id] = action.project
      return nextState;
    case REMOVE_PROJECT:
      delete nextState[action.projectId]
      return nextState
    default:
      return state;
  }
}

export default ProjectsReducer;