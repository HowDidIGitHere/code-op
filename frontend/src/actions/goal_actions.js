import * as GoalApiUtil from "../util/goals_api_util"

// Action types
export const RECEIVE_GOALS='RECEIVE_GOALS';
export const RECEIVE_GOAL ='RECEIVE_GOAL';
export const REMOVE_GOAL ='REMOVE_GOAL';

// Actions
export const receiveGoals = goals => ({
  type: RECEIVE_GOALS,
  goals
})

export const receiveGoal = goal => ({
  type: RECEIVE_GOAL,
  goal
})

export const removeGoal = goalId => ({
  type: REMOVE_GOAL,
  goalId
})

// Thunk Action Creators
export const fetchGoals = goals => dispatch => (
  GoalApiUtil.getGoals(goals) 
    .then(goals => dispatch(receiveGoals(goals.data)))
    .catch(err => console.log(err))
);

export const fetchGoal = id => dispatch => (
  GoalApiUtil.getGoal(id) 
    .then(goal => dispatch(receiveGoal(goal.data)))
    .catch(err => console.log(err))
);

export const createGoal = data => dispatch => (
  GoalApiUtil.createGoal(data) 
    .then(goal => dispatch(receiveGoal(goal.data)))
    .catch(err => console.log(err))
);

export const updateGoal = data => dispatch => (
  GoalApiUtil.updateGoal(data) 
    .then(goal => dispatch(receiveGoal(goal.data)))
    .catch(err => console.log(err))
);

export const deleteGoal = id => dispatch => (
  GoalApiUtil.deleteGoal(id) 
    .then(() => dispatch(removeGoal(id)))
    .catch(err => console.log(err))
);