import {ONE_PROJECT} from '../actions/project_actions'

const SingleProjectReducer = (state = {}, action) => {
  Object.freeze(state);
  let oneState = Object.assign({}, state);
  switch (action.type) {
    case ONE_PROJECT:
      return oneState[action.project.id] = action.project;
    default:
      return state;
  }
}

export default SingleProjectReducer;