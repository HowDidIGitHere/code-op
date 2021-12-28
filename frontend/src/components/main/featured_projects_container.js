import { connect } from 'react-redux';
import { fetchProjects } from '../../actions/project_actions';
import FeaturedProjects from './featured_projects';

const mSTP = state => ({
  projects: Object.keys(state.entities.projects).map(key => state.entities.projects[key])
});

const mDTP = dispatch => ({
  fetchProjects:() => dispatch(fetchProjects())
})

export default connect(mSTP, mDTP)(FeaturedProjects);
