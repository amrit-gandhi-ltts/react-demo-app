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
                        Edit
                    </span>
                    <span className="btn btn-danger" onClick={ onDelete }>
                        Delete
                    </span>
                </div>
            </li>
        </React.Fragment>
        )
    }
}
