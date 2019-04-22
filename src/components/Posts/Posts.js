import React, { Component } from 'react';
import Post from './Post';
import AddPost from './AddPost';
import axios from 'axios';
import './Posts.css';

class Posts extends Component {
  state = {
    url: 'https://jsonplaceholder.typicode.com/posts',
    posts: [],
    post: '',
    id: null
  }

  componentDidMount() {
    axios
    .get(this.state.url)
    .then(res => {
      const postsData = res.data.splice(0, 4);
      this.setState({
        posts: postsData
      })
    })
    .catch(err => console.log(err));
  }

  clickHandler = (id) => {
    const filteredPost = this.state.posts.filter(post => post.id === id);
    
    this.setState({
      post: filteredPost,
      id: id
    })
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state, 'submitted')
  }

  render() {
    const posts = this.state.posts;
    let postsList;

    postsList = posts.map(post => (
      <div className="col-4 card m-2" key={ post.id } onClick={ () => this.clickHandler(post.id) }>
        <div className="card-body">
          <h5 className="card-title color-red">{ post.title }</h5>
        </div>
      </div>
    ))
    
    return(
      <React.Fragment>
        <h1>Posts</h1>
        <h4>Select any post</h4>
        <div className="container">
          <div className="row d-flex justify-content-center">
            { postsList }
          </div>

          <Post  
            post={ this.state.post } />

          <AddPost 
            onChange={ this.changeHandler }
            onSubmit={ this.onSubmit }
            data={ this.state } />
        </div>
      </React.Fragment>
    )
  }
}

export default Posts;