import React, { Component } from 'react'

const TodoInput = (props) => {   
    const { item, changeHandler, onSubmit, editItem, disabled } = props;
    
    return (        
    <React.Fragment>
        <form onSubmit={ onSubmit }>
            <div className="form-group">
                <div className="input-group mb-2">
                    <div className="input-group-prepend">
                        <div className="input-group-text">#</div>
                    </div>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Add a task"
                        name="title"
                        value={ item }
                        onChange={ changeHandler } />
                </div>
            </div>
            <button 
                type="submit" 
                className={ editItem ? "btn btn-success btn-block": "btn btn-primary btn-block" } 
                disabled={ disabled }>
                { editItem ? 'Edit Item': 'Add Item'}
            </button>
        </form>
    </React.Fragment>       
    )   
}

export default TodoInput;