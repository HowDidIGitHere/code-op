import axios from 'axios';

export const getGoals = goals => {
  goals = goals.join(",");
  return axios.get('/api/goals', { params: { goals } })
}

export const getGoal = id => {
  return axios.get(`/api/goals/${id}`)
}

export const createGoal = data => {
  return axios.post('/api/goals/', data)
}

export const updateGoal = data => {
  return axios.put(`/api/goals/${data._id}`, data)
}

export const deleteGoal = id => {
  return axios.put(`/api/goals/${id}`)
}
