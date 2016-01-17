import {combineReducers} from '../utils/reducers';

import chat from './chat';
import login from './login';
import login_error from './login_error';

export default combineReducers({
  chat,
  login,
  login_error
});
