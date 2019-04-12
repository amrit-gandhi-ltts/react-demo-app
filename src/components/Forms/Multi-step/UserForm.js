import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';

export default class UserForm extends Component {
    state = {
        step: 1,
        firstname: '',
        lastname: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''
    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        })
    }

    changehandler = (input, e) => {
        this.setState({
            [input]: e.target.value
        })
    }

    render() {
        const { step } = this.state;
        const { firstname, lastname, email, occupation, city, bio } = this.state;
        const values = { firstname, lastname, email, occupation, city, bio };

        switch(step) {
            case 1:
                return (                    
                    <React.Fragment>
                        <FormUserDetails 
                            nextStep={ this.nextStep } 
                            changehandler={this.changehandler}
                            values={values}
                        />
                    </React.Fragment> 
                )
            case 2:
                return (
                    <React.Fragment>
                        <h1>Personal details</h1>
                    </React.Fragment> 
                )
        }
    }
}
