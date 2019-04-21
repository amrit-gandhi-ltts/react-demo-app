import React, { Component } from 'react';
import './App.css';
import Time from './components/Time';
import Toggle from './components/Toggle';
import Login from './components/Login/Login';
import NameForm from './components/Forms/NameForm';
import UserForm from './components/Forms/Multi-step/UserForm';
import ImageSearch from './components/Image-search/ImageSearch';
import Todo from './components/TodoList/Todo';
import Posts from './components/Posts/Posts';

class App extends Component {
  render() { 
    return (
      <React.Fragment>
        <Posts />
      </React.Fragment>
    );
  }
}

export default App;
