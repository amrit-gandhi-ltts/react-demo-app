import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Time from './components/Time';
import Toggle from './components/Toggle';
import Login from './components/Login/Login';
import NameForm from './components/Forms/NameForm';
import UserForm from './components/Forms/Multi-step/UserForm';
import ImageSearch from './components/Image-search/ImageSearch';
import Todo from './components/TodoList/Todo';
import Posts from './components/Posts/Posts';
import GithubSearch from './components/Github-user-search/GithubSearch';

class App extends Component {
  render() { 
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row">
            <div className="col-3 p-0 navbar">
              <Navbar />
            </div>
            <div className="col-9 page-wrap">
              <GithubSearch />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
