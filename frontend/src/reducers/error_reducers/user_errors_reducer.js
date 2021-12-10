import { 
  RECEIVE_USER,
  RECEIVE_USERS,
  RECEIVE_USER_ERRORS 
} from "../../actions/user_actions";
import { RECEIVE_CURRENT_USER } from "../../actions/session_actions";
import { REMOVE_ERROR } from "../../actions/error_actions";

const UserErrorsReducer = data => {  
  return (state={}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);
    switch(action.type) {
      case RECEIVE_CURRENT_USER:
      case RECEIVE_USERS:
      case RECEIVE_USER:
        return {};
      case RECEIVE_USER_ERRORS:
        return action.errors.message;
      case REMOVE_ERROR:
        if (nextState[action.id]) delete nextState[action.id]
        return nextState;
      default:
        return state;
    }
  }
}

export default UserErrorsReducer;