import React from "react";
import { ApplicationViews } from "./ApplicationViews";
import { NavBar } from "./nav/NavBar";
import { Route } from "react-router-dom";
import "./VocalBootcamp.css"

export const VocalBootcamp = () => {
    return (
        <>
        <h1>VOCAL BOOTCAMP</h1>
        <Route path="/">
            <NavBar/>
            <ApplicationViews/>
        </Route>
        </>
    )
}