import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { createProject, fetchCreatorProjects } from '../../../actions/project_actions';
import { fetchTags } from '../../../actions/tag_actions'
import ProjectsNew from './projects_new_component';

const mapStateToProps = (state) => {
  return {
    user: state.session.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createProject: data => dispatch(createProject(data)),
    fetchTags: params => dispatch(fetchTags(params)),
    fetchCreatorProjects: id => dispatch(fetchCreatorProjects(id))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProjectsNew));