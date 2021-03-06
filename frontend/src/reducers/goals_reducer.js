import { 
  RECEIVE_GOALS, 
  RECEIVE_GOAL, 
  REMOVE_GOAL
} from "../actions/goal_actions"

const GoalsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_GOALS:
      return Object.assign({}, action.goals)
    case RECEIVE_GOAL:
      nextState[action.goal._id] = action.goal
      return nextState
    case REMOVE_GOAL:
      delete nextState[action.goalId]
      return nextState
    default:
      return state;
  }
}

export default GoalsReducer;