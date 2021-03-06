import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';
import AboutComponent from '../about/about_component';
import UserUpdateContainer from '../user/user_update_container';
import GoalsCreateContainer from '../goals/goals_create_container';
import Notifications from "../../components/notifications/notifications_container"
import ProjectRequestContainer from '../requests/project_request_container';
import LearnMoreContainer from '../projects/index/learn_more_container';
import './modal.css'

function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'login':
      component = <LoginFormContainer />;
      break;
    case 'signup':
      component = <SignupFormContainer />;
      break;
    case 'about':
      component = <AboutComponent />;
      break;
    case 'update':
      component = <UserUpdateContainer />;
      break;
    // case 'create-goal':
    //   component = <GoalsCreateContainer />;
    //   break;
    case 'notifications':
      component = <Notifications />;
      break;
    case 'request':
      component = <ProjectRequestContainer/>;
      break;
    case 'learn':
      component = <LearnMoreContainer/>;
      break;
      
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
