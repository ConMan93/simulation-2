import React, { Component } from 'react';
import AddNew from './components/AddNew';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
// import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    }
    this.getProducts = this.getProducts.bind(this);
  }
  getProducts() {
    axios.get('/api/products').then(res => {
      this.setState({products: res.data});
    }).catch(err => console.error(err))
  }
  componentDidMount() {
    this.getProducts();
  }
  render() {
    return (
      <div className="App">
        <Header />
        {/* <Route path="/addnew" render={props => <AddNew {...props} createProduct={this.createProduct} />} /> */}
        <div className="main-container">
          <Dashboard getProducts={this.getProducts} products={this.state.products} />
          <AddNew getProducts={this.getProducts} />
        </div>
      </div>
    );
  }
}

export default App;
