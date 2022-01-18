import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import {openModal, closeModal} from "../../actions/modal_actions";
import {clearErrors} from "../../actions/session_actions"


import SignupForm from './signup_form';

const mapStateToProps = (state) => {
  return {
    signedIn: state.session.isSignedIn,
    errors: Object.values(state.errors.session)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: user => dispatch(signup(user)),
    openLoginModal: () => dispatch(openModal('login')),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);