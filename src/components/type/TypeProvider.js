import React, { useState, createContext } from "react"

export const TypeContext = createContext()

export const TypeProvider = (props) => {
    const [types, setTypes] = useState([])


    const getTypes = () => {
        return fetch("https://jf33c1cvbk.execute-api.us-east-2.amazonaws.com/test/voiceTypeNames")
        .then(res => res.json())
        .then(setTypes)
    }

    const addType = typeObj => {
        return fetch(`https://jf33c1cvbk.execute-api.us-east-2.amazonaws.com/test/warmUpGenerator/`, {
     
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(typeObj)
        })
        .then(getTypes)
    }

    const addEditType = typeObj => {
        return fetch(`https://jf33c1cvbk.execute-api.us-east-2.amazonaws.com/test/warmUpGenerator/${typeObj.id}`, {
     
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


    


