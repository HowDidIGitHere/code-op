import * as userApiUtil from "../util/user_api_util"

export const RECEIVE_USER = "RECEIVE_USER";
export const REMOVE_USER = "REMOVE_USER"
export const RECEIVE_USER_PROJECTS = "RECEIVE_USER_PROJECTS";

//===============================================================ACTION CREATOR
export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const removeUser = userId => ({
  type: REMOVE_USER,
  userId
})

export const receiveUserProjects = projects => ({
  type: RECEIVE_USER_PROJECTS,
  projects
});

//================================================================THUNK

export const requestUser = (userId) = dispatch => (
  userApiUtil.fetchUser(userId)
    .then(user => dispatch(receiveUser(user)))
)

export const updateUser = (user) = dispatch => (
  userApiUtil.updateUser(user)
    .then(user => dispatch(receiveUser(user)))
)

export const deleteUser = (userId) => dispatch => (
  userApiUtil.deleteUser(userId)
    .then(() => dispatch(removeListing(userId)))
)

export const requestUserProjects = userId = dispatch => (
  userApiUtil.getUserProjects(userId)
    .then(projects => dispatch(receiveUserProjects(projects)))
)