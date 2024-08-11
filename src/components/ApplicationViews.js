import React, { useEffect } from "react";
import { Route, Switch } from "react-router";
import { GoalProvider } from "./goal/GoalProvider";
import { TypeGoalForm } from "./type/TypeGoalForm";
import { TypeProvider } from "./type/TypeProvider";
import { UserProvider } from "./user/UserProvider";
import AudioApp from "./AudioApp";
import { WarmUpNotesProvider } from "./notes/NotesProvider";
import { NotesForm } from "./notes/NotesForm";
import { NotesList } from "./notes/NotesList";
import { WarmUpProvider } from "./generator/warmUpProvider";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import "./VocalBootcamp.css";

export const ApplicationViews = () => {
  useEffect(() => {
    // Generate and store session ID
    const sessionID = uuidv4();
    localStorage.setItem("sessionID", sessionID);
  
    // Create a new session with no associated notes and warm-ups
    const createSession = async () => {
      await axios.post("http://api.vocalbootcamp.jaclynmariefrench.com/sessions", {
        id: sessionID,
        notes: [],
        warmUps: []
      });
    };
  
    createSession();
  }, []);

  return (
    <>
      <Route path="/user">
        <UserProvider>
          <WarmUpNotesProvider>
            <TypeProvider>
              <WarmUpProvider>
                <GoalProvider>
                  <div className="audio-container">
                    <AudioApp />
                  </div>
                  <div className="notes--add">
                    <Switch>
                      <Route exact path="/user/edit/:noteId">
                        <NotesForm />
                      </Route>
                      <Route path="/user">
                        <>
                          <NotesForm />
                          <NotesList />
                        </>
                      </Route>
                    </Switch>
                  </div>
                </GoalProvider>
              </WarmUpProvider>
            </TypeProvider>
          </WarmUpNotesProvider>
        </UserProvider>
      </Route>
      <Route path="/goals">
        <TypeProvider>
          <GoalProvider>
            <WarmUpProvider>
              <div className="goals-style">
                <TypeGoalForm />
              </div>
            </WarmUpProvider>
          </GoalProvider>
        </TypeProvider>
      </Route>
    </>
  );
};
