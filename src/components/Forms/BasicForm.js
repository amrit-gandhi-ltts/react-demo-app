import React, { Component } from 'react';

class BasicForm extends Component {
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
                                <div className="form-group">
                                    <label>Pick your favorite flavor: </label>
                                    <select className="custom-select form-control" 
                                        name="options"
                                        onChange={ this.changeHandler }>
                                            <option value="">Choose Country</option>
                                            <option value="India">India</option>
                                            <option value="US">US</option>
                                            <option value="Russia">Russia</option>
                                            <option value="Germany">Germany</option>
                                    </select> 
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

export default BasicForm;