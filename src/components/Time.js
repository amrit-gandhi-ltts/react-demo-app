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
            <div>
                <h1>Time</h1>
                <p>
                    The time is { this.state.date.toLocaleTimeString() }.
                </p>
            </div>
        );
    }
}


export default Time;