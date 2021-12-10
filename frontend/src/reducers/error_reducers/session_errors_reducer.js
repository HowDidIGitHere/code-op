import { 
  RECEIVE_CURRENT_USER,
  RECEIVE_USER_LOGOUT,
  RECEIVE_SESSION_ERRORS
} from "../../actions/session_actions";
import { REMOVE_ERROR } from "../../actions/error_actions";

const SessionErrorsReducer = data => {
  return (state={}, action) => {
    console.log(action);
    Object.freeze(state);
    const nextState = Object.assign({}, state);
    switch(action.type) {
      case RECEIVE_USER_LOGOUT:
      case RECEIVE_CURRENT_USER:
        return {};
      case RECEIVE_SESSION_ERRORS:
        const errors = Object.values(action.errors);
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

export default SessionErrorsReducer;