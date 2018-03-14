import { combineReducers } from 'redux';
import events from './events';
import loading from './loading';

//import isLoading from './isLoading'

const driftApp = combineReducers({
	events,
	loading
});

export default driftApp 