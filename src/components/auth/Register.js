import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";

export const Register = (props) => {
  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  // const verifyPassword = useRef();
  const conflictDialog = useRef();
  const history = useHistory();

  const existingUserCheck = () => {
    return fetch(
      `http://api.vocalbootcamp.jaclynmariefrench.com/users?email=${email.current.value}`
    )
      .then((res) => res.json())
      .then((user) => typeof user === "object");
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const userExists = await existingUserCheck();
    if (!userExists) {
      const response = await fetch(
        "http://api.vocalbootcamp.jaclynmariefrench.com/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email.current.value,
            name: `${firstName.current.value} ${lastName.current.value}`,
          }),
        }
      );
      const createdUser = await response.json();
      console.log("Received response", createdUser);
      if (createdUser.hasOwnProperty("id")) {
        localStorage.setItem("vocal_user", createdUser.id);
        history.push("/goals");
      }
    } else {
      conflictDialog.current.showModal();
    }
  };

  const handleBack = () => {
    history.goBack();
  };

  return (
    <>
      <h1 className="title_login">VOCAL BOOTCAMP</h1>
      <main style={{ textAlign: "center" }} className="register--container">
        <dialog className="dialog dialog--password" ref={conflictDialog}>
          <div>Account with that email address already exists</div>
          <button
            className="button--close"
            onClick={(e) => conflictDialog.current.close()}
          >
            Close
          </button>
        </dialog>
        <section className="register--section">
          <form className="form--login" onSubmit={handleRegister}>
            <h2 className="h3 mb-3 font-weight-normal">
              Please Register for Vocal Bootcamp
            </h2>
            <fieldset className="register--fieldset">
              <label htmlFor="firstName"> First Name </label>
              <input
                ref={firstName}
                type="text"
                name="firstName"
                className="form-control"
                placeholder="First name"
                required
                autoFocus
              />
            </fieldset>
            <fieldset className="register--fieldset">
              <label htmlFor="lastName"> Last Name </label>
              <input
                ref={lastName}
                type="text"
                name="lastName"
                className="form-control"
                placeholder="Last name"
                required
              />
            </fieldset>
            <fieldset className="register--fieldset">
              <label htmlFor="inputEmail"> Email address </label>
              <input
                ref={email}
                type="email"
                name="email"
                className="form-control"
                placeholder="Email address"
                required
              />
            </fieldset>
            <fieldset className="register--fieldset">
              <button type="submit" className="btn btn-primary mybtn" disabled>
                Register
              </button>
            </fieldset>
            <p className="sandbox-note">
              Note: This is a sandbox environment. Registration is disabled. Use the test user test@voice.com.
            </p>
            <button type="button" className="btn btn-secondary" onClick={handleBack}>
              Back
            </button>
          </form>
        </section>
      </main>
    </>
  );
};
