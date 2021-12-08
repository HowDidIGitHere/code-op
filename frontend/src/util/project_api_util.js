import axios from 'axios';

export const getProjects = () => {
  return axios.get('/api/projects')
}

export const getProject = id => {
  return axios.get(`/api/projects/${id}`)
}

export const createProject = data => {
  return axios.post('/api/projects', data)
}

export const updateProject = data => {
  return axios.put(`/api/projects/${data.id}`, data)
}

export const deleteProject = id => {
  return axios.delete(`/api/projects/${id}`)
}
