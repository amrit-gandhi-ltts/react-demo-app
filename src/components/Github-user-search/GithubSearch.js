import React, { Component } from 'react';
import UserSearchInput from './UserSearchInput';
import UserInfo from './UserInfo';
import UserReposInfo from './UserReposInfo';
import axios from 'axios';

export default class GithubSearch extends Component {
    state = {
        URL: 'https://api.github.com/users',
        CLIENT_ID: 'fcfe0dcafe4d3c4778b9',
        CLIENT_SECRET: 'a662acb2f90ba2d71f23be8f6dc8d16ee70be070',
        username: '',
        bio: '',
        repos: ''
    }

    searchInput = (e) => {
        this.setState({[e.target.name]: e.target.value}, () => {
            if(this.state.username === '') {
                this.setState({
                    bio: '',
                    repos: ''
                })
            } else {
                axios
                .get(`${this.state.URL}/${this.state.username}?client_id=${this.state.CLIENT_ID}&&client_secret=${this.state.CLIENT_SECRET}`)
                .then(response => {
                    // console.log(response)
                    this.setState({
                        bio: response.data
                    })
                })
                .catch(error => console.log(error));
                axios
                .get(`${this.state.URL}/${this.state.username}/repos?client_id=${this.state.CLIENT_ID}&&client_secret=${this.state.CLIENT_SECRET}&per_page=8&sort=updated`)
                .then(response => {
                    // console.log(response, 'repos')
                    this.setState({
                        repos: response.data
                    })
                })
                .catch(error => console.log(error));
            }
        })
    }

    render() {
        return (
        <React.Fragment>
            <h1 className="mb-3">Github Search</h1>
            <UserSearchInput 
                searchInput={ this.searchInput } />

            <UserInfo 
                bio={ this.state.bio }
                repos={ this.state.repos } />

            <UserReposInfo 
                bio={ this.state.bio }
                repos={ this.state.repos } />
        </React.Fragment>
        )
    }
}
