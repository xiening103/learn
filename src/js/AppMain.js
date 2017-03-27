import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configStore from './configStore';
import routes from './routes';


export default class AppMain extends React.Component {

	render() {
		var store = configStore();
		return (
			<Provider store={store}>
				<Router history={browserHistory} routes={routes}></Router>
			</Provider>
		);
	}
}
