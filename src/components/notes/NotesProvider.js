import React, { useState, createContext } from "react"

export const WarmUpNotesContext = createContext()

export const WarmUpNotesProvider = (props) => {
    const [warmUpNotes, setWarmUpNotes] = useState([])

    const getWarmUpNotes = () => {
        return fetch("http://api.vocalbootcamp.jaclynmariefrench.com/userWarmUps")
        .then(res=> res.json())
        .then(setWarmUpNotes)
    }

    const addWarmUpNotes = userNoteObj => {
        return fetch("http://api.vocalbootcamp.jaclynmariefrench.com/userWarmUps", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userNoteObj)
        })
        .then(getWarmUpNotes)
    }
    const deleteNote = userWarmUpId => {
        return fetch(`http://api.vocalbootcamp.jaclynmariefrench.com/userWarmUps/${userWarmUpId}`, {
            method: "DELETE"
        })
            .then(getWarmUpNotes)
    }

    const updateNote = note => {
        return fetch(`http://api.vocalbootcamp.jaclynmariefrench.com/userWarmUps/${note.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(note)
        })
          .then(getWarmUpNotes)
      }
      const getNoteById = (noteId) => {
        return fetch (`http://api.vocalbootcamp.jaclynmariefrench.com/userWarmUps/${noteId}`)
        .then(res => res.json())
      }

return (
    <WarmUpNotesContext.Provider value={{
        warmUpNotes, setWarmUpNotes, getWarmUpNotes, addWarmUpNotes, deleteNote, updateNote, getNoteById 
    }}>
        {props.children}
    </WarmUpNotesContext.Provider>
)
}