import React, { createContext, useState } from 'react'

export const RegisterAndLoginContext = createContext();

export default function RegisterAndLoginContextProvider(props) {
  const [usersLocal, setUsersLocal] = useState([])
  
  const [userLoggedin, setUserLoggedin] = useState('')

  const addUserToContext = (newUser) => {
    let pastUsers = usersLocal;
    let newUsers = [...pastUsers, newUser]
    setUsersLocal(newUsers);
  }

  const SetLogUserIn = (user)=>{
    setUserLoggedin(user);
}
  
  return (
    <RegisterAndLoginContext.Provider value={{
      usersLocal,userLoggedin, setUsersLocal, addUserToContext, setUserLoggedin, SetLogUserIn
    }}>

      {props.children}
    </RegisterAndLoginContext.Provider>
  )
}
