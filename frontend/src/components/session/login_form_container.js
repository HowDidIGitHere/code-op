import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import {clearErrors} from "../../actions/session_actions"

import LoginForm from "./login_form.jsx"

const mapStateToProps = (state) => {
  return {
    sessionId: state.session.id,
    errors: Object.values(state.errors.session)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: user => dispatch(login(user)),
    openSignupModal: () => dispatch(openModal('signup')),

    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);