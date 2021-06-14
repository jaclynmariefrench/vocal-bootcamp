import React from "react";
import { ApplicationViews } from "./ApplicationViews";
import { NavBar } from "./nav/NavBar";
import { Route } from "react-router-dom";

export const VocalBootcamp = () => {
    return (
        <>
        <h1>HEY</h1>
        <Route path="/">
            <NavBar/>
            <ApplicationViews/>
        </Route>
        </>
    )
}