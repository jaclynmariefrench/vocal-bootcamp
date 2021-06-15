import React from "react";
import { ApplicationViews } from "./ApplicationViews";
import { NavBar } from "./nav/NavBar";
import { Redirect, Route } from "react-router-dom";
import "./VocalBootcamp.css"
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";

export const VocalBootcamp = () => {
    return (
        <>
        <h1>VOCAL BOOTCAMP</h1>
        <Route
      render={() => {
        if (localStorage.getItem("vocal_user")) {
          return (
            <>
              <NavBar />
              <ApplicationViews />
            </>
          );
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />

    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
        </>
    )
}