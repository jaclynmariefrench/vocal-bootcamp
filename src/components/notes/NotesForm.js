import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { WarmUpNotesContext } from "./NotesProvider";
import "./notes.css";

export const NotesForm = () => {
  const { warmUpNotes, addWarmUpNotes, updateNote, getNoteById } = useContext(WarmUpNotesContext);
  const history = useHistory();
  const { noteId } = useParams(); 
  const [isLoading, setIsLoading] = useState(true);
  const [note, setNote] = useState({ notes: "" });

  const handleControlledInputChange = (event) => {
    const newNote = { ...note };
    newNote[event.target.id] = event.target.value;
    setNote(newNote);
  };

  const handleSaveWarmUpNotes = () => {
    setIsLoading(true);
    if (noteId) {
      updateNote({
        id: noteId,
        notes: note.notes,
        userId: parseInt(localStorage.getItem("vocal_user")),
        timestamp: note.timestamp
      }).then(() => {
        setNote({ notes: "" });
        history.push(`/user`);
      });
    } else {
      addWarmUpNotes({
        timestamp: Date.now(),
        notes: note.notes,
        userId: parseInt(localStorage.getItem("vocal_user"))
      }).then(() => history.push(`/user`));
    }
  };

  useEffect(() => {
    if (noteId) {
      getNoteById(noteId).then((note) => {
        setNote(note);
        setIsLoading(false);
      });
    } else {
      setIsLoading(false);
    }
  }, [noteId]);

  return (
    <div className="notes--add--container">
      <h2 className="NotesForm__title">{noteId ? "Edit Note" : "Add New Note"}</h2>
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
              value={note.notes || ""}
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


