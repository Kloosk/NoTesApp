import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Start from "./components/start/Start";
import Register from "./components/register/Register";



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
            </Switch>
          </Router>
      </>
  );
}

export default App;
