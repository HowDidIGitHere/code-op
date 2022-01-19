import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { openModal } from '../../actions/modal_actions';
import HowTo from './how_to';

const mSTP = state => ({
  currentUser: state.session.user,
  isAuthenticated: state.session.isAuthenticated
});

const mDTP = dispatch => ({
  openSignUpModal: () => dispatch(openModal('signup'))
})

export default withRouter(connect(mSTP, mDTP)(HowTo));