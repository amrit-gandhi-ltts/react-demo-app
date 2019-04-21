import React, { Component } from 'react';

class AddPost extends Component {
  render() {
    return(
      <React.Fragment>
        <h1>Add Post</h1>
        <div className="row d-flex justify-content-center">
          <div className="col-8 card pt-2 pb-2 mb-5">
            <form>
              <div className="form-group">
                <label>Title</label>
                <input type="text" className="form-control" placeholder="Title" />
              </div>
              <div className="form-group">
                <label>Author</label>
                <input type="text" className="form-control" placeholder="Author" />
              </div>
              <div className="form-group">
                <label>Body</label>
                <textarea className="form-control" rows="3"></textarea>
              </div>
              <button type="submit" className="btn btn-block btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default AddPost;