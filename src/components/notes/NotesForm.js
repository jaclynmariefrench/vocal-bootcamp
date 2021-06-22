import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { WarmUpNotesContext } from "./NotesProvider";


export const NotesForm = () => {
  const { addWarmUpNotes, getWarmUpNotes, updateNote, getNoteById } = useContext(WarmUpNotesContext);

  const [warmUpNotes, setWarmUpNotes] = useState({});
  const history = useHistory();

  const {noteId} = useParams();

  const handleControlledInputChange = (event) => {
    const newWarmUpNotes = { ...warmUpNotes };
    newWarmUpNotes[event.target.id] = event.target.value;
    setWarmUpNotes(newWarmUpNotes);
  };


  const handleSaveWarmUpNotes = () => {

    if (noteId){
      
      updateNote({
          notes: warmUpNotes.notes
      })
      .then(() => history.push(`/user/edit/${warmUpNotes.id}`))
    }
      else {

        addWarmUpNotes({
            timestamp: Date.now(),
            notes: warmUpNotes.notes,
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
            value={warmUpNotes.notes}
          />
        </div>
      </fieldset>

      <button className="btn btn-primary" onClick={() => {
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