import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchProjects } from '../../actions/project_actions'
import MainPage from './main_page';

const mSTP = ({ entities }) => ({
  projects: Object.keys(entities.projects).map(key => entities.projects[key])
});

const mDTP = dispatch => ({
  fetchFeaturedProjects:() => dispatch(fetchProjects({ featured: true }))
})

export default withRouter(connect(mSTP, mDTP)(MainPage));