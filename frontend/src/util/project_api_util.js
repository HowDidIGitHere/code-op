import axios from 'axios';

export const getCreatorProjects = (id) => {
  return axios.get('/api/projects', {params: {creator: id}})
}

export const getProjects = () => {
  return axios.get('/api/projects?limit=25')
}

export const getProject = id => {
  return axios.get(`/api/projects/${id}`)
}

export const createProject = data => {
  return axios.post('/api/projects', data)
}

export const updateProject = data => {
  return axios.put(`/api/projects/${data._id}`, data)
}

export const deleteProject = id => {
  return axios.delete(`/api/projects/${id}`)
}
