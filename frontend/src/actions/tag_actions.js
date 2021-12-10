import * as TagApiUtil from '../util/tag_api_util';

// Action types
export const RECEIVE_TAGS='RECEIVE_TAGS';
export const RECEIVE_TAG='RECEIVE_TAG';
export const REMOVE_TAG='REMOVE_TAG';
export const ONE_TAG='ONE_TAG';
export const RECEIVE_TAG_ERRORS = "RECEIVE_USER_ERRORS";


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

export const receiveTagErrors = errors => ({
  type: RECEIVE_TAG_ERRORS,
  errors
})

// Thunk Action Creators
export const fetchTags = (params) => dispatch => (
  TagApiUtil.getTags(params) 
    .then(({ data }) => dispatch(receiveTags(data)))
    .catch(({ response }) => (
        dispatch(receiveTagErrors(response.data))
    ))
);

export const fetchTag = id => dispatch => (
  TagApiUtil.getTag(id) 
    .then(({ data }) => dispatch(receiveTag(data)))
    .catch(({ response }) => (
        dispatch(receiveTagErrors(response.data))
    ))
);

export const createTag = data => dispatch => (
  TagApiUtil.createTag(data) 
    .then(({ data }) => dispatch(receiveTag(data)))
    .catch(({ response }) => (
        dispatch(receiveTagErrors(response.data))
    ))
);

export const updateTag = data => dispatch => (
  TagApiUtil.updateTag(data) 
    .then(({ data }) => dispatch(receiveTag(data)))
    .catch(({ response }) => (
        dispatch(receiveTagErrors(response.data))
    ))
);

export const deleteTag = id => dispatch => (
  TagApiUtil.deleteTag(id) 
    .then(() => dispatch(removeTag(id)))
    .catch(({ response }) => (
        dispatch(receiveTagErrors(response.data))
    ))
);