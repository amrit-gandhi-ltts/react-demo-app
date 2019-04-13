import React, { Component } from 'react';
import './FormPersonalDetails.css';

export default class FormPersonalDetails extends Component {
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-6 m-auto">
                            <form>
                                <div className="form-group">
                                    <label>Occupation:</label>
                                    <input type="text" 
                                        name="occupation"
                                        className="form-control" 
                                        placeholder="Enter occupation"
                                        // directly write without destructuring
                                        onChange={ this.props.changehandler } 
                                        defaultValue={ this.props.values.occupation } />
                                </div>
                                <div className="form-group">
                                    <label>City:</label>
                                    <input type="text" 
                                        name="city"
                                        className="form-control" 
                                        placeholder="Enter city"
                                        onChange={ this.props.changehandler }
                                        defaultValue={ this.props.values.city } />
                                </div> 
                                <div className="form-group">
                                    <label>Bio:</label>
                                    <input type="email" 
                                        name="bio"
                                        className="form-control" 
                                        placeholder="Enter bio"
                                        onChange={ this.props.changehandler } 
                                        defaultValue={ this.props.values.bio }/>
                                </div>  
                                <div className="buttons">
                                    <button type="submit" 
                                        className="btn btn-info"
                                        onClick={ this.back }>Back</button>            
                                    <button type="submit" 
                                        className="btn btn-primary"
                                        onClick={ this.continue }>Continue</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}