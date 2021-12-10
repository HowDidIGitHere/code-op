import { 
  RECEIVE_PROJECT,
  RECEIVE_PROJECTS,
  RECEIVE_PROJECT_ERRORS 
} from "../../actions/project_actions";
import { REMOVE_ERROR } from "../../actions/error_actions";

const ProjectErrorsReducer = data => {  
  return (state={}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);
    switch(action.type) {
      case RECEIVE_PROJECTS:
        case RECEIVE_PROJECT:
          return {};
      case RECEIVE_PROJECT_ERRORS:
        const errors = action.errors;
        errors.forEach(error => { nextState[data.errorCount+=1] = error; });
        return nextState;
      case REMOVE_ERROR:
        if (nextState[action.id]) delete nextState[action.id]
        return nextState;
      default:
        return state;
    }
  }
}

export default ProjectErrorsReducer;