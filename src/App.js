import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

//components
import Header from './components/header_components/header'
import Footer from './components/footer_components/footer'
import Homepage from './components/pages/homepage'
import Product from './components/pages/product'
//includes
import './assets/css/default.min.css'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
            <Route exact path="/" component={Homepage} />
            <Route exact path="/Product" component={Product} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
