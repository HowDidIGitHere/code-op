import * as UserApiUtil from "../util/user_api_util"

// Action types
export const RECEIVE_COLLABORATORS = "RECEIVE_COLLABORATORS";
export const RECEIVE_USER = "RECEIVE_USER";
export const REMOVE_USER = "REMOVE_USER"

// Actions
export const receiveCollaborators = collaborators => ({
  type: RECEIVE_COLLABORATORS,
  collaborators
});

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const removeUser = userId => ({
  type: REMOVE_USER,
  userId
})

// Thunk Action Creators
export const requestCollaborators = collaborators => dispatch => (
  UserApiUtil.getCollaborators(collaborators)
    .then(collaborators => dispatch(receiveCollaborators(collaborators.data)))
    .catch(err => console.log(err))
)

export const fetchUser = userId => dispatch => (
  UserApiUtil.getUser(userId)
    .then(user => dispatch(receiveUser(user.data)))
    .catch(err => console.log(err))
)

export const updateUser = user => dispatch => (
  UserApiUtil.updateUser(user)
    .then(user => dispatch(receiveUser(user.data)))
    .catch(err => console.log(err))
)

export const deleteUser = userId => dispatch => (
  UserApiUtil.deleteUser(userId)
    .then(() => dispatch(removeUser(userId)))
    .catch(err => console.log(err))
)
