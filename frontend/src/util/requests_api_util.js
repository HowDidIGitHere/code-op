import axios from "axios";

export const getRequests = recipientId => {
  return axios.get('/api/requests', { params: { recipient: recipientId }})
}

export const createRequest = data => {
  return axios.post('/api/requests', data);
}

export const deleteRequest = requestId => {
  return axios.delete(`/api/requests/${requestId}`)
}