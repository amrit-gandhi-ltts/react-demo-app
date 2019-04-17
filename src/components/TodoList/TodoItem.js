import React, { Component } from 'react';


export default class TodoItem extends Component {
    render() {
        const { item, onDelete, onEdit } = this.props;        
    
        return (
        <React.Fragment>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                <div style={{flexBasis: '80%'}}>
                    { item }
                </div>
                <div>
                    <span className="btn btn-primary" onClick={ onEdit }>
                        <i className="fas fa-edit"></i>
                    </span>
                    <span className="btn btn-danger" onClick={ onDelete }>
                        <i className="fas fa-trash-alt"></i>
                    </span>
                </div>
            </li>
        </React.Fragment>
        )
    }
}
