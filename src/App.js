import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar/Navbar';
import Time from './components/Time';
import Toggle from './components/Toggle';
import Login from './components/Login/Login';
import NameForm from './components/Forms/Basic-form/NameForm';
import UserForm from './components/Forms/Multi-step/UserForm';
import ImageSearch from './components/Image-search/ImageSearch';
import Todo from './components/TodoList/Todo';
import Posts from './components/Posts/Posts';
import GithubSearch from './components/Github-user-search/GithubSearch';
import Example from './components/Example';
import NotFound from './components/NotFound';

class App extends Component {
  render() { 
    return (
      <BrowserRouter>
        <div className="container-fluid">
          <div className="row">
            <div className="col-3 p-0">
              <Navbar />
            </div>
            <div className="col-9 page-wrap">
              <Switch>
                <Route exact path="/" component={ Home } />
                <Route path="/time" component={ Time } />
                <Route path="/toggle" component={ Toggle } />
                <Route path="/login" component={ Login } />
                <Route path="/name-form" component={ NameForm } />
                <Route path="/user-form" component={ UserForm } />
                <Route path="/image-search" component={ ImageSearch } />
                <Route path="/todo" component={ Todo } />
                <Route path="/posts" component={ Posts } />
                <Route path="/github-search" component={ GithubSearch } />
                <Route path="/example" component={ Example } />
                <Route path="*" component={ NotFound } />
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
