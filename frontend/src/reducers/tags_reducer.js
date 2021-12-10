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
      if (action.tags.namesByCategory) {
        const namesByCategory = action.tags.namesByCategory;
        delete namesByCategory._id;
        nextState['namesByCategory'] = namesByCategory;
      } else {
        nextState = Object.assign({}, action.tags);
      }
      return nextState;
    case RECEIVE_TAG:
      if (Array.isArray(action.tag))
        action.tag.forEach(tag => {
          nextState[tag._id] = tag;
        });
      else
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