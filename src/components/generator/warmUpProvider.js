import React, { useState, createContext } from "react"

export const WarmUpContext = createContext()

export const WarmUpProvider = (props) => {
    const [warmUps, setWarmUps] = useState([])

    const getWarmUps = () => {
        return fetch("http://localhost:8088/warmUpGenerator")
        .then(res => res.json())
        // .then(setWarmUps)
    }


    const addWarmUp = typeObj => {
        return fetch("http://localhost:8088/warmUpGenerator", {
            method: "POST",
            headers: {
                "Content-WarmUp": "application/json"
            },
            body: JSON.stringify(typeObj)
        })
        .then(getWarmUps)
    }

    return (
        <WarmUpContext.Provider value={{
            warmUps, getWarmUps, setWarmUps, addWarmUp
        }}>
            {props.children}
        </WarmUpContext.Provider>
    )
}