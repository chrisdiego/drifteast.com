import React from 'react';
import ReactDOM from 'react-dom';
import './styles/css/index.css';
import App from './App';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from "redux-thunk";
import { Provider } from 'react-redux';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	reducers, 
	composeEnhancers(applyMiddleware(thunk))
 );

store.subscribe(() => {
	store.getState();
})

ReactDOM.render(<Provider store={store}>
		<App />
	</Provider>, document.getElementById('root'));
registerServiceWorker();
