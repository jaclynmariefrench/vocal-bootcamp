import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { WarmUpNotesContext } from "./NotesProvider";
import "./notes.css";

export const NotesForm = () => {
  const { warmUpNotes, addWarmUpNotes, getWarmUpNotes, updateNote, getNoteById } = useContext(WarmUpNotesContext);
  const history = useHistory();
  const { noteId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [note, setNote] = useState({ notes: "" }); // Initialize note state with an empty notes property

  const handleControlledInputChange = (event) => {
    const newNote = { ...note };
    newNote[event.target.id] = event.target.value;
    setNote(newNote);
  };

  const handleSaveWarmUpNotes = () => {
    setIsLoading(true);
    if (noteId) {
      // If noteId exists, it means we're editing an existing note
      updateNote({
        id: noteId, // Use noteId from URL params
        notes: note.notes,
        userId: parseInt(localStorage.getItem("vocal_user")),
        timestamp: note.timestamp
      }).then(() => history.push(`/user`));
    } else {
      // Otherwise, we're adding a new note
      addWarmUpNotes({
        timestamp: Date.now(),
        notes: note.notes,
        userId: parseInt(localStorage.getItem("vocal_user"))
      }).then(() => history.push(`/user/${localStorage.getItem("vocal_user")}`));
    }
  };

  useEffect(() => {
    getWarmUpNotes().then(() => {
      if (noteId) {
        getNoteById(noteId).then((note) => {
          setNote(note); // Set note state when editing an existing note
          setIsLoading(false);
        });
      } else {
        setIsLoading(false);
      }
    });
  }, [noteId]); // Update useEffect dependency to re-fetch note when noteId changes

  return (
    <div className="notes--add--container">
      <h2 className="NotesForm__title">{noteId ? "Save Edit Note" : "Add New Note"}</h2>
      <form className="NotesForm">
        <fieldset className="notes_add">
          <div className="form_group">
            <input
              type="text"
              id="notes"
              className="form_control"
              placeholder="Enter Note Here"
              required
              autoFocus
              onChange={handleControlledInputChange}
              value={note.notes}
            />
          </div>
        </fieldset>
        <button
          className="btn btn-primary mybtn"
          onClick={(event) => {
            event.preventDefault();
            handleSaveWarmUpNotes();
          }}
        >
          {noteId ? "Save Note" : "Add Note"}
        </button>
      </form>
    </div>
  );
};
