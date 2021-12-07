import { combineReducers } from 'redux';
import session from './session_api_reducer';
import errors from "./errors_reducer";
import uiReducer from "./ui_reducer";
import entities from './entities_reducer';

const RootReducer = combineReducers({
  entities,
  session,
  errors,
  ui: uiReducer,
});

export default RootReducer;