import React, { useRef, useState } from "react"
import { Link, useHistory } from "react-router-dom";
import { Alert } from "react-bootstrap";
import "./Login.css"

export const Login = props => {
    const email = useRef()
    const [showError, setShowError] = useState(false)
    const history = useHistory()

    const existingUserCheck = () => {
        return fetch(`https://jf33c1cvbk.execute-api.us-east-2.amazonaws.com/test/users?email=${email.current.value}`)
            .then(res => res.json())
            .then(user => {
                console.log('Received response', user); // Log the response data
                return typeof user === 'object' ? user : false;
            });
    }

    const handleLogin = (e) => {
        e.preventDefault()

        existingUserCheck()
            .then(exists => {
                console.log('exists:', exists);
                if (exists) {
                    localStorage.setItem("vocal_user", exists.id)
                    history.push("/user")
                } else {
                    setShowError(true)
                    return;
                }
            })
    }

    const handleInputChange = () => {
        setShowError(false)
    }

    return (
        <>
       <h1 className="title_login">VOCAL BOOTCAMP</h1>
        <main className="container--login">
            <section className="form--section">
                <form className="form--login" onSubmit={handleLogin}>
                    <h2>Welcome!</h2>
                    <fieldset className="form--fieldset">
                        <label htmlFor="inputEmail"> Email address: </label>
                        <input ref={email} type="email"
                            id="email"
                            className="form-control"
                            placeholder="Email address"
                            required autoFocus 
                            onChange={handleInputChange} />
                    </fieldset>
                            {showError && <Alert variant="danger">User does not exist</Alert>}
                    <fieldset className="form--fieldset">
                        <button type="submit" className="btn btn-primary mybtn">
                            Sign in
                        </button>
                    </fieldset>
                </form>
            </section>
            <section className="link--register">
                <Link to="/register">Not a member yet?</Link>
            </section>
        </main>
        </>
    )
}
