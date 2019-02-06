import React, { Component } from "react";

const AuthContext = React.createContext({
  isAuth: false,
  toggleAuth: () => {}
});

class AuthProvider extends Component {
  state = {
    ...AuthContext
  };

  toggleAuth = () => {
    this.setState(prevState => ({
      isAuth: !prevState.isAuth
    }));
  };

  render() {
    return (
      <AuthContext.Provider
        value={{
          ...this.state,
          toggleAuth: this.toggleAuth
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export { AuthContext as default, AuthProvider };
