import * as RequestApiUtil from "../util/requests_api_util";

// Action types
export const RECEIVE_REQUEST_SENT = "RECEIVE_REQUEST_SENT";
export const RECEIVE_REQUESTS = "RECEIVE_REQUESTS";
export const REMOVE_REQUEST = "REMOVE_REQUEST";

// Actions
export const receiveRequests = requests => ({
  type: RECEIVE_REQUESTS,
  requests
});

export const receiveRequestSent = () => ({
  type: RECEIVE_REQUEST_SENT
});

export const removeRequest = requestId => ({
  type: REMOVE_REQUEST,
  requestId
});

// Thunk Action Creators
export const fetchRequests = recipientId => dispatch => (
  RequestApiUtil.getRequests(recipientId)
    .then(requests => dispatch(receiveRequests(requests.data)))
    .catch(err => console.log(err))
)

export const createRequest = request => dispatch => (
  RequestApiUtil.createRequest(request)
    .then(() => dispatch(receiveRequestSent()))
    .catch(err => console.log(err))
)

export const deleteRequest = requestId => dispatch => (
  RequestApiUtil.deleteRequest(requestId)
    .then(() => dispatch(removeRequest(requestId)))
    .catch(err => console.log(err))
)