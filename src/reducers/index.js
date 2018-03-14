import { combineReducers } from 'redux'
import events from './events'
//import isLoading from './isLoading'

const driftApp = combineReducers({
	events
});

export default driftApp 