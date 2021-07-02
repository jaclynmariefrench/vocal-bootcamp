import React from "react";
import { ApplicationViews } from "./ApplicationViews";
import { NavBar } from "./nav/NavBar";
import { Redirect, Route } from "react-router-dom";
import "./VocalBootcamp.css"
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { UserProvider } from "./user/UserProvider";

export const VocalBootcamp = () => {
    return (
        <>
        <Route
      render={() => {
        if (localStorage.getItem("vocal_user")) {
          return (
            <div className="overallUser">
              <UserProvider>
                <NavBar />
                <ApplicationViews />
              </UserProvider>
            </div>
          );
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />

    <Route exact path="/login">
      <Login />
    </Route>
    <Route exact path="/register">
      <Register />
    </Route>
        </>
    )
}