import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const TypeContext = createContext()

export const TypeProvider = (props) => {
    const [types, setTypes] = useState([])

    const getTypes = () => {
        return fetch("http://localhost:8088/voiceTypes")
        .then(res => res.json())
        .then(setTypes)
    }

    const addType = typeObj => {
        return fetch("http://localhost:8088/voiceTypes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(typeObj)
        })
        .then(getTypes)
    }

    return (
        <TypeContext.Provider value={{
            types, getTypes, addType, setTypes
        }}>
            {props.children}
        </TypeContext.Provider>
    )
}
