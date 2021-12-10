import { connect } from 'react-redux';
import ProjectsIndex from './projects_index_component';
import { fetchProjects } from '../../../actions/project_actions';
import { oneProject } from '../../../actions/project_actions';
import { openModal } from '../../../actions/modal_actions';
import { fetchTags } from '../../../actions/tag_actions';

const mapStateToProps = (state) => {
  return {
    projects: Object.keys(state.entities.projects).map(key => state.entities.projects[key]),
    tags: state.entities.tags.namesByCategory
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProjects:() => dispatch(fetchProjects()),
    fetchTags: params => dispatch(fetchTags(params)),
    oneProject: id => dispatch(oneProject(id)),
    requestModal: () => dispatch(openModal('request'))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsIndex);