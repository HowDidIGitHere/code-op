import {
  RECEIVE_DIAGRAM,
  REMOVE_DIAGRAM
} from "../actions/diagram_actions";

const DiagramsReducer = (state = {}, action) => {

  switch (action.type) {
    case RECEIVE_DIAGRAM:
      return Object.assign({}, action.diagram);
    case REMOVE_DIAGRAM:
      return {};
    default:
      return state;
  }
}

export default DiagramsReducer;