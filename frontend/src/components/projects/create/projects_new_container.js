import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { createProject, fetchProjects } from '../../../actions/project_actions';
import { fetchTags, createTag } from '../../../actions/tag_actions'
import ProjectsNew from './projects_new_component';

const mapStateToProps = (state) => {
  return {
    user: state.session.user,
    tags: state.entities.tags.namesByCategory
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createProject: data => dispatch(createProject(data)),
    fetchTags: params => dispatch(fetchTags(params)),
    fetchCreatorProjects: id => dispatch(fetchProjects({ creator: id })),
    createTag: data => dispatch(createTag(data))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProjectsNew));