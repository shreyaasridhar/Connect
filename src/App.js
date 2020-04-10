import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './components/Login';


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
