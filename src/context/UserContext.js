import React, { createContext,useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [user, setUser] = React.useState({username:'Gues',coins:0});

    return (
        <UserContext.Provider value={{user,setUser}}>
        {children}
        </UserContext.Provider>
    );
};