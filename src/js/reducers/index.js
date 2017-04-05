import { combineReducers } from 'redux';
import info from './info';
import book from './book';

// 合并各模块的reducer
var appReducer = combineReducers({
	info,
	book
});

export default appReducer;