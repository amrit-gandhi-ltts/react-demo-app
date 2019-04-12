import React, { Component } from 'react';
import './App.css';
import Time from './components/Time';
import Toggle from './components/Toggle';
import Login from './components/Login/Login';
import NameForm from './components/Forms/NameForm';

class App extends Component {
  state = {
    fields: {}
  }

  submitted = (fieldItems) => {
    this.setState({
      fields: fieldItems
    })
  }

  render() {
    let sentence;

    if(this.state.fields.firstName && this.state.fields.lastName) {
      sentence = <p className="text-center">
                    First name is <strong>{ this.state.fields.firstName.toUpperCase() }</strong> and last name is <strong>{ this.state.fields.lastName.toUpperCase() }</strong>.
                  </p>
    } else {
      sentence = <p className="text-center">
                    Please enter first and last name.
                  </p>
    }
    return (
      <React.Fragment>
        <NameForm onSubmit={ this.submitted }/>
        { sentence }
      </React.Fragment>
    );
  }
}

export default App;
