import { updateUser, requestUser } from "../../actions/user_actions";
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { closeModal } from '../../actions/modal_actions';

import UserUpdateComponent from "./user_update_component";

const mSTP = state => ({
  user: state.entities.users[ownProps.match.params.id],
})

const mDTP = dispatch => ({
  closeModal: () => dispatch(closeModal()),

  updateUser: user => dispatch(updateUser(user)),
  requestUser: () => dispatch(requestUser(ownProps.match.params.id)),
})

export default withRouter(connect(mSTP, mDTP)(UserUpdateComponent));