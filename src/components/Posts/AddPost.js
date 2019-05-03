import React, { Component } from 'react';

const AddPost = (props) => {
  const { onChange, onSubmit, data } = props;   

  return(
    <React.Fragment>
      <h1>Add Post</h1>
      <div className="row d-flex justify-content-center">
        <div className="col-8 card pt-2 pb-2 mb-5">
          <form onSubmit={ onSubmit }>
            <div className="form-group">
              <label>Title</label>
              <input type="text"
                name="title" 
                className="form-control" 
                placeholder="Title"
                onChange={ onChange } />
            </div>
            <div className="form-group">
              <label>Author</label>
              <input type="text"
                name="author" 
                className="form-control" 
                placeholder="Author"
                onChange={ onChange } />
            </div>
            <div className="form-group">
              <label>Body</label>
              <textarea 
                className="form-control" 
                rows="3"
                name="body" 
                onChange={ onChange }></textarea>
            </div>
            <button 
              type="submit" 
              className="btn btn-block btn-primary" 
              >Submit</button>
              <p>The post <strong>{data.title}</strong> is written by <strong>{data.author}</strong> and the content is <strong>{data.body}</strong>.</p>
          </form>
        </div>
      </div>
    </React.Fragment>
  )
}

export default AddPost;