import { connect } from "react-redux";
import { withRouter } from "react-router";
import { updateGoal, fetchGoal } from "../../actions/goal_actions";
import GoalsShow from "./goals_show_component";

const mSTP = (state, ownProps) => ({

})

const mDTP = (dispatch, ownProps) => ({

})

export default withRouter(connect(mSTP, mDTP)(GoalsShow))