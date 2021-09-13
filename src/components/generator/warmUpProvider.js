import React, { useState, createContext } from "react"

export const WarmUpContext = createContext()

export const WarmUpProvider = (props) => {
    const [warmUps, setWarmUps] = useState([])

    const getWarmUps = () => {
        return fetch("  https://vocal-bootcamp-api-cvz2a.ondigitalocean.app/warmUpGenerator")
        .then(res => res.json())
        .then(setWarmUps)
    }


    const addWarmUp = typeObj => {
        return fetch("  https://vocal-bootcamp-api-cvz2a.ondigitalocean.app/warmUpGenerator", {
            method: "POST",
            headers: {
                "Content-WarmUp": "application/json"
            },
            body: JSON.stringify(typeObj)
        })
        .then(getWarmUps)
    }

    const deletePreset = userId => {
        return fetch(`  https://vocal-bootcamp-api-cvz2a.ondigitalocean.app/warmUpGenerator/${userId}`, {
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