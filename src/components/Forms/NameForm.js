import React, { Component } from 'react';
import BasicForm from './BasicForm';

class NameForm extends Component {
    state = {
        firstName: '',
        lastName: '',
        options: '',
        showResult: false
    }

    onsubmitted = () => {
        this.setState({
            showResult: true
        })
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    } 

    render() { 
        const { firstName, lastName, options } = this.state;
        const values = { firstName, lastName, options };
        let sentence;

        if(values.firstName && values.lastName && values.options) {
            sentence = <p>
                        First name: { values.firstName } < br/>
                        Last Name: { values.lastName }< br/> 
                        Country: { values.options }
                    </p>
        } else {
            sentence = ''
        }
        
        return (
            <React.Fragment>
                <BasicForm  
                    onSubmit= { this.onsubmitted }
                    changeHandler= { this.changeHandler }
                    values={ values }
                />
                <div className="text-center">
                    { this.state.showResult ? sentence: null }
                </div>
            </React.Fragment>
        );
    }
}

export default NameForm;