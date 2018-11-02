import React, { Component } from 'react';
import AddNew from './components/AddNew';
import RenderProducts from './components/RenderProducts';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      
    }
    this.getProducts = this.getProducts.bind(this);
    // this.createProduct = this.createProduct.bind(this);
    this.updateProduct = this.updateProduct.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
  }
  getProducts() {
    axios.get('/api/products').then(res => {
      this.setState({products: res.data});
      console.log(this.state.products);
    })
  }
  updateProduct() {

  }
  deleteProduct() {

  }
  componentDidMount() {
    this.getProducts();
  }
  render() {
    return (
      <div className="App">
        <header>
          <h2>SHELFIE</h2>
          <div className="header-button">Add a New Product</div>
        </header>
        <RenderProducts products={this.state.products} />
        <AddNew />
      </div>
    );
  }
}

export default App;
