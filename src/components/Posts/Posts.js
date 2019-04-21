import React, { Component } from 'react';
import Post from './Post';
import AddPost from './AddPost';
import axios from 'axios';

class Posts extends Component {
  state = {
    url: 'https://jsonplaceholder.typicode.com/posts',
    posts: [],
    id: 0,
    title: '',
    body: ''
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
    console.log(id)
  }

  render() {
    const posts = this.state.posts;
    let postsList;

    postsList = posts.map(post => (
      <div className="col-4 card m-2" key={ post.id } onClick={ () => this.clickHandler(post.id) }>
        <div className="card-body">
          <h5 className="card-title">{ post.title }</h5>
          <p className="card-text">{ post.body }</p>
        </div>
      </div>
    ))
    
    return(
      <React.Fragment>
        <h1>Posts</h1>
        <div className="container">
          <div className="row d-flex justify-content-center">
            { postsList }
          </div>

          <Post />

          <AddPost />
        </div>
      </React.Fragment>
    )
  }
}

export default Posts;