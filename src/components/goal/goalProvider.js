import React, { useState, createContext } from "react"

export const GoalContext = createContext()

export const GoalProvider = (props) => {
    const [goals, setWarmupGoals] = useState([])

    const getWarmUpGoals = () => {
        return fetch("http://localhost:8088/warmUpGoals")
        .then(res => res.json())
        .then(setWarmupGoals)
    }


    return (
        <GoalContext.Provider value={{
            goals, getWarmUpGoals, setWarmupGoals
        }}>
            {props.children}
        </GoalContext.Provider>
    )
}
