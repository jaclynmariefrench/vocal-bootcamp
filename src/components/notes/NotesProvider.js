import React, { useState, createContext } from "react";

export const WarmUpNotesContext = createContext();

export const WarmUpNotesProvider = (props) => {
    const [warmUpNotes, setWarmUpNotes] = useState([]);

    const getWarmUpNotes = () => {
        return fetch("http://api.vocalbootcamp.jaclynmariefrench.com/userWarmUps")
            .then(res => res.json())
            .then(setWarmUpNotes);
    };

    const addWarmUpNotes = async (userNoteObj) => {
        const sessionID = localStorage.getItem("sessionID");
        if (!sessionID) {
            console.error("No session ID found in localStorage");
            return;
        }
    
        const noteWithSession = { ...userNoteObj, sessionID };
    
        const response = await fetch("http://api.vocalbootcamp.jaclynmariefrench.com/userWarmUps", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(noteWithSession)
        });
    
        if (!response.ok) {
            console.error("Failed to add note:", response.statusText);
            return;
        }
    
        const newNote = await response.json(); // Get the newly created note with its ID
    
        await getWarmUpNotes();
    
        // Update session with new note
        const sessionResponse = await fetch(`http://api.vocalbootcamp.jaclynmariefrench.com/sessions/${sessionID}`);
        const session = await sessionResponse.json();
        await fetch(`http://api.vocalbootcamp.jaclynmariefrench.com/sessions/${sessionID}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                notes: [...session.notes, newNote.id] // Add the new note ID to the session
            })
        });
    };

    const deleteNote = userWarmUpId => {
        return fetch(`http://api.vocalbootcamp.jaclynmariefrench.com/userWarmUps/${userWarmUpId}`, {
            method: "DELETE"
        })
            .then(getWarmUpNotes);
    };

    const updateNote = note => {
        return fetch(`http://api.vocalbootcamp.jaclynmariefrench.com/userWarmUps/${note.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(note)
        })
            .then(getWarmUpNotes);
    };

    const getNoteById = (noteId) => {
        return fetch(`http://api.vocalbootcamp.jaclynmariefrench.com/userWarmUps/${noteId}`)
            .then(res => res.json());
    };

    return (
        <WarmUpNotesContext.Provider value={{
            warmUpNotes, setWarmUpNotes, getWarmUpNotes, addWarmUpNotes, deleteNote, updateNote, getNoteById
        }}>
            {props.children}
        </WarmUpNotesContext.Provider>
    );
};