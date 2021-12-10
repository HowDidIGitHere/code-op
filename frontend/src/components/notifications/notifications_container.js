import { connect } from "react-redux";
import { withRouter } from "react-router";
import { fetchRequests, deleteRequest} from "../../actions/request_actions";
import { fetchProject, updateProject } from "../../actions/project_actions";
import { closeModal,openModal } from "../../actions/modal_actions"
import Notifications from "./notifications_component";

const mSTP = (state, ownProps) => {
  return {
    currentUser: state.session.user.id
  }
}

const mDTP = (dispatch, ownProps) => {
  return {
    openNotificationsModal: () => dispatch(openModal('notifications')),
    closeModal: () => dispatch(closeModal()),
    fetchRequests: (recipientId) => dispatch(fetchRequests(recipientId)),
    fetchProject: (id) => dispatch(fetchProject(id)),
    updateProject: (data) => dispatch(updateProject(data)),
    deleteRequest: (requestId) => dispatch(deleteRequest(requestId))
  }
}

export default withRouter(connect(mSTP, mDTP)(Notifications))