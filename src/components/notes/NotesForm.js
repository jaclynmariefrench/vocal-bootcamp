import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { WarmUpNotesContext } from "./NotesProvider";
import "./notes.css"
import { render } from "@testing-library/react";


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
      .then(() => history.push(`/user`))
    }
      else {

        addWarmUpNotes({
            timestamp: Date.now(),
            notes: note.notes,
            userId: parseInt(localStorage.getItem("vocal_user"))
          }).then(() => history.push(`user/${localStorage.getItem("vocal_user")}`))
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
    <div className="notes--add--container">
      <h2 className="NotesForm__title">{noteId ? <>Save Edit Note</> : <>Add New Note</>}</h2>
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

      <button className="btn btn-primary mybtn" onClick={(event) => {
        event.preventDefault()
        handleSaveWarmUpNotes()
        
      }}>
        {noteId ? <>Save Note</> : <>Add Note</>}
      </button>
    </form>
    </div>
  );
};






// 