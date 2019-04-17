import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
    render() {
        const { items, clearList, handleDelete, handleEdit } = this.props;
        let itemsList;

        if(items) {
            itemsList = (
                items.map(item => (
                    <TodoItem 
                        item={ item.item }
                        key={ item.id }
                        onDelete={ () => handleDelete(item.id) }
                        onEdit={ () => handleEdit(item.id) } />
                ))
            )
        }

        return (
        <React.Fragment>
            <h1>Todo List Component</h1>
            <ul className="list-group mt-3 mb-3">
                { itemsList }
            </ul>
            <button type="submit" className="btn btn-danger btn-block"
                onClick={ clearList }>Clear list</button>
        </React.Fragment>
        )
    }
}