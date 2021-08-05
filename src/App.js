import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Checkout from "./Checkout";
import Payment from "./Payment";
import Orders from "./Orders";
// import TestPage from "./TestPage";
import Signup from "./Signup";
import { auth } from "./firebase";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import "bootstrap/dist/css/bootstrap.min.css";

const promise = loadStripe(
  "pk_test_51IYtP8Giz5GKK0hxmySgY9FoRwk6USz7lvBUzpCVISUABCIwLHWS8OemQuM34h5Z4Cf9dWrST8ZWc8H8SoOEgkAt008HySGU2U"
);
function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    // BEM
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/signup">
            <Signup />
          </Route>

          <Route path="/orders">
            <Header />
            <Orders />
          </Route>

          {/* <Route path="/TestPage">
            <Header />
            <TestPage />
          </Route> */}

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path=""></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
