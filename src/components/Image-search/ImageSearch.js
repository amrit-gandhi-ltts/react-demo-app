import React, { Component } from 'react';
import ImageList from './ImageList';
import axios from 'axios';

export default class ImageSearch extends Component {
    state = {
        searchText: '',
        options: 10,
        url: 'https://pixabay.com/api',
        apiKey: '12198337-7478397b9b83317fe9bf7fe7c',
        images: []
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value}, () => {
            axios
            .get(`${this.state.url}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&safesearch=true&order=popular&per_page=${this.state.options}`)
            .then(res => {
                this.setState({
                    images: res.data.hits
                })
            })
            .catch(err => console.log(err))
        });        
    }

    render() {
        return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>Image Search</h1>  
                    </div>       
                </div>
                <div className="row">
                    <form className="col">
                        <div className="form-group">                        
                            <input type="text" className="form-control" placeholder="Enter keywords"
                                name="searchText"
                                onChange={ this.changeHandler } />
                        </div>
                        <div className="form-group">                        
                            <select className="custom-select form-control" 
                                name="options"
                                onChange={ this.changeHandler }>
                                    <option value="10">10</option>
                                    <option value="5">5</option>
                                    <option value="20">20</option>
                                    <option value="50">50</option>
                            </select> 
                        </div>
                    </form>
                </div>
                <div className="row">
                    <div className="col">
                        { this.state.images.length > 0 ? (
                            <ImageList 
                                images={ this.state.images } 
                                text={ this.state.searchText }
                                numbers={ this.state.options } />
                        ): null }
                    </div>
                </div>
            </div>
        </React.Fragment>
        )
    }
}
