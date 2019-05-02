import React, { Component } from 'react';

class Toggle extends Component {
    // 'this' is not required. Declaring constructor is also not required.
    state = {
        isToggleOn: true
    }

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         isToggleOn: true
    //     }
    // }    

    handleclick = () => {        
        this.setState({
            isToggleOn: !this.state.isToggleOn
        })
    }

    render() {
        return (
            <React.Fragment>
                <h1>{ this.state.isToggleOn ? 'TOGGLE ON' : 'TOGGLE OFF' }</h1>
                <button href="#" onClick={ this.handleclick }>
                    { this.state.isToggleOn ? 'ON' : 'OFF' }
                </button>
            </React.Fragment>
        );
    }
}

export default Toggle;