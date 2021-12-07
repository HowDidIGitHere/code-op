import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchProjects } from '../../actions/project_actions'
import MainPage from './main_page';

const mSTP = state => ({
  projects: Object.keys(state.entities.projects).map(key => state.entities.projects[key])
});

const mDTP = dispatch => ({
  fetchProjects:() => dispatch(fetchProjects())
})

export default withRouter(connect(mSTP, mDTP)(MainPage));