import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const UserContext = createContext()

// This component establishes what data can be used.
export const UserProvider = (props) => {
    const [users, setUsers] = useState([])

    const getUsers = () => {
        return fetch("http://eb_react_app.us-east-1.vocal-bootcamp.com/api/users")
        .then(res => res.json())
        .then(setUsers)
    }

    return (
        <UserContext.Provider value={{
            users, getUsers, setUsers
        }}>
            {props.children}
        </UserContext.Provider>
    )
}
