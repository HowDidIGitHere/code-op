import { connect } from "react-redux";
import { withRouter } from "react-router";
import { createGoal } from "../../actions/goal_actions";
import {closeModal} from "../../actions/modal_actions"
import GoalsCreate from "./goals_create_component";

const mSTP = (state, ownProps) => {
  // const location = ownProps.location.pathname.split("/")
  return{
    // project: state.entities.projects[location[2]],
  }
}

const mDTP = (dispatch, ownProps) => ({
  createGoal: data => dispatch(createGoal(data)),
  closeModal: () => dispatch(closeModal()),

})

export default withRouter(connect(mSTP, mDTP)(GoalsCreate))