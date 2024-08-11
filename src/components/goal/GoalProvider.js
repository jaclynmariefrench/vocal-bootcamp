import React, { useState, createContext } from "react"

export const GoalContext = createContext()

export const GoalProvider = (props) => {
    const [goals, setWarmupGoals] = useState([])

    const getWarmUpGoals = () => {
        return fetch("http://api.vocalbootcamp.jaclynmariefrench.com/warmUpGoals")
        .then(res => res.json())
        .then(data => setWarmupGoals(data))
    }


    return (
        <GoalContext.Provider value={{
            goals, getWarmUpGoals, setWarmupGoals
        }}>
            {props.children}
        </GoalContext.Provider>
    )
}
