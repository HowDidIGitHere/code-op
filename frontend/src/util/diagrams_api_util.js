import axios from "axios";

export const getDiagram = dataId => {
  return axios.get(`/api/diagrams/${dataId}`)
}

export const createDiagram = data => {
  return axios.post("/api/diagrams", data);
}

export const updateDiagram = data => {
  return axios.put(`/api/diagrams/${data._id}`, data);
}

export const deleteDiagram = id => {
  return axios.delete(`/api/diagrams/${id}`)
}