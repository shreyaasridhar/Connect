import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import MapContainer from "./components/MapView";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/map">
            <MapContainer />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Redirect from="/" to="/login" />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
