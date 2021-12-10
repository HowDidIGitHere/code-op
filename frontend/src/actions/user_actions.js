import * as UserApiUtil from "../util/user_api_util"

// Action types
export const RECEIVE_COLLABORATORS = "RECEIVE_COLLABORATORS";
export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_USER = "RECEIVE_USER";
export const REMOVE_USER = "REMOVE_USER"
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";

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

export const receiveUserErrors = errors => ({
  type: RECEIVE_USER_ERRORS,
  errors
})

// Thunk Action Creators
export const fetchCollaborators = collaborators => dispatch => (
  UserApiUtil.getCollaborators(collaborators)
    .then(collaborators => dispatch(receiveCollaborators(collaborators.data)))
    .catch(({ response }) => (
        dispatch(receiveUserErrors(response.data))
    ))
)

export const receiveCollaboratedProjects = (params) => dispatch => (
  UserApiUtil.getCollaboratedProjects(params)
    .then(({data}) => dispatch(receiveUser(data)))
    .catch(({ response }) => (
      dispatch(receiveUserErrors(response.data))
    ))
)

export const fetchUsers = params => dispatch => (
  UserApiUtil.getUser(params)
    .then(user => dispatch(receiveUser(user.data)))
    .catch(({ response }) => {
        console.log(response);
        return dispatch(receiveUserErrors(response.data));
    })
)

export const fetchUser = userId => dispatch => (
  UserApiUtil.getUser(userId)
    .then(user => dispatch(receiveUser(user.data)))
    .catch(({ response }) => 
      dispatch(receiveUserErrors(response.data)
    ))
)

export const updateUser = user => dispatch => (
  UserApiUtil.updateUser(user)
    .then(user => dispatch(receiveUser(user.data)))
    .catch(({ response }) => (
        dispatch(receiveUserErrors(response.data))
    ))
)

export const deleteUser = userId => dispatch => (
  UserApiUtil.deleteUser(userId)
    .then(() => dispatch(removeUser(userId)))
    .catch(({ response }) => (
        dispatch(receiveUserErrors(response.data))
    ))
)
