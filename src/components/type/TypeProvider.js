import React, { useState, createContext } from "react"

export const TypeContext = createContext()

export const TypeProvider = (props) => {
    const [types, setTypes] = useState([])


    const getTypes = () => {
        return fetch(" https://vocal-bootcamp-mpidd.ondigitalocean.app/voiceTypeNames")
        .then(res => res.json())
        .then(setTypes)
    }

    const addType = typeObj => {
        return fetch(` https://vocal-bootcamp-mpidd.ondigitalocean.app/warmUpGenerator/`, {
     
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(typeObj)
        })
        .then(getTypes)
    }

    const addEditType = typeObj => {
        return fetch(` https://vocal-bootcamp-mpidd.ondigitalocean.app/warmUpGenerator/${typeObj.id}`, {
     
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


    


