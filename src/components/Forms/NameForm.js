import React, { Component } from 'react';

class NameForm extends Component {
    state = {
        firstName: '',
        lastName: ''
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }    

    submitForm = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        // this.setState({
        //     firstName: '',
        //     lastName: ''
        // })
    }

    render() { 
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-6 m-auto">
                            <form>
                                <div className="form-group">
                                    <label>First Name:</label>
                                    <input type="text" 
                                        name="firstName"
                                        className="form-control" 
                                        placeholder="Enter first name"
                                        onChange={ this.changeHandler } />
                                </div>
                                <div className="form-group">
                                    <label>Last Name:</label>
                                    <input type="text" 
                                        name="lastName"
                                        className="form-control" 
                                        placeholder="Enter last name"
                                        onChange={ this.changeHandler } />
                                </div>                        
                                <button type="submit" 
                                    className="btn btn-primary btn-block" 
                                    onClick={ this.submitForm }>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>    
            </React.Fragment>
        );
    }
}

export default NameForm;