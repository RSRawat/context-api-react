import React, { Component, Fragment } from "react";
import UsersContext from "./users-context";

class Users extends Component {
  static contextType = UsersContext;

  componentDidMount() {
    const { loadUsers, loadProfiles } = this.context;

    loadUsers();
    loadProfiles();
  }

  render() {
    const { users, profiles } = this.context;

    return (
      <Fragment>
        <h1>Welcome User!</h1>
        <ul>{users && users.map((user, i) => <li key={i}>{user.name}</li>)}</ul>
        <ul>
          {profiles &&
            profiles.map((profile, i) => <li key={i}>{profile.name}</li>)}
        </ul>
      </Fragment>
    );
  }
}

export default Users;
