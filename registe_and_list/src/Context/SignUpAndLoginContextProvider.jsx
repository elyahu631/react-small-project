import React, { createContext, useState } from "react";

export const SignUpAndLoginContext = createContext();

export default function SignUpAndLoginContextProvider() {
  const [usersLocal, setUsersLocal] = useState(
    JSON.parse(localStorage.getItem("localUsersContext")) || []
  );
  
  const [userLoggedin, setUserLoggedin] = useState("");

  const addUserToContext = (newUser) => {
    let pastUsers = usersLocal;
    let newUsers = [...pastUsers, newUser];
    setUsersLocal(newUsers);
  };

  const SetLogUserIn = (user) => {
    setUserLoggedin(user);
  };

  return (
    <SignUpAndLoginContext.Provider
      value={{
        usersLocal,
        setUsersLocal,
        addUserToContext,
      }}
    >
      {props.children}
    </SignUpAndLoginContext.Provider>
  );
}
