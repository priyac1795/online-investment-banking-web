import React, { Component } from 'react';
import { withRouter } from 'react-router';
class RegisterBox extends Component {

    constructor(props) {
      super(props);
      this.state = {
        username: "",
        email: "",
        password: "",
        pwdState: null
      };
    }
   
  
    onUsernameChange(e) {
      this.setState({username: e.target.value});
    
    }
  
    onEmailChange(e) {
      this.setState({email: e.target.value});
      
    }
  
    onPasswordChange(e) {
      this.setState({password: e.target.value});
  
    }
  
    openPopup(e) {
      
    }
  
    submitRegister(e) {
  
      console.log(this.state);
  
    }
  
    render() {
  
  
      return (
        <div className="inner-container">
          <div className="header">
            Register
          </div>
          <div className="box">
  
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                className="login-input"
                placeholder="Username"
                onChange={this
                .onUsernameChange
                .bind(this)}/>
            </div>
  
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                className="login-input"
                placeholder="Email"
                onChange={this
                .onEmailChange
                .bind(this)}/>
            
            </div>
  
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                className="login-input"
                placeholder="Password"
                onChange={this
                .onPasswordChange
                .bind(this)}/>
  
            </div>
  
            <button
              type="button"
              className="login-btn"
              onHover={this
              .openPopup
              .bind(this)}
              onClick={this
              .openPopup
              .bind(this)}>Register</button>
  
          </div>
        </div>
  
      );
  
    }
  
  }
  export default withRouter(RegisterBox);
  