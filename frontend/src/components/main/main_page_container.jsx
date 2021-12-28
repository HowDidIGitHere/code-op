import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchProjects } from '../../actions/project_actions'
import MainPage from './main_page';

const mSTP = ({ entities : { projects } }) => ({
  projects: Object.values(projects)
});

const mDTP = dispatch => ({
  fetchFeaturedProjects: () => dispatch(fetchProjects({ featured: true }))
})

export default withRouter(connect(mSTP, mDTP)(MainPage));