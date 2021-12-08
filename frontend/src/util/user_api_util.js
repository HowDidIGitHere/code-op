import axios from 'axios';

export const fetchCollaborators = collaborators => {
  collaborators = collaborators.join(",");
  console.log(collaborators);
  return axios.get('/api/users', { params: { collaborators } });
}

export const fetchUser = userId => {
  return axios.get(`/api/users/${userId}`)
}

export const updateUser = userId => {
  return axios.put(`/api/users/${userId}`)
}

export const deleteUser = userId => {
  return axios.delete(`/api/users/${userId}`)
}
