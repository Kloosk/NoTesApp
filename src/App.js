import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Start from "./components/start/Start";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import Logout from "./components/logout/Logout";
import Dashboard from "./components/dashboard/Dashboard";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import {useDispatch} from "react-redux";
import {setCurrentUser,logoutUser} from "./redux/auth/authActions";
import PrivateRoute from "./components/privateroutes/PrivateRoutes";
import AddNote from "./components/addNote/AddNote";
import Authors from "./components/authors/Authors";

function App() {
    const dispatch = useDispatch();
    // Check for token to keep user logged in
    if (localStorage.jwtToken) {
        // Set auth token header auth
        const token = localStorage.jwtToken;
        setAuthToken(token);
        // Decode token and get user info and exp
        const decoded = jwt_decode(token);
        // Set user and isAuthenticated
        dispatch(setCurrentUser(decoded));
        // Check for expired token
        const currentTime = Date.now() / 1000; // to get in milliseconds
        if (decoded.exp < currentTime) {
            // Logout user
            dispatch(logoutUser());
            // Redirect to login
            window.location.href = "./login";
        }
    }
  return (
      <>
          <Router>
            <Switch>
                <Route exact path="/">
                  <Start/>
                </Route>
                <Route exact path="/register">
                    <Register/>
                </Route>
                <Route exact path="/login">
                    <Login/>
                </Route>
                <Route exact path="/logout">
                    <Logout/>
                </Route>
                <Route exact path="/authors">
                    <Authors/>
                </Route>
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
                <PrivateRoute exact path="/add" component={AddNote} />
            </Switch>
          </Router>
      </>
  );
}

export default App;
