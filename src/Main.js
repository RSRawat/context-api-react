import React, { PureComponent, Fragment } from "react";
import AuthContext from "./auth-context";
import Store from "./Store";
import Login from "./Login";
import Users from "./Users";

export default class Main extends PureComponent {
  static contextType = AuthContext;

  render() {
    return (
      <Fragment>
        {!this.context.isAuth ? (
          <Login />
        ) : (
          <Store>
            <Users />
          </Store>
        )}
      </Fragment>
    );
  }
}
