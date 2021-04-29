import React, { Component } from 'react';
import { withRouter } from 'react-router';

class LoginBox extends Component {

    constructor(props) {
      super(props);
      this.state = {};
    }
  
    submitLogin=(e)=> {
      this.props.history.push('/online_investment_banking/riskTolerance')
    }
  
    render() {
      return (
        <div className="inner-container">
          <div className="header">
            Login
          </div>
          <div className="box">
  
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                className="login-input"
                placeholder="Username"/>
            </div>
  
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                className="login-input"
                placeholder="Password"/>
            </div>
  
            <button
              type="button"
              className="login-btn"
              onClick={this
              .submitLogin}>Login</button>
  
          </div>
        </div>
      );
    }
  
  }
  export default withRouter(LoginBox);