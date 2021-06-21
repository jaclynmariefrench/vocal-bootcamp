import React, { useContext, useEffect } from "react";
import { WarmUpNotesContext } from "./NotesProvider";

export const NotesList = () => {
  const { warmUpNotes, getWarmUpNotes } = useContext(WarmUpNotesContext);

  useEffect(() => {
    getWarmUpNotes();
  }, []);

  return (
    <section className="notes_container">
      <header>
        <h2 className="title_notes">Notes</h2>
      </header>
      <div className="NotesList">
        {warmUpNotes
          .filter((n) => {
            if (n.userId === parseInt(localStorage.getItem("vocal_user"))) {
              return n;
            }
          })
          .map((n) => {
            return (
              <div className="NoteDetail">
                <div>
                  <h3>{n.notes}</h3>
                </div>
                <div>
                  {
                  Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                  }).format(n.timestamp)}
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};
