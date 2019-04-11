import React from 'react';
import UserGreeting from './UserGreeting';
import GuestGreeting from './GuestGreeting';

const Greeting = (props) => {
    const loggedIn = props.isLoggedIn;

    if(loggedIn) {
        return (
            <UserGreeting />
        )
    } else {
        return (
            <GuestGreeting />
        )
    }
}

export default Greeting;