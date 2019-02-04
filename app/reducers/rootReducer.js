/* deoendencies */
import { combineReducers } from 'redux';
import session from './session/SessionReducer';
import {routerReducer} from 'react-router-redux'
/* const */
const main = combineReducers({session});
export default combineReducers({routerReducer, main});