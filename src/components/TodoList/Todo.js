import React, { Component } from 'react';
import uuid from 'uuid';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

export default class Todo extends Component {
    state = {
        items: [],
        id: uuid(),
        item: '',
        isEdit: false
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            id: this.state.id,
            item: this.state.item
        }
        const updateditems = [...this.state.items, newItem];

        this.setState({
            items: updateditems,
            item: '',
            id: uuid(), 
            isEdit: false
        })
    }

    clearList = () => {
        this.setState({
            items: []
        })
    }

    handleDelete = (id) => {        
        const filteredItems = this.state.items.filter(item => item.id !== id);

        this.setState({
            items: filteredItems
        })
    }

    handleEdit = (id) => {
        const filteredItems = this.state.items.filter(item => item.id !== id);

        const selectedItem = this.state.items.find(item => item.id === id);

        this.setState({
            items: filteredItems,
            item: selectedItem.item,
            id: id,
            isEdit: true
        })
    }

    render() {      
        return (       
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <h1 className="col">Todo Component</h1>
                </div>
                <div className="row">
                    <div className="col">
                        <TodoInput 
                            item={ this.state.item }
                            changeHandler={ this.changeHandler }
                            onSubmit={ this.onSubmit }
                            editItem={ this.state.isEdit } />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <TodoList 
                            items={ this.state.items }
                            clearList={ this.clearList }
                            handleDelete={ this.handleDelete }
                            handleEdit={ this.handleEdit } />
                    </div>
                </div>
            </div>
        </React.Fragment>       
        )
    }
}
