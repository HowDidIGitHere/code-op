import { updateUser, fetchUser } from "../../actions/user_actions";
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { closeModal } from '../../actions/modal_actions';

import UserUpdateComponent from "./user_update_component";

const mSTP = (state, ownProps) => {
  const location = ownProps.location.pathname.split("/")
  return{
    user: state.entities.users[location[2]],
  }
}

const mDTP = (dispatch, ownProps) => {
  const location = ownProps.location.pathname.split("/")

  return{
  closeModal: () => dispatch(closeModal()),

  updateUser: user => dispatch(updateUser(user)),
  fetchUser: () => dispatch(fetchUser(location[2])),

}}

export default withRouter(connect(mSTP, mDTP)(UserUpdateComponent));