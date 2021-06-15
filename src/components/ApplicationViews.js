import React from "react";
import { Route } from "react-router";
import { AudioDetails } from "./audioPlayer/AudioDetails";
import { AudioProvider } from "./audioPlayer/AudioProvider";


export const ApplicationViews = () => {
    return (
        <>
            {/* <AudioProvider> */}
                <Route path="/player">
                    <AudioDetails/>
                </Route>
            {/* </AudioProvider> */}
        </>
    ) 
}