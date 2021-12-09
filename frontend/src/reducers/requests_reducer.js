import {
  RECEIVE_REQUESTS,
  RECEIVE_REQUEST_SENT,
  REMOVE_REQUEST
} from "../actions/request_actions";

const RequestReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_REQUESTS:
      return Object.assign({}, action.requests);
    case RECEIVE_REQUEST_SENT:
      return state;
    case REMOVE_REQUEST:
      delete nextState[action.requestId];
      return nextState;
    default:
      return state;
  }
};

export default RequestReducer;