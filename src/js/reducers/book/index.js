/**
 * Created by xiening on 2017/4/1.
 */
import * as ActionTypes from '../../actions/book/actionTypes';

var initialState = {
    desc: 'book',
    // 图书
    mbook: null
};
export default function(state = initialState, action) {
    switch(action.type) {
        case ActionTypes.BOOK_GET_BOOK:
            return Object.assign({}, state, {mbook: action.data});
        default:
            return state;
    }
}