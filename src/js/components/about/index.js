import React from 'react';
import Remarkable from 'remarkable';

var PRODUCTS=[
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
]
// About页面
class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
            <FilterableProductTable products={PRODUCTS}></FilterableProductTable>
        </div>
    );
  }
}

//FilterableProductTable
class FilterableProductTable extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            filterText:'',
            inStockOnly:false
        }
       this.handleUserInput=this.handleUserInput.bind(this);
    }
    handleUserInput(filterText,inStockOnly){
        this.setState({
            filterText:filterText,
            inStockOnly:inStockOnly
        });
    }
    render(){
        return(
            <div>
                <SearchBar onUserInput={this.handleUserInput} filterText={this.state.filterText} inStockOnly={this.state.inStockOnly}></SearchBar>
                <ProductTable products={this.props.products} filterText={this.state.filterText} inStockOnly={this.state.inStockOnly}>
                </ProductTable>
            </div>
        )
    }
}
//SearchBar
class SearchBar extends React.Component{
    constructor(props) {
        super(props);
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange(){
        this.props.onUserInput(this.refs.filterTextInput.value,this.refs.inStockOnlyInput.checked);
    }
    render(){
            return(
                <form>
                    <input type="text" placeholder="搜索" value={this.props.filterText} ref="filterTextInput" onChange={this.handleChange}/>
                    <p>
                        <input type="checkbox" checked={this.props.inStockOnly} ref="inStockOnlyInput"/>
                        {' '}
                        Only show products in stock
                    </p>
                </form>
            );
    }
}
//ProductTable
class ProductTable extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        var rows=[];
        var lastCategory=null;
        this.props.products.forEach(function(product){
            if(product.name.indexOf(this.props.filterText) === -1||(!product.stocked && this.props.inStockOnly)){
                return;
            }
            if(product.category !== lastCategory){
                rows.push(<ProductCategoryRow category={product.category} key={product.category}></ProductCategoryRow>);
            }
            rows.push(<ProductRow product={product} key={product.name}></ProductRow>);
            lastCategory=product.category;
        }.bind(this));
        return(
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                {rows}
                </tbody>
            </table>
        );
    }
}
//ProductCategoryRow
class ProductCategoryRow extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <tr><th colSpan="2">{this.props.category}</th></tr>
        );
    }
}

//ProductRow
class ProductRow extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        var name=this.props.product.stocked?
            this.props.product.name:
            <span style={{color:'red'}}>
                {this.props.product.name}
            </span>;
        return(
            <tr>
                <td>{name}</td>
                <td>{this.props.product.price}</td>
            </tr>
        );
    }
}
export default About;































