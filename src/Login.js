import "./Login.css";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));

    //fancy firebase login shit.............
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src="/images/loginLogo.png" />
      </Link>

      <div className="login__container">
        <h1>Sign in</h1>

        <form>
          <label for="emailLabel">
            <h5 class="pt-0">Email address</h5>
          </label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
          <label for="exampleInputPassword1">
            <h5 class="pt-0">Password</h5>
          </label>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button type="submit" className="Login__signInBtn" onClick={signIn}>
            Sign In
          </button>
        </form>
        <div>
          <p>
            By signing-in you agree to the Costume.lk conditions of Use &
            Sales.Please see our privacy notice,our cookies notice and our
            Interest-Based Ad Notice.
          </p>
          <Link to="/signup">
            <button className="Login__regBtn">Create Account</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
