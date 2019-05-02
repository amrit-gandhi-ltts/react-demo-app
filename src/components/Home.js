import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Home Page</h1>
        <div className="card">
          <div className="card-body">
            This is the Home Page for my React Demo App. Check the sidebar to know all the functionality which I have done.
          </div>
        </div>
      </React.Fragment>
    )
  }
}
