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
      const { projects, inject } = action.payload;
      if (inject)
        Object.values(projects).forEach(project => {
          nextState[project._id] = project;
        });
      else
        nextState = projects;
      return nextState;
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