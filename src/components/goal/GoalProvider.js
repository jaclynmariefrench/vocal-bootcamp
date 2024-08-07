import React, { useState, createContext } from "react"

export const GoalContext = createContext()

export const GoalProvider = (props) => {
    const [goals, setWarmupGoals] = useState([])

    const getWarmUpGoals = () => {
        return fetch("http://api.vocalbootcamp.jaclynmariefrench.com:3000/warmUpGoals")
        .then(res => res.json())
        .then(data => setWarmupGoals(data.warmUpGoals))
    }


    return (
        <GoalContext.Provider value={{
            goals, getWarmUpGoals, setWarmupGoals
        }}>
            {props.children}
        </GoalContext.Provider>
    )
}
