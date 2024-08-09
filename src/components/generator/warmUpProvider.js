import React, { useState, createContext } from "react"

export const WarmUpContext = createContext()

export const WarmUpProvider = (props) => {
    const [warmUps, setWarmUps] = useState([])

    const getWarmUps = () => {
        return fetch("http://api.vocalbootcamp.jaclynmariefrench.com/warmUpGenerator")
        .then(res => res.json())
        .then(setWarmUps)
    }


    const addWarmUp = typeObj => {
        return fetch("http://api.vocalbootcamp.jaclynmariefrench.com/warmUpGenerator", {
            method: "POST",
            headers: {
                "Content-WarmUp": "application/json"
            },
            body: JSON.stringify(typeObj)
        })
        .then(getWarmUps)
    }

    const deletePreset = userId => {
        return fetch(`http://api.vocalbootcamp.jaclynmariefrench.com/warmUpGenerator/${userId}`, {
            method: "DELETE"
        })
            .then(getWarmUps)
    }

    return (
        <WarmUpContext.Provider value={{
            warmUps, getWarmUps, addWarmUp, deletePreset
        }}>
            {props.children}
        </WarmUpContext.Provider>
    )
}