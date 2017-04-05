/**
 * Created by xiening on 2017/4/1.
 */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/book/actions';
import './style.css';

// book页面
class Book extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log('get book data');
        this.props.actions.getBook("小说");
    }
    render() {
        var bookdata = this.props.book;
        var bDatas = bookdata.mbook;
        console.log("book......");
        //console.log(bookdata);
        console.log(bDatas);

        if (!bDatas) {
            return (
                <div>这里是图书页面。</div>
            );
        }
        var bookLi=[];
        var books=bDatas.books;
        books.forEach(function(bData,key){
            bookLi.push(<li key={key}>
                <img src={bData.image}/>
                <p>标题：{bData.title}</p>
                <p>作者：{bData.author}</p></li>);
        }.bind(this));
        return (
            <div>
                <ul>
                    {bookLi}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state , ownProps) => {
    return {book : state.app.book}
};
const mapDispatchToProps = (dispatch , ownProps) => {
    var boundActionCreators = bindActionCreators(actions, dispatch);
    return {
        actions: boundActionCreators
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Book);