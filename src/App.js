import React, { Component } from 'react';
import './App.css';
import Time from './components/Time';
import Toggle from './components/Toggle';
import Login from './components/Login/Login';
import NameForm from './components/Forms/NameForm';
import UserForm from './components/Forms/Multi-step/UserForm';

class App extends Component {
  render() { 
    return (
      <React.Fragment>
        <UserForm />
      </React.Fragment>
    );
  }
}

export default App;
