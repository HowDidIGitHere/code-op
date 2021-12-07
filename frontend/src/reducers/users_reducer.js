import { RECEIVE_USER, REMOVE_USER } from "../actions/user_actions";

export default (state={}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_USER:
      nextState[action.user.id] = action.user
      return nextState

    case REMOVE_USER:
      delete nextState[action.userId]
      return nextState

    default:
      return state;
  }
}