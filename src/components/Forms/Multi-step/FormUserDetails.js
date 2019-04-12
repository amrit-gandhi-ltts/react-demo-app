import React, { Component } from 'react'

export default class FormUserDetails extends Component {
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values, handler } = this.props;
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-6 m-auto">
                            <form>
                                <div className="form-group">
                                    <label>First Name:</label>
                                    <input type="text" 
                                        name="firstname"
                                        className="form-control" 
                                        placeholder="Enter first name"
                                        onChange={ handler }
                                        defaultValue={ values.firstname } />
                                </div>
                                <div className="form-group">
                                    <label>Last Name:</label>
                                    <input type="text" 
                                        name="lastname"
                                        className="form-control" 
                                        placeholder="Enter last name"
                                        onChange={ handler }
                                        defaultValue={ values.lastname } />
                                </div> 
                                <div className="form-group">
                                    <label>Email:</label>
                                    <input type="email" 
                                        name="email"
                                        className="form-control" 
                                        placeholder="Enter email"
                                        onChange={ handler } 
                                        defaultValue={ values.email }/>
                                </div>                                                                                          
                                <button type="submit" 
                                    className="btn btn-primary btn-block" 
                                    onClick={ this.continue }>Continue</button>
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
