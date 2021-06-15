import React from "react";
import { ApplicationViews } from "./ApplicationViews";
import { NavBar } from "./nav/NavBar";
import { Redirect, Route } from "react-router-dom";
import "./VocalBootcamp.css"
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { UserProvider } from "./user/userProvider";

export const VocalBootcamp = () => {
    return (
        <>
        <h1>VOCAL BOOTCAMP</h1>
        <Route
      render={() => {
        if (localStorage.getItem("vocal_user")) {
          return (
            <>
              <UserProvider>
                <NavBar />
                <ApplicationViews />
              </UserProvider>
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