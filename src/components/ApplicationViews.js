import React from "react";
import { Route } from "react-router";

import { GoalForm } from "./goal/GoalForm";
import { GoalProvider } from "./goal/GoalProvider";
import { TypeForm } from "./type/TypeForm";
import { TypeProvider } from "./type/TypeProvider";
import { UserDetail } from "./user/UserDetail";
import { UserProvider } from "./user/UserProvider";
import { AudioApp } from "/Users/jaclynfrench/workspace/vocal-bootcamp/src/AudioApp";


export const ApplicationViews = () => {
    return (
        <>
           
                <Route path="/user">
                    <UserProvider>
                        <UserDetail />
                        <AudioApp />
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