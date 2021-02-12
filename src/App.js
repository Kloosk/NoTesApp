import React, {useState,useEffect,Suspense,lazy} from 'react';
import {HashRouter as Router, Switch, Route} from "react-router-dom";
import Start from "./components/start/Start";
import Login from "./components/login/Login";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import {useDispatch} from "react-redux";
import {setCurrentUser,logoutUser} from "./redux/auth/authActions";
import PrivateRoute from "./components/privateroutes/PrivateRoutes";
import {createGlobalStyle} from "styled-components";
import Loading from "./components/loading/Loading";
const Dashboard = lazy(() => import("./components/dashboard/Dashboard"));
const Touse = lazy(() => import("./components/touse/Touse"));
const AddNote = lazy(() => import("./components/addNote/AddNote"));
const Edit = lazy(() => import("./components/edit/Edit"));
const Account = lazy(() => import("./components/account/Account"));
const PublicNotes = lazy(() => import("./components/publicNotes/PublicNotes"));
const Logout = lazy(() => import("./components/logout/Logout"));
const Register = lazy(() => import("./components/register/Register"));

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
            <Suspense fallback={<Loading/>}>
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
                    <PrivateRoute exact path="/dashboard" component={Dashboard} />
                    <PrivateRoute exact path="/add" component={AddNote} />
                    <PrivateRoute exact path="/edit/:id" component={Edit} />
                    <PrivateRoute exact path="/touse" component={Touse} />
                    <PrivateRoute exact path="/account" component={Account} />
                    <PrivateRoute exact path="/public" component={PublicNotes} />
                </Switch>
            </Suspense>
          </Router>
      </>
  );
}
export default App;
