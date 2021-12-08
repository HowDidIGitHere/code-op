import axios from 'axios';

export const getGoals = () => {
  return axios.get('/api/goals')
}

export const getGoal = id => {
  return axios.get(`/api/goals/${id}`)
}

export const createGoal = data => {
  return axios.post('/api/goals/', data)
}

export const updateGoal = data => {
  return axios.put(`/api/goals/${data.id}`, data)
}

export const deleteGoal = id => {
  return axios.put(`/api/goals/${id}`)
}
