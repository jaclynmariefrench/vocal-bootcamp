import React, { useRef } from "react"
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom"
import "./Login.css"


export const Login = props => {
    const email = useRef()
    const password = useRef()
    const existDialog = useRef()
    const history = useHistory()

    const existingUserCheck = () => {
        return fetch(`http://eb_react_app.us-east-1.vocal-bootcamp.com/api/users?email=${email.current.value}`)
            .then(res => res.json())
            .then(user => user.length ? user[0] : false)
    }

    const handleLogin = (e) => {
        e.preventDefault()

        existingUserCheck()
            .then(exists => {
                if (exists) {
                    localStorage.setItem("vocal_user", exists.id)
                    history.push("/user")
                } else {
                    existDialog.current.showModal()
                }
            })
    }

    return (
        <>
       <h1 className="title_login">VOCAL BOOTCAMP</h1>
        <main className="container--login">
            <dialog className="dialog dialog--auth" ref={existDialog}>
                <div>User does not exist</div>
                <button className="button--close" onClick={e => existDialog.current.close()}>Close</button>
            </dialog>
            <section className="form--section">
                <form className="form--login" onSubmit={handleLogin}>
                    <h2>Welcome!</h2>
                    <fieldset className="form--fieldset">
                        <label htmlFor="inputEmail"> Email address: </label>
                        <input ref={email} type="email"
                            id="email"
                            className="form-control"
                            placeholder="Email address"
                            required autoFocus />
                    </fieldset>
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
