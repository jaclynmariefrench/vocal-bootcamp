import React from "react";
import { Route } from "react-router";
import { AudioDetails } from "./audioPlayer/AudioDetails";
import { AudioProvider } from "./audioPlayer/AudioProvider";
import { UserDetail } from "./user/UserDetail";
import { UserProvider } from "./user/userProvider";


export const ApplicationViews = () => {
    return (
        <>
            {/* <AudioProvider> */}
                <Route path="/player">
                    <AudioDetails/>
                </Route>
                <Route path="/user">
                    <UserProvider>
                        <UserDetail />
                    </UserProvider>
                </Route>
            {/* </AudioProvider> */}
        </>
    ) 
}