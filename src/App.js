import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Start from "./components/start/Start";
import Register from "./components/register/Register";
import Login from "./components/login/Login";



function App() {
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
            </Switch>
          </Router>
      </>
  );
}

export default App;
