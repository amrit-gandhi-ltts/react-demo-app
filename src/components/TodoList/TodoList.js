import React, { Component } from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => {
    const { items, clearList, handleDelete, handleEdit } = props;
    let itemsList;

    if(items) {
        itemsList = (
            items.map(item => (
                <TodoItem 
                    item={ item.title }
                    key={ item.id }
                    onDelete={ () => handleDelete(item.id) }
                    onEdit={ () => handleEdit(item.id) } />
            ))
        )
    }

    return (
    <React.Fragment>
        <h1>Task List</h1>
        <ul className="list-group mt-3 mb-3">
            { itemsList }
        </ul>
        <button type="submit" className="btn btn-danger btn-block"
            onClick={ clearList }>Clear list</button>
    </React.Fragment>
    )   
}

export default TodoList;