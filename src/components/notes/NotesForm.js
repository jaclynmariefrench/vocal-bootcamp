import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { WarmUpNotesContext } from "./NotesProvider";


export const NotesForm = () => {
  const { addWarmUpNotes, getWarmUpNotes } = useContext(WarmUpNotesContext);

  const [warmUpNotes, setWarmUpNotes] = useState({});
  const history = useHistory();

  const handleControlledInputChange = (event) => {
    const newWarmUpNotes = { ...warmUpNotes };
    newWarmUpNotes[event.target.name] = event.target.value;
    setWarmUpNotes(newWarmUpNotes);
  };


  const handleSaveWarmUpNotes = () => {

    addWarmUpNotes({
        timestamp: Date.now(),
        notes: warmUpNotes.notes,
      }).then(() => history.push("/userWarmUps"));
  };


  useEffect(() => {
    getWarmUpNotes();
  }, []);

  return (
    <form className="NotesForm">
      <h2 className="NotesForm__title">Add New Notes</h2>
      <fieldset>
        <div className="form_group">
          <label htmlFor="WarmUpNotes">Write Note:</label>
          <input
            type="text"
            id="NotesName"
            name="name"
            required
            autoFocus
            className="form_control"
            placeholder="WarmUpNotes"
            onChange={handleControlledInputChange}
            defaultValue={warmUpNotes.notes}
          />
        </div>
      </fieldset>

      <button className="btn btn-primary" onClick={() => {
        handleSaveWarmUpNotes()
      }}>
        Add Note
      </button>
    </form>
  );
};



// will add to save later 
// userId: warmUpNotes.parseInt(localStorage.getItem("vocal_user")),
// audioId: warmUpNotes.audioId