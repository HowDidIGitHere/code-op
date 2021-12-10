import * as ProjectApiUtil from '../util/project_api_util';

// Action types
export const RECEIVE_PROJECTS='RECEIVE_PROJECTS';
export const RECEIVE_PROJECT='RECEIVE_PROJECT';
export const REMOVE_PROJECT='REMOVE_PROJECT';
export const RECEIVE_PROJECT_ERRORS='RECEIVE_PROJECT_ERRORS';
export const ONE_PROJECT='ONE_PROJECT';


// Actions
export const receiveProjects = payload => ({
  type: RECEIVE_PROJECTS,
  payload
})

export const receiveProject = project => ({
  type: RECEIVE_PROJECT,
  project
})

export const singleProject = project => ({
  type: ONE_PROJECT,
  project
})

export const removeProject = projectId => ({
  type: REMOVE_PROJECT,
  projectId
})

export const receiveProjectErrors = errors => ({
  type: RECEIVE_PROJECT_ERRORS,
  errors
})

export const fetchCreatorProjects = (creatorId) => dispatch => (
  ProjectApiUtil.getCreatorProjects(creatorId)
    .then(projects => dispatch(receiveProjects(projects.data)))
    .catch(({ response }) => (
        dispatch(receiveProjectErrors(response.data))
    ))
)

// Thunk Action Creators
export const fetchProjects = params => dispatch => (
  ProjectApiUtil.getProjects(params) 
    .then(({ data }) => {
      if (params && params.collaborators) 
        return dispatch(receiveProjects({ projects: data, inject: true }));
      return dispatch(receiveProjects({ projects: data }));
    })
    .catch(({ response }) => (
        dispatch(receiveProjectErrors(response.data))
    ))
);

export const fetchProject = id => dispatch => (
  ProjectApiUtil.getProject(id) 
    .then(project => dispatch(receiveProject(project.data)))
    .catch(({ response }) => (
        dispatch(receiveProjectErrors(response.data))
    ))
);

export const oneProject = id => dispatch => (
  ProjectApiUtil.getProject(id) 
    .then(project => dispatch(singleProject(project.data)))
    .catch(({ response }) => (
        dispatch(receiveProjectErrors(response.data))
    ))
);

export const createProject = data => dispatch => (
  ProjectApiUtil.createProject(data) 
    .then(project => dispatch(receiveProject(project.data)))
    .catch(({ response }) => (
        dispatch(receiveProjectErrors(response.data))
    ))
);

export const updateProject = data => dispatch => (
  ProjectApiUtil.updateProject(data) 
    .then(project => dispatch(receiveProject(project.data)))
    .catch(({ response }) => (
        dispatch(receiveProjectErrors(response.data))
    ))
);

export const deleteProject = id => dispatch => (
  ProjectApiUtil.deleteProject(id) 
    .then(() => dispatch(removeProject(id)))
    .catch(({ response }) => (
        dispatch(receiveProjectErrors(response.data))
    ))
);