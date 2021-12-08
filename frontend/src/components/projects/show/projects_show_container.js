import { connect } from 'react-redux';
import ProjectsShow from './projects_show_component';
import './project_show.css'
import { fetchGoals } from '../../../actions/goal_actions';

const mapStateToProps = (state) => {
  return {
    users: state.entities.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchGoals:() => dispatch(fetchGoals())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsShow);