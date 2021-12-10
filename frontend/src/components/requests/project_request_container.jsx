import { connect } from "react-redux";
import { withRouter } from "react-router";
import ProjectRequest from './project_request'
import { fetchTags } from '../../actions/tag_actions'



const mSTP = (state, ownProps) => ({
  user: state.session.user,
  project: state.entities.singleProject,
  tags: state.entities.tags.namesByCategory
})

const mDTP = (dispatch, ownProps) => ({
  fetchTags: params => dispatch(fetchTags(params)),
})

export default withRouter(connect(mSTP, mDTP)(ProjectRequest))