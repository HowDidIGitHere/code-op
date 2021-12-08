import {
  RECEIVE_DIAGRAMS,
  RECEIVE_DIAGRAM,
  REMOVE_DIAGRAM
} from "../util/diagrams_api_util";

const DiagramsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_DIAGRAMS:
      return Object.assign({}, action.diagrams);
    case RECEIVE_DIAGRAM:
      nextState[action.diagram._id] = action.diagram;
      return nextState;
    case REMOVE_DIAGRAM:
      delete nextState[action.diagramId];
      return nextState;
    default:
      return state;
  }
}

export default DiagramsReducer;