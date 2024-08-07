import React, { useState, createContext } from "react"

export const TypeContext = createContext()

export const TypeProvider = (props) => {
    const [types, setTypes] = useState([])


    const getTypes = () => {
        return fetch("http://api.vocalbootcamp.jaclynmariefrench.com:3000/voiceTypeNames")
        .then(res => res.json())
        .then(data => setTypes(data))
    }

    const addType = typeObj => {
        return fetch(`http://api.vocalbootcamp.jaclynmariefrench.com:3000/warmUpGenerator/`, {
     
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(typeObj)
        })
        .then(getTypes)
    }

    const addEditType = typeObj => {
        return fetch(`http://api.vocalbootcamp.jaclynmariefrench.com:3000/warmUpGenerator/${typeObj.id}`, {
     
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
            types, getTypes, setTypes, addType, addEditType
        }}>
            {props.children}
        </TypeContext.Provider>
    )

      }


    


