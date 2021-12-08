import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { createProject } from '../../../actions/project_actions';
import ProjectsNew from './projects_new_component';

const mapStateToProps = (state) => {
  return {
    user: state.session.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createProject: data => dispatch(createProject(data))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProjectsNew));