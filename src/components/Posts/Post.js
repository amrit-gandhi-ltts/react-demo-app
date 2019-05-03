import React, { Component } from 'react';

const Post = (props) => {
  const { post } = props;
  let postsList;

  if(post) {
    postsList = post.map(item => (
      <div className="row d-flex justify-content-center" key={ item.id }>
        <h1 className="col-8">{ post ? item.title : 'Select any Post above'}</h1>
        <div className="col-8 card m-2">
          <div className="card-body">
            <p className="card-text">{ item.body }</p>
          </div>
        </div>
      </div>
    ))
  }
  
  return(
    <React.Fragment>
      { postsList }
    </React.Fragment>
  )
}

export default Post;