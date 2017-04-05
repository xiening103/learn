/**
 * Created by xiening on 2017/4/1.
 */
import * as ActionTypes from './actionTypes';
import fetch from 'isomorphic-fetch';
// 获取天气预报数据
export function getBook(q) {
    return function(dispatch) {
        //https://api.douban.com/v2/book/search?q=%22%E5%B0%8F%E8%AF%B4%22
        var url = 'https://bird.ioliu.cn/v1/?url=https://api.douban.com/v2/book/search?q='+q;
        fetch(url, {method: 'get',mode:'cors'
        }).then(function (response) {
            console.log("fetch book data...");
            console.log(response);
            return response.json();
        }).then(function (json) {
            dispatch({
                type: ActionTypes.BOOK_GET_BOOK,
                status: 200,
                data: json
            });
        }).catch(function (err) {
            console.log(err);
        });
    }
}