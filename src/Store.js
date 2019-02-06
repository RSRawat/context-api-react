import React from "react";
import { UsersProvider } from "./users-context";
import { ProfilesProvider } from "./profiles-context";

export default ({ children }) => (
  <ProfilesProvider>
    <UsersProvider>{children}</UsersProvider>
  </ProfilesProvider>
);
