import React, { Component } from 'react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Greeting from './Greeting/Greeting';

class Login extends Component {
    // By using constuctor(props) and super(props), you can use 'this'. Then by using bind(this), you can use function declarations.

    // constructor(props) {
    //     super(props);
    //     this.loginClickHandler = this.loginClickHandler.bind(this);
    //     this.logoutClickHandler = this.logoutClickHandler.bind(this);
    //     this.state = {isLoggedIn: false};
    // }

    // 'this' is not required. Declaring constructor is also not required. But here, the functions, loginClickHandler and logoutClickHandler has to be arrow functions or it will throw error saying 'this' is not defined.

    state = {
        isLoggedIn: false
    }

    loginClickHandler = () => {
        this.setState({
            isLoggedIn: true
        });
    }

    logoutClickHandler = () => {
        this.setState({
            isLoggedIn: false
        })
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;

        if(isLoggedIn) {
            button = <LogoutButton onclick={ this.logoutClickHandler } />
        } else {
            button = <LoginButton onclick={ this.loginClickHandler } />
        }

        return (
            <React.Fragment>
                <div>
                    <h1>Login Page</h1>
                    <Greeting isLoggedIn={ isLoggedIn }/>
                    { button }
                </div>
            </React.Fragment>
        );
    }
}

export default Login;