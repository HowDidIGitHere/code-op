import axios from 'axios';

export const getCollaborators = collaborators => {
  collaborators = collaborators.join(",");
  return axios.get('/api/users', { params: { collaborators } });
}

export const getUser = id => {
  return axios.get(`/api/users/${id}`)
}

export const updateUser = data => {
  return axios.put(`/api/users/${data._id}`, data)
}

export const deleteUser = id => {
  return axios.delete(`/api/users/${id}`)
}
