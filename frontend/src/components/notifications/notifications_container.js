import { connect } from "react-redux";
import { withRouter } from "react-router";
import { createGoal } from "../../actions/goal_actions";
import { fetchRequests } from "../../actions/request_actions";
import Notifications from "./notifications_component";

const mSTP = (state, ownProps) => {
  return {
    currentUser: state.session.user.id
  }
}

const mDTP = (dispatch, ownProps) => {
  return {
    fetchRequests: (recipientId) => dispatch(fetchRequests(recipientId))
  }
}

export default withRouter(connect(mSTP, mDTP)(Notifications))