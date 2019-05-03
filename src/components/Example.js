import React, { Component } from 'react'

export default class Example extends Component {
    state = {
        name: 'John',
        age: 30
    }

    render() {
        setTimeout(() => {
            this.setState({
                name: 'Amrit',
                age: 45
            })
        }, 3000)
        return (
            <React.Fragment>
                <h1>Example</h1>
                <p>
                    This is my name <strong>{ this.state.name }</strong> and my age is <strong>{ this.state.age }</strong>.
                </p>
            </React.Fragment>
        )
    }
}
