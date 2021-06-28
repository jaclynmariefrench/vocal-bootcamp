import React from "react";
import { Route } from "react-router";
import { GoalProvider } from "./goal/GoalProvider";
import { TypeGoalForm } from "./type/TypeGoalForm";
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
              <AudioApp />
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
            <WarmUpProvider>
              <TypeGoalForm />
            </WarmUpProvider>
          </TypeProvider>
        </GoalProvider>
      </Route>
    </>
  );
};
