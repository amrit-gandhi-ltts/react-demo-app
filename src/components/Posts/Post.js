import React, { Component } from 'react';

class Post extends Component {
  render() {
    return(
      <React.Fragment>
        <h1>Post</h1>
        <div className="row d-flex justify-content-center">
          <div className="col-8 card m-2">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Post;