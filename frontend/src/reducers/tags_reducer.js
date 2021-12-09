import { 
  RECEIVE_TAGS,
  RECEIVE_TAG,
  REMOVE_TAG ,
} from "../actions/tag_actions";

const TagsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_TAGS:
      return Object.assign({}, action.tags);
    case RECEIVE_TAG:
      nextState[action.tag._id] = action.tag
      return nextState;
    case REMOVE_TAG:
      delete nextState[action.tagId]
      return nextState
    default:
      return state;
  }
}

export default TagsReducer;