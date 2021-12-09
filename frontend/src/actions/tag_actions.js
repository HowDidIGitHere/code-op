import * as TagApiUtil from '../util/tag_api_util';

// Action types
export const RECEIVE_TAGS='RECEIVE_TAGS';
export const RECEIVE_TAG='RECEIVE_TAG';
export const REMOVE_TAG='REMOVE_TAG';
export const ONE_TAG='ONE_TAG';


// Actions
export const receiveTags = tags => ({
  type: RECEIVE_TAGS,
  tags
})

export const receiveTag = tag => ({
  type: RECEIVE_TAG,
  tag
})

export const removeTag = tagId => ({
  type: REMOVE_TAG,
  tagId
})

// Thunk Action Creators
export const fetchTags = (params) => dispatch => (
  TagApiUtil.getTags(params) 
    .then(({ data }) => dispatch(receiveTags(data)))
    .catch(err => console.log(err))
);

export const fetchTag = id => dispatch => (
  TagApiUtil.getTag(id) 
    .then(({ data }) => dispatch(receiveTag(data)))
    .catch(err => console.log(err))
);

export const createTag = data => dispatch => (
  TagApiUtil.createTag(data) 
    .then(({ data }) => dispatch(receiveTag(data)))
    .catch(err => console.log(err))
);

export const updateTag = data => dispatch => (
  TagApiUtil.updateTag(data) 
    .then(({ data }) => dispatch(receiveTag(data)))
    .catch(err => console.log(err))
);

export const deleteTag = id => dispatch => (
  TagApiUtil.deleteTag(id) 
    .then(() => dispatch(removeTag(id)))
    .catch(err => console.log(err))
);