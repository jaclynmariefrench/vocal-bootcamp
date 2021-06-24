import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { WarmUpNotesContext } from "./NotesProvider";
import "./notes.css"


export const NotesForm = () => {
  const { warmUpNotes, addWarmUpNotes, getWarmUpNotes, updateNote, getNoteById } = useContext(WarmUpNotesContext);

  const [note, setWarmUpNotes] = useState({});
  const history = useHistory();

  const {noteId} = useParams();
  const [isLoading, setIsLoading] = useState(true);


  const handleControlledInputChange = (event) => {
    const newWarmUpNotes = { ...note };
    newWarmUpNotes[event.target.id] = event.target.value;
    setWarmUpNotes(newWarmUpNotes);
  };


  const handleSaveWarmUpNotes = () => {
    setIsLoading(true);
    if (noteId){
      
      updateNote({
          id: note.id,
          notes: note.notes,
          userId: parseInt(localStorage.getItem("vocal_user")),
          timestamp: note.timestamp
      })
      .then(() => history.push(`/user/edit/${note.id}`))
    }
      else {

        addWarmUpNotes({
            timestamp: Date.now(),
            notes: note.notes,
            userId: parseInt(localStorage.getItem("vocal_user"))
          }).then(() => history.push(`user/notes/${localStorage.getItem("vocal_user")}`));
      }

  };


  useEffect(() => {
    getWarmUpNotes().then(() => {
      if (noteId){
        getNoteById(noteId)
        .then(note => {
          setWarmUpNotes(note)
        })
      } else {
        setIsLoading(false)
      }
    })
  }, []);


  return (
    <form className="NotesForm">
      <h2 className="NotesForm__title">Add New Notes</h2>
      <fieldset>
        <div className="form_group">
          <label htmlFor="WarmUpNotes">Write Note:</label>
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

      <button className="btn btn-primary" onClick={(event) => {
        event.preventDefault()
        handleSaveWarmUpNotes()
      }}>
        {noteId ? <>Save Note</> : <>Add Note</>}
      </button>
    </form>
  );
};



// will add to save later 
// userId: warmUpNotes.parseInt(localStorage.getItem("vocal_user")),
// audioId: warmUpNotes.audioId