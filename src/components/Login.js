import React, { Component } from 'react'
import { login, resetPassword, loginWithGoogle } from '../helpers/auth'

function setErrorMsg(error) {
  return {
    loginMessage: error
  }
}

export default class Login extends Component {
  state = { loginMessage: null }
  handleGoogleLogin = () => {
        loginWithGoogle()
            .catch(function (error) {
                alert(error);
            });
  }
  newwindow = () => {
        window.open('/register', 'test', "height=300,width=300");
  }
  handleSubmit = (e) => {
    e.preventDefault()
    login(this.email.value, this.pw.value)
      .catch((error) => {
          this.setState(setErrorMsg('Invalid username/password.'))
        })
  }
  resetPassword = () => {
    resetPassword(this.email.value)
      .then(() => this.setState(setErrorMsg(`Password reset email sent to ${this.email.value}.`)))
      .catch((error) => this.setState(setErrorMsg(`Email address not found.`)))
  }
  render () {
    return (
      <div>
        <h1> Login </h1>
        <button onClick={this.newwindow}>test</button>
        <button onClick={this.handleGoogleLogin}> With Google</button>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Email</label>
            <input ref={(email) => this.email = email} placeholder="Email"/>
          </div>
          <div>
            <label>Password</label>
            <input type="password" placeholder="Password" ref={(pw) => this.pw = pw} />
          </div>
          {
            this.state.loginMessage &&
            <div role="alert">
              <span aria-hidden="true"></span>
              <span >Error:</span>
              &nbsp;{this.state.loginMessage} <a href="" onClick={this.resetPassword} >Forgot Password?</a>
            </div>
          }
          <button type="submit">Login</button>
        </form>

      </div>
    )
  }
}
