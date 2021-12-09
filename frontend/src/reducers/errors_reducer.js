import { combineReducers } from 'redux';

import SessionErrorsReducer from './error_reducers/session_errors_reducer';

export default combineReducers({
  session: SessionErrorsReducer
});