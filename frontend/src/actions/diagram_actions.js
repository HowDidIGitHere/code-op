import * as DiagramApiUtil from "../util/diagrams_api_util";

// Action types
export const RECEIVE_DIAGRAMS = "RECEIVE_DIAGRAMS";
export const RECEIVE_DIAGRAM = "RECEIVE_DIAGRAM";
export const REMOVE_DIAGRAM = "REMOVE_DIAGRAM";

// Actions
export const receiveDiagrams = diagrams => ({
  type: RECEIVE_DIAGRAMS,
  diagrams
});

export const receiveDiagram = diagram => ({
  type: RECEIVE_DIAGRAM,
  diagram
});

export const removeDiagram = diagramId => ({
  type: REMOVE_DIAGRAM,
  diagramId
});

// Thunk Action Creators
export const getDiagrams = diagramsArr => dispatch => (
  DiagramApiUtil.getDiagrams(diagramsArr)
    .then(diagrams => dispatch(receiveDiagrams(diagrams)))
    .catch(err => console.log(err))
)

export const createDiagram = data => dispatch => (
  DiagramApiUtil.createDiagram(data)
    .then(diagram => dispatch(receiveDiagram(diagram)))
    .catch(err => console.log(err))
)

export const updateDiagram = data => dispatch => (
  DiagramApiUtil.updateDiagram(data)
    .then(diagram => dispatch(receiveDiagram(diagram)))
    .catch(err => console.log(err))
)

export const deleteDiagram = id => dispatch => (
  DiagramApiUtil.deleteDiagram(id)
    .then(() => dispatch(removeDiagram(id)))
    .catch(err => console.log(err))
)