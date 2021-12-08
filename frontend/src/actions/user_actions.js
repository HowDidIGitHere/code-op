import * as userApiUtil from "../util/user_api_util"

export const RECEIVE_COLLABORATORS = "RECEIVE_COLLABORATORS";
export const RECEIVE_USER = "RECEIVE_USER";
export const REMOVE_USER = "REMOVE_USER"

//===============================================================ACTION CREATOR
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

//================================================================THUNK

export const requestCollaborators = (collaborators) => dispatch => (
  userApiUtil.fetchCollaborators(collaborators)
    .then(collaborators => dispatch(receiveCollaborators(collaborators.data)))
)

export const requestUser = (userId) => dispatch => (
  userApiUtil.fetchUser(userId)
    .then(user => dispatch(receiveUser(user.data)))
)

export const updateUser = (user) => dispatch => (
  userApiUtil.updateUser(user)
    .then(user => dispatch(receiveUser(user.data)))
)

export const deleteUser = (userId) => dispatch => (
  userApiUtil.deleteUser(userId)
    .then(() => dispatch(removeUser(userId)))
)
