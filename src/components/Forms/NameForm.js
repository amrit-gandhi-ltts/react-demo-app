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
                        Person's name is <strong>{ this.state.fields.firstName.toUpperCase() } { this.state.fields.lastName.toUpperCase() }</strong> and he is from <strong>{ this.state.fields.options.toUpperCase() }.</strong>.
                    </p>
        } else {
        sentence = <p className="text-center">
                        Please enter first, last name and the country.
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