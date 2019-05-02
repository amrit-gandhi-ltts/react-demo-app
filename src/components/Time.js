import React, { Component } from 'react';

class Time extends Component {
    constructor(props) {
       super(props);
       this.state = {
           date: new Date()
       }
    }

    componentDidMount() {
       this.timer = setInterval(() => this.tick(), 1000);
    }

    tick = () => {
       this.setState({
           date: new Date()
       })
    }

    render() {
        return (
            <React.Fragment>
                <h1>Time</h1>
                <p>
                    The time is { this.state.date.toLocaleTimeString() }.
                </p>
            </React.Fragment>
        );
    }
}


export default Time;