import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';

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

    changehandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
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
                        <h1>Multi-step Form</h1>
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
                        <h1>Multi-step Form</h1>
                        <FormPersonalDetails 
                            nextStep={ this.nextStep } 
                            prevStep={ this.prevStep }
                            changehandler={this.changehandler}
                            values={values}
                        />
                    </React.Fragment> 
                )
            case 3:
                return (
                    <React.Fragment>
                        <h1>Multi-step Form</h1>
                        <Confirm 
                            nextStep={ this.nextStep } 
                            prevStep={ this.prevStep }
                            values={values}
                        />
                    </React.Fragment> 
                )
            case 4:
                return (
                    <React.Fragment>
                        <Success />
                    </React.Fragment> 
                )
            default:
                return (
                    <React.Fragment>
                        <h1>Default Message</h1>
                    </React.Fragment> 
                )
        }
    }
}
