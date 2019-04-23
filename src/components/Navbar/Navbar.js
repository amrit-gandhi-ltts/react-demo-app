import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import './Navbar.css';
import App from '../../App';
import Todo from '../TodoList/Todo';
import Posts from '../Posts/Posts';

class Navbar extends Component {
  render() {
    return (
        <React.Fragment>
            <h1>Navbar</h1>
        </React.Fragment>
    )
  }
}

export default Navbar;