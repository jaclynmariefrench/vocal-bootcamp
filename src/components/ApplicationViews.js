import React from "react";
import { Route } from "react-router";
import { GoalForm } from "./goal/GoalForm";
import { GoalProvider } from "./goal/GoalProvider";
import { TypeForm } from "./type/TypeForm";
import { TypeProvider } from "./type/TypeProvider";
import { UserProvider } from "./user/UserProvider";
import AudioApp from "./AudioApp";
import { WarmUpNotesProvider } from "./notes/NotesProvider";
import { NotesForm } from "./notes/NotesForm";
import { NotesList } from "./notes/NotesList";
import { WarmUpProvider } from "./generator/warmUpProvider";

export const ApplicationViews = () => {
  return (
    <>
      <Route path="/user">
        <UserProvider>
          <WarmUpNotesProvider>
            <TypeProvider>
              <WarmUpProvider>
            <Route path="/user">
              <AudioApp />
            </Route>
            <NotesForm />  
            <Route path="/user/edit/:noteId(\d+)">
                <NotesForm />  
            </Route>
            <NotesList />
              </WarmUpProvider>
            </TypeProvider>
          </WarmUpNotesProvider>
        </UserProvider>
      </Route>
      <Route path="/goals">
        <GoalProvider>
          <TypeProvider>
            <GoalForm />
              <TypeForm />
          </TypeProvider>
        </GoalProvider>
      </Route>
    </>
  );
};
