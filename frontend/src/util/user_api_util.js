import axios from 'axios';

export const getCollaborators = collaborators => {
  collaborators = collaborators.join(",");
  return axios.get('/api/users', { params: { _id: collaborators } });
}

<<<<<<< HEAD
export const getUsers = (params={}) => {
  return axios.get(`/api/users`, { params })
=======
export const getCollaboratedProjects = (userId) => {
  return axios.get(`/api/projects?collaborators=${userId}`, userId);
>>>>>>> 25ede8687b37f60d842b94d98cabe215e2c8001e
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

