import { connect } from 'react-redux';
import ProjectsIndex from './projects_index_component';
import { fetchProjects, fetchProject } from '../../../actions/project_actions';
import { openModal } from '../../../actions/modal_actions';

const mapStateToProps = (state) => {
  return {
    projects: Object.keys(state.entities.projects).map(key => state.entities.projects[key])
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProjects:() => dispatch(fetchProjects()),
    fetchProject: id => dispatch(fetchProject(id)),
    requestModal: () => dispatch(openModal('request'))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsIndex);