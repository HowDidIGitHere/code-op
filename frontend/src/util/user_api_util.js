import axios from 'axios';

export const fetchUser = userId => {
  return axios.get(`/api/users/${userId}`)
}

export const updateUser = userId => {
  return axios.put(`/api/users/${userId}`)
}

export const deleteUser = userId => {
  return axios.delete(`/api/users/${userId}`)
}
