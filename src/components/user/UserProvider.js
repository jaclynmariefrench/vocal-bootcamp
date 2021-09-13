import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const UserContext = createContext()

// This component establishes what data can be used.
export const UserProvider = (props) => {
    const [users, setUsers] = useState([])

    const getUsers = () => {
        return fetch("  https://vocal-bootcamp-api-cvz2a.ondigitalocean.app/users")
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
