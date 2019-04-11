import React, { Component } from 'react';

class NameForm extends Component {
    state = {
        name: ''
    }

    changeHandler = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    submitForm = (e) => {
        e.preventDefault();
        // console.log(`The form is submitted and the name is ${this.state.name}.`);
    }

    render() {  
        const name = this.state.name;
        let sentence;
        
        if(name) {
            sentence = <p>The form is submitted and the name is <strong>{ this.state.name }</strong>.</p>
        } else {
            sentence = '';
        }
        return (
            <React.Fragment>
                <form onClick={ this.submitForm }>
                    <label>
                        Name:
                        <input type="text" placeholder="Enter name" 
                            value={ this.state.name }  
                            onChange={ this.changeHandler } />
                    </label>
                    <input type="submit" value="Submit" />
                    { sentence }
                </form>    
            </React.Fragment>
        );
    }
}

export default NameForm;