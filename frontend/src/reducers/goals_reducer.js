import { RECEIVE_GOALS, RECEIVE_GOAL, REMOVE_GOAL} from "../actions/goal_actions"

const GoalsReducer = ( state={}, action ) => {
  Object.freeze(state);

  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_GOALS:
      return action.goals.data.data
    case RECEIVE_GOAL:
      newState[action.goal.data.id] = action.goal.data
    case REMOVE_GOAL:
      delete newState[action.id]
      return newState
    default:
      return state;
  }
}

export default GoalsReducer;