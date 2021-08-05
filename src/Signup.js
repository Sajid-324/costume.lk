import React from "react";
import "./Signup.css";
import { useHistory } from "react-router";
import { useState } from "react";
import { auth } from "./firebase";
import { Link } from "react-router-dom";

function Signup() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = (e) => {
    e.preventDefault();
    //fancy firebase login shit.............
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //It successfully created a new userwith email and password
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="signup">
      <Link to="/">
        <img className="login__logo" src="/images/loginLogo.png" />
      </Link>

      <div className="signup__container">
        <h1>Sign up</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="signup__regBtn" onClick={register}>
            Create Account
          </button>
        </form>
        <p>
          By signing-in you agree to the Costume.lk conditions of Use &
          Sales.Please see our privacy notice,our cookies notice and our
          Interest-Based Ad Notice.
        </p>
        <p>
          Already have an account?
          <Link to="/login" >
            <span class="already-sign">sign in</span>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
