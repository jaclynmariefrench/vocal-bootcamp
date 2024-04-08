import React, { useState, createContext } from "react"

export const WarmUpNotesContext = createContext()

export const WarmUpNotesProvider = (props) => {
    const [warmUpNotes, setWarmUpNotes] = useState([])

    const getWarmUpNotes = () => {
        return fetch("https://jf33c1cvbk.execute-api.us-east-2.amazonaws.com/test/userWarmUps")
        .then(res=> res.json())
        .then(setWarmUpNotes)
    }

    const addWarmUpNotes = userNoteObj => {
        return fetch("https://jf33c1cvbk.execute-api.us-east-2.amazonaws.com/test/userWarmUps", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userNoteObj)
        })
        .then(getWarmUpNotes)
    }
    const deleteNote = userWarmUpId => {
        return fetch(`https://jf33c1cvbk.execute-api.us-east-2.amazonaws.com/test/userWarmUps/${userWarmUpId}`, {
            method: "DELETE"
        })
            .then(getWarmUpNotes)
    }

    const updateNote = note => {
        return fetch(`https://jf33c1cvbk.execute-api.us-east-2.amazonaws.com/test/userWarmUps/${note.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(note)
        })
          .then(getWarmUpNotes)
      }
      const getNoteById = (noteId) => {
        return fetch (`https://jf33c1cvbk.execute-api.us-east-2.amazonaws.com/test/userWarmUps/${noteId}`)
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