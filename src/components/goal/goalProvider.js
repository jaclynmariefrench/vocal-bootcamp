import React, { useState, createContext } from "react"

export const GoalContext = createContext()

export const GoalProvider = (props) => {
    const [goals, setWarmupGoals] = useState([])

    const getWarmUpGoals = () => {
        return fetch("http://localhost:8088/warmUpGoals")
        .then(res => res.json())
        .then(setWarmupGoals)
    }

    const addWarmUpGoal = goalObj => {
        return fetch("http://localhost:8088/warmUpGoals", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(goalObj)
        })
        .then(getWarmUpGoals)
    }

    return (
        <GoalContext.Provider value={{
            goals, getWarmUpGoals, addWarmUpGoal, setWarmupGoals
        }}>
            {props.children}
        </GoalContext.Provider>
    )
}
