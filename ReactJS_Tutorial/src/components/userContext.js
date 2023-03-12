// 39). Context
// 1. creating the context

import React from "react";

const UserContext = React.createContext('Abhishek');

const UserProvider = UserContext.Provider;
const UserCosumer = UserContext.Consumer;

export { UserProvider, UserCosumer }
export default UserContext