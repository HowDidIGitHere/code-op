import { RECEIVE_USER, REMOVE_USER, RECEIVE_COLLABORATORS } from "../actions/user_actions";

const UsersReducer = (state={}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_COLLABORATORS:
      return Object.assign({}, action.collaborators)

    case RECEIVE_USER:
      nextState[action.user._id] = action.user
      return nextState

    case REMOVE_USER:
      delete nextState[action.userId]
      return nextState
      
    default:
      return state;
  }
}

export default UsersReducer