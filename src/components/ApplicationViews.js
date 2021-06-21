import React from "react";
import { Route } from "react-router";
import { GoalForm } from "./goal/GoalForm";
import { GoalProvider } from "./goal/GoalProvider";
import { TypeForm } from "./type/TypeForm";
import { TypeProvider } from "./type/TypeProvider";
import { UserDetail } from "./user/UserDetail";
import { UserProvider } from "./user/UserProvider";
import  AudioApp from "./AudioApp"
import { WarmUpNotesProvider } from "./notes/NotesProvider";
import { NotesForm } from "./notes/NotesForm";


export const ApplicationViews = () => {
    return (
        <>
           
                <Route path="/user">
                    <UserProvider>
                        <WarmUpNotesProvider>
                        <UserDetail />
                        <AudioApp />
                        <NotesForm/>
                        </WarmUpNotesProvider>
                    </UserProvider>
                </Route>
            <Route path="/goals">
                <GoalProvider>
                    <TypeProvider>
                        <GoalForm/>
                        <TypeForm/>
                    </TypeProvider>
                </GoalProvider>
            </Route>
        </>
    ) 
}