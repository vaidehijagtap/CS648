import React, {Component} from 'react';
import '../App.css';
import Filter from './Filter';
import ProductTable from './ProductTable';
import ProductForm from './ProductForm';


let PRODUCTS = {
  '1': {id: 1, category: 'Pants', price: '$800', name: 'Zara'},
  '2': {id: 2, category: 'Clothing', price: '$500', name: 'GAP'},
  '3': {id: 3, category: 'Food', price: '$225', name: 'Pani Puri'},
  '4': {id: 4, category: 'Shoes', price: '$250', name: 'Reebok'},
  '5': {id: 5, category: 'Housing', price: '$1500', name: 'Furniture'},
  '6': {id: 6, category: 'Books', price: '$500', name: '3 Mistakes of my Life'},
  '7': {id: 7, category: 'Sweatshirt', price: '$120', name: 'Puma'},
  '8': {id: 8, category: 'Watch', price: '$300', name: 'Titan'}
};


class Product extends Component {

  constructor(props) {
    super(props);
    this.state = {
        products : PRODUCTS,
        filterText : ''
      }
  }

  handleFilter = (filterInput) => {
    this.setState(filterInput);
  }

  handleSave = (product) => {
    if (!product.id) {
         product.id = new Date().getTime()
    }
    this.setState((prevState) => {
      let products = prevState.products
      products[product.id] = product
      return { products }
    });

  }

  handleDestroy = (productId) => {
    this.setState((prevState) => {
      let products = prevState.products
      delete products[productId]
      return { products }
    });
}


  render() {
    return (
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-md-6">
            <h1>Inventory</h1>
            <Filter 
                onFilter={this.handleFilter}/>

            <ProductTable 
                products={this.state.products} 
                filterText={this.state.filterText}
                onDestroy={this.handleDestroy}/>

            <ProductForm
                onSave={this.handleSave}/>
            </div>
        </div>
      </div>
    )
  }
}

export default Product;