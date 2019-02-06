import React, { Component } from "react";
import ProfilesContext from "./profiles-context";

const UsersContext = React.createContext({
  users: [],
  loadUsers: () => {}
});

class UsersProvider extends Component {
  state = {
    ...UsersContext
  };

  loadUsers = () => {
    setTimeout(
      () =>
        this.setState({
          users: [
            {
              name: "RSR"
            },
            {
              name: "Rohan"
            },
            {
              name: "Ranjit"
            }
          ]
        }),
      500
    );
  };

  render() {
    return (
      <ProfilesContext.Consumer>
        {profiles => (
          <UsersContext.Provider
            value={{
              ...this.state,
              ...profiles,
              loadUsers: this.loadUsers
            }}
          >
            {this.props.children}
          </UsersContext.Provider>
        )}
      </ProfilesContext.Consumer>
    );
  }
}

export { UsersContext as default, UsersProvider };
