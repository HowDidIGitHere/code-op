import * as ProjectApiUtil from '../util/project_api_util';

// Action types
export const RECEIVE_PROJECTS='RECEIVE_PROJECTS';
export const RECEIVE_PROJECT='RECEIVE_PROJECT';
export const REMOVE_PROJECT='REMOVE_PROJECT';

// Actions
export const receiveProjects = projects => ({
  type: RECEIVE_PROJECTS,
  projects
})

export const receiveProject = project => ({
  type: RECEIVE_PROJECT,
  project
})

export const removeProject = projectId => ({
  type: REMOVE_PROJECT,
  projectId
})

export const fetchCreatorProjects = (creatorId) => dispatch => (
  ProjectApiUtil.getCreatorProjects(creatorId)
    .then(projects => dispatch(receiveProjects(projects.data)))
    .catch(err => console.log(err))
)

// Thunk Action Creators
export const fetchProjects = () => dispatch => (
  ProjectApiUtil.getProjects() 
    .then(projects => dispatch(receiveProjects(projects.data)))
    .catch(err => console.log(err))
);

export const fetchProject = id => dispatch => (
  ProjectApiUtil.getProject(id) 
    .then(project => dispatch(receiveProject(project.data)))
    .catch(err => console.log(err))
);

export const createProject = data => dispatch => (
  ProjectApiUtil.createProject(data) 
    .then(project => dispatch(receiveProject(project.data)))
    .catch(err => console.log(err))
);

export const updateProject = data => dispatch => (
  ProjectApiUtil.updateProject(data) 
    .then(project => dispatch(receiveProject(project.data)))
    .catch(err => console.log(err))
);

export const deleteProject = id => dispatch => (
  ProjectApiUtil.deleteProject(id) 
    .then(() => dispatch(removeProject(id)))
    .catch(err => console.log(err))
);