import axios from 'axios';

export const getGoals = goals => {
  if(goals){
    goals = goals.join(",");
  }
  
  return axios.get('/api/goals', { params: { _id: goals } })
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
  return axios.delete(`/api/goals/${id}`)
}
