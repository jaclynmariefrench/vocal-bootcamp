import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const UserContext = createContext()

// This component establishes what data can be used.
export const UserProvider = (props) => {
    const [users, setUsers] = useState([])

    const getUsers = () => {
        return fetch("http://api.vocalbootcamp.jaclynmariefrench.com/users")
            .then(res => res.json())
            .then(data => {
                setUsers(data);
            })
            .catch(error => console.error("Error fetching users:", error)); // Log any errors
    }

    return (
        <UserContext.Provider value={{
            users, getUsers, setUsers
        }}>
            {props.children}
        </UserContext.Provider>
    )
}

