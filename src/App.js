import React, {useState,useEffect} from 'react';
import {HashRouter as Router, Switch, Route} from "react-router-dom";
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
import Touse from "./components/touse/Touse";
import Edit from "./components/edit/Edit";
import Account from "./components/account/Account";
import PublicNotes from "./components/publicNotes/PublicNotes";
import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html{
      scroll-behavior: smooth;
     ::-webkit-scrollbar {
     width: 14px;
     height: 14px;
    }
    ::-webkit-scrollbar-thumb {
     background: linear-gradient(13deg, #0798da 14%,#f9b613 64%);
     border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover{
     background: linear-gradient(13deg, #F9B613 14%,#0798da 64%);
    }
    ::-webkit-scrollbar-track{
     background: ${props => props.darkmode ? "#231F20" : "#ffffff"};  
}
  }
`;

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
    const [darkmode,setDarkmode] = useState(false);
    useEffect(() => {
        localStorage.getItem('darkmode') !== null && setDarkmode(true);
    },[]);
  return (
      <>
          <GlobalStyle darkmode={darkmode}/>
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
                <PrivateRoute exact path="/edit/:id" component={Edit} />
                <PrivateRoute exact path="/touse" component={Touse} />
                <PrivateRoute exact path="/account" component={Account} />
                <PrivateRoute exact path="/public" component={PublicNotes} />
            </Switch>
          </Router>
      </>
  );
}

export default App;
