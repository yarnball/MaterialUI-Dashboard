import React, { Component } from 'react'
import { auth } from '../helpers/auth'

function setErrorMsg(error) {
  return {
    registerError: error.message
  }
}

export default class Register extends Component {
  state = { registerError: null }
  handleSubmit = (e) => {
    e.preventDefault()
    auth(this.email.value, this.pw.value)
      .catch(e => this.setState(setErrorMsg(e)))
  }
  render () {
    return (
      <div >
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          <div >
            <label>Email</label>
            <input  ref={(email) => this.email = email} placeholder="Email"/>
          </div>
          <div >
            <label>Password</label>
            <input type="password" placeholder="Password" ref={(pw) => this.pw = pw} />
          </div>
          {
            this.state.registerError &&
            <div role="alert">
              <span  aria-hidden="true"></span>
              <span >Error:</span>
              &nbsp;{this.state.registerError}
            </div>
          }
          <button type="submit">Register</button>
        </form>
      </div>
    )
  }
}
