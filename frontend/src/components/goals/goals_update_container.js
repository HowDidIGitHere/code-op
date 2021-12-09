import { connect } from "react-redux";
import { withRouter } from "react-router";
import { updateGoal, fetchGoal } from "../../actions/goal_actions";
import GoalsCreate from "./goals_create_component";

const mSTP = (state, ownProps) => ({
  goal: state.entities.goals[ownProps.match.params.id]
})

const mDTP = (dispatch, ownProps) => ({
  updateGoal: data => dispatch(createGoal(data)),
  fetchGoal: () => dispatch(fetchGoal(ownProps.match.params.id))
})

export default withRouter(connect(mSTP, mDTP)(GoalsCreate))