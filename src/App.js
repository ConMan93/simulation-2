import React, { Component } from 'react';
import AddNew from './components/AddNew';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    }
    this.getProducts = this.getProducts.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
    this.updateProduct = this.updateProduct.bind(this);
  }
  deleteProduct(id) {
    axios.delete('/api/products/' + id).then(res => {
      this.setState({products: res.data});
    }).catch(err => console.error(err));

  }
  updateProduct(id, name, price, img) {
    axios.put('/api/products/' + id, { name, price, img }).then(res => {
      this.setState({products: res.data});
    }).catch(err => console.error(err));
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
        <div className="main-container">
        <Switch>
          <Route path="/" exact render={props => <Dashboard {...props} updateProduct={this.updateProduct} deleteProduct={this.deleteProduct} products={this.state.products} />} />
          <Route path="/addnew" render={props => <AddNew {...props} getProducts={this.getProducts} />} />
        </Switch>
        </div>
      </div>
    );
  }
}

export default App;
