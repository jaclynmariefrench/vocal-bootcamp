import React, { useState, createContext } from "react"

export const GoalContext = createContext()

export const GoalProvider = (props) => {
    const [goals, setWarmupGoals] = useState([])

    const getWarmUpGoals = () => {
        return fetch("http://eb_react_app.us-east-1.vocal-bootcamp.com/api/warmUpGoals")
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
