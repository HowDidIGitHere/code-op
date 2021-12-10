import axios from 'axios';

export const getTags = (params) => {
  return axios.get('/api/tags', { params });
}

export const getTag = id => {
  return axios.get(`/api/tags/${id}`);
}

export const createTag = data => {
  return axios.post('/api/tags', data);
}

export const updateTag = data => {
  return axios.put(`/api/tags/${data._id}`, data);
}

export const deleteTag = id => {
  return axios.delete(`/api/tags/${id}`);
}
