import React, { Component } from "react";

const ProfilesContext = React.createContext({
  profiles: [],
  loadProfiles: () => {}
});

class ProfilesProvider extends Component {
  state = {
    ...ProfilesContext
  };

  loadProfiles = () => {
    setTimeout(
      () =>
        this.setState({
          profiles: [
            {
              name: "Profile 1"
            },
            {
              name: "Profile 2"
            },
            {
              name: "Profile 3"
            }
          ]
        }),
      500
    );
  };

  render() {
    return (
      <ProfilesContext.Provider
        value={{
          ...this.state,
          loadProfiles: this.loadProfiles
        }}
      >
        {this.props.children}
      </ProfilesContext.Provider>
    );
  }
}

export { ProfilesContext as default, ProfilesProvider };
