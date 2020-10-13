import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Start from "./components/start/Start";



function App() {
  return (
      <>
          <Router>
            <Switch>
              <Route exact path="/">
                <Start/>
              </Route>
            </Switch>
          </Router>
      </>
  );
}

export default App;
