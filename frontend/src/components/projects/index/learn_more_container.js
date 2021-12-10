import { connect } from "react-redux";
import { withRouter } from "react-router";
import { fetchTags } from '../../../actions/tag_actions';
import { closeModal, openModal } from "../../../actions/modal_actions";
import { oneProject } from '../../../actions/project_actions';

import LearnMoreComponent from "./learn_more_component";

const mSTP = (state, ownProps) => ({
  project: state.entities.singleProject,
})

const mDTP = (dispatch, ownProps) => ({
  fetchTags: params => dispatch(fetchTags(params)),
  oneProject: id => dispatch(oneProject(id)),
  closeModal: () => dispatch(closeModal()),
  requestModal: () => dispatch(openModal('request')),
})

export default withRouter(connect(mSTP, mDTP)(LearnMoreComponent))