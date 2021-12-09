import { connect } from "react-redux";
import { withRouter } from "react-router";
import ProjectRequest from './project_request'


const mSTP = (state, ownProps) => ({
  user: state.session.user,
  project: state.entities.singleProject
})

const mDTP = (dispatch, ownProps) => ({
  // createGoal: data => dispatch(createGoal(data))
})

export default withRouter(connect(mSTP, null)(ProjectRequest))