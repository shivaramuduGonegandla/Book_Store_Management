import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import BookListing from './pages/BookListing';
import BookDetails from './pages/BookDetails';
import ShoppingCart from './pages/ShoppingCart';
import Checkout from './pages/Checkout';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/books" exact component={BookListing} />
      <Route path="/books/:id" component={BookDetails} />
      <Route path="/cart" component={ShoppingCart} />
      <Route path="/checkout" component={Checkout} />
    </Switch>
  </Router>
);

export default Routes;
