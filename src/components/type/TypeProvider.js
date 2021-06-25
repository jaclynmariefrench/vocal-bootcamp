import React, { useState, createContext } from "react"

export const TypeContext = createContext()

export const TypeProvider = (props) => {
    const [types, setTypes] = useState([])


    const getTypes = () => {
        return fetch("http://localhost:8088/voiceTypeNames")
        .then(res => res.json())
        .then(setTypes)
    }

    const addType = typeObj => {
        return fetch(`http://localhost:8088/warmUpGenerator/${typeObj.id}`, {
     
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(typeObj)
        })
        .then(getTypes)
    }


    return (
        <TypeContext.Provider value={{
            types, getTypes, setTypes, addType
        }}>
            {props.children}
        </TypeContext.Provider>
    )

      }


    


