import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './Component/Content/home/';
import Modal from './Component/Content/modal/';
import About from './Component/Content/about/';
import Blog from './Component/Content/blog/';
import Cart from './Component/Content/cart/';
import ReactTypingEffect from 'react-typing-effect';

function App() {
  return (
      <Router>
        <div className="container">
          <h2><ReactTypingEffect text={"Hello cac ban ahiii!!!!!!!!!!!!!"}/></h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
              <li><Link to={'/'} className="nav-link"> Home </Link></li>
              <li><Link to={'/about'} className="nav-link">About</Link></li>
              <li><Link to={'/blog'} className="nav-link">Blog</Link></li>
              <li><Link to={'/modal'} className="nav-link">Modal</Link></li>
            </ul>
          </nav>
          <hr/>
          <Switch>
            <Route exact path='/' children={() => (<Home/>)}/>
            <Route path='/about' component={About}/>
            <Route path='/blog' component={Blog}/>
            <Route path='/modal' component={Modal}/>
            <Route path='/shoppingCart' component={Cart}/>
          </Switch>
        </div>
      </Router>
  );
}

export default App;