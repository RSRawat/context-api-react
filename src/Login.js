import React, { Component } from "react";
import AuthContext from "./auth-context";

class Login extends Component {
  static contextType = AuthContext;

  render() {
    return (
      <button onClick={this.context.toggleAuth}>
        {this.context.isAuth ? "Logout" : "Login"}
      </button>
    );
  }
}

Login.contextType = AuthContext;

export default Login;
