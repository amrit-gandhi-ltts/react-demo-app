import React, { Component } from 'react';
import BasicForm from './BasicForm';

class NameForm extends Component {
    state = {
        fields: {}
    }

    onsubmitted = (fieldItems) => {
        this.setState({
            fields: fieldItems
        })
    }

    render() { 
        let sentence;

        if(this.state.fields.firstName && this.state.fields.lastName) {
        sentence = <p className="text-center">
                        First name is <strong>{ this.state.fields.firstName.toUpperCase() }</strong> and last name is <strong>{ this.state.fields.lastName.toUpperCase() }</strong>.
                    </p>
        } else {
        sentence = <p className="text-center">
                        Please enter first and last name.
                    </p>
        }

        return (
            <React.Fragment>
                <BasicForm onSubmit={ this.onsubmitted } />
                { sentence }
            </React.Fragment>
        );
    }
}

export default NameForm;