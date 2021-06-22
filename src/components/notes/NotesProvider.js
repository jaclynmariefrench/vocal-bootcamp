import React, { useState, createContext } from "react"

export const WarmUpNotesContext = createContext()

export const WarmUpNotesProvider = (props) => {
    const [warmUpNotes, setWarmUpNotes] = useState([])

    const getWarmUpNotes = () => {
        return fetch("http://localhost:8088/userWarmUps")
        .then(res=> res.json())
        .then(setWarmUpNotes)
    }

    const addWarmUpNotes = userNoteObj => {
        return fetch("http://localhost:8088/userWarmUps", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userNoteObj)
        })
        .then(getWarmUpNotes)
    }
    const deleteNote = userWarmUpId => {
        return fetch(`http://localhost:8088/userWarmUps/${userWarmUpId}`, {
            method: "DELETE"
        })
            .then(getWarmUpNotes)
    }

return (
    <WarmUpNotesContext.Provider value={{
        warmUpNotes, setWarmUpNotes, getWarmUpNotes, addWarmUpNotes, deleteNote
    }}>
        {props.children}
    </WarmUpNotesContext.Provider>
)
}