import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { WarmUpNotesContext } from "./NotesProvider";
import Carousel from 'nuka-carousel'
import "./notes.css"



export const NotesList = () => {
  const { warmUpNotes, getWarmUpNotes, deleteNote } = useContext(WarmUpNotesContext);
  const [note, setWarmUpNotes] = useState({})

  useEffect(() => {
    getWarmUpNotes();
  }, []);
  const { noteId } = useParams();
  const history = useHistory();

  useEffect(() => {
    const thisNote = warmUpNotes.find((n) => n.id === noteId)
    setWarmUpNotes(thisNote);
  }, [noteId]);

  const handleDelete = (userWarmUpId) => {
    deleteNote(userWarmUpId).then(() => {
      history.push("/user");
    });
  };


  return (
    

    <section className="notes_container">
      <h2 className="title_notes">Notes</h2>
      <div className="NotesList">
      <Carousel>

        {warmUpNotes
          .filter((n) => {
            if (n.userId === parseInt(localStorage.getItem("vocal_user"))) {
              return n;
            }
          }).reverse()
    
            .map((n) => {
              return (
                <div className="NoteDetail">
                  <div key={n.notes}>
                    <p>{n.notes}</p>
                  </div>
                  <div key={n.timestamp}>
                    {Intl.DateTimeFormat("en-US", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                      hour: "2-digit",
                      minute: "2-digit",
                      second: "2-digit",
                    }).format(n.timestamp)}
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary btn-sm mybtn notebtnedit"
                    onClick={() => {
                      history.push(`/user/edit/${n.id}`);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary btn-sm mybtn notebtndelete"
                    onClick={() => {
                      handleDelete(n.id);
                    }}
                  >
                    delete
                  </button>
                </div>
              );
            
          })}
      </Carousel>
  
      </div>
          
    </section>
    
  );
};
