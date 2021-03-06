import React, { Component } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand text-uppercase" href="#">React Demo App</a>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to='/'>Home</Link>
            </li>
            <li className="nav-item">
              <Link to='/time'>Time</Link>
            </li>
            <li className="nav-item">
              <Link to='/login'>Simple Login</Link>
            </li>
            <li className="nav-item">
              <Link to='/name-form'>Simple Form</Link>
            </li>
            <li className="nav-item">
              <Link to='/user-form'>Multi-step Form</Link>
            </li> 
            <li className="nav-item">
              <Link to='/example'>Example</Link>
            </li>                      
          </ul>

          <a className="navbar-brand" href="#">Apps</a>
          <ul className="navbar-nav">            
            <li className="nav-item">
              <Link to='/image-search'>Image Search App</Link>
            </li>
            <li className="nav-item">
              <Link to='/todo'>Todo App</Link>
            </li>
            <li className="nav-item">
              <Link to='/posts'>Posts Fetch App</Link>
            </li>
            <li className="nav-item">
              <Link to='/github-search'>Github Search App</Link>
            </li>
          </ul>
        </nav>
      </React.Fragment>
    )
  }
}

export default Navbar;