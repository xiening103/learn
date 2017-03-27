import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { routerReducer } from 'react-router-redux';
import appReducer from './reducers';

// 合并App和react-router的reducer
var combinedReducers = combineReducers(Object.assign({}, {app: appReducer}, {routing: routerReducer}));
// redux调试log中间件
var loggerMiddleware = createLogger();
// 带中间件的store函数
function configStore (initialState) {
	var store = createStore(combinedReducers, initialState, compose(
		applyMiddleware(
			thunkMiddleware,
			loggerMiddleware
		),
		window.devToolsExtension ? window.devToolsExtension() : f => f 	//chrome扩展redux调试工具
		)
	);

	return store;
}

export default configStore;