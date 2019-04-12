import React, { Component } from 'react';
import './App.css';
import Time from './components/Time';
import Toggle from './components/Toggle';
import Login from './components/Login/Login';
import NameForm from './components/Forms/NameForm';

class App extends Component {
  render() { 
    return (
      <React.Fragment>
        <NameForm />
      </React.Fragment>
    );
  }
}

export default App;
