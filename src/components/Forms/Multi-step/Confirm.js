import React, { Component } from 'react';
import './Confirm.css';

export default class Confirm extends Component {
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values: { firstname, lastname, email, occupation, city, bio } } = this.props;
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-6 m-auto">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <strong>Firstname:</strong> { firstname }
                                </li>
                                <li className="list-group-item">
                                    <strong>Lastname:</strong> { lastname }
                                </li>
                                <li className="list-group-item">
                                    <strong>Email:</strong> { email }
                                </li>
                                <li className="list-group-item">
                                    <strong>Occupation:</strong> { occupation }
                                </li>
                                <li className="list-group-item">
                                    <strong>City:</strong> { city }
                                </li>
                                <li className="list-group-item">
                                    <strong>Bio:</strong> { bio }
                                </li>
                            </ul>
                            <div className="buttons">
                                <button type="submit" 
                                    className="btn btn-info"
                                    onClick={ this.back }>Back</button>            
                                <button type="submit" 
                                    className="btn btn-primary"
                                    onClick={ this.continue }>Confirm</button>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
