import { connect } from "react-redux";
import { withRouter } from "react-router";
import { createGoal } from "../../actions/goal_actions";
import GoalsCreate from "./goals_create_component";

const mSTP = (state, ownProps) => ({

})

const mDTP = (dispatch, ownProps) => ({
  createGoal: data => dispatch(createGoal(data))
})

export default withRouter(connect(mSTP, mDTP)(GoalsCreate))