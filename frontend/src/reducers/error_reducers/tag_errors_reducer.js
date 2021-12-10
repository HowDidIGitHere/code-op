import { 
  RECEIVE_TAG,
  RECEIVE_TAGS,
  RECEIVE_TAG_ERRORS 
} from "../../actions/tag_actions";
import { REMOVE_ERROR } from "../../actions/error_actions";

const TagErrorsReducer = data => {  
  return (state={}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);
    switch(action.type) {
      case RECEIVE_TAGS:
        case RECEIVE_TAG:
          return {};
      case RECEIVE_TAG_ERRORS:
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

export default TagErrorsReducer;