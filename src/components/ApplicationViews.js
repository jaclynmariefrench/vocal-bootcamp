import React from "react";
import { Route } from "react-router";
import { AudioDetails } from "./audioPlayer/AudioDetails";
// import { AudioProvider } from "./audioPlayer/AudioProvider";
import { GoalForm } from "./goal/GoalForm";
import { GoalProvider } from "./goal/GoalProvider";
import { TypeForm } from "./type/TypeForm";
import { TypeProvider } from "./type/TypeProvider";
import { UserDetail } from "./user/UserDetail";
import { UserProvider } from "./user/userProvider";


export const ApplicationViews = () => {
    return (
        <>
            {/* <AudioProvider> */}
                {/* <Route path="/user">
                    <AudioDetails/>
                </Route> */}
                <Route path="/user">
                    <UserProvider>
                        <UserDetail />
                    </UserProvider>
                </Route>
            {/* </AudioProvider> */}
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