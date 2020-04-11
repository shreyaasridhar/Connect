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
import Dashboard from "./components/Dashboard";
import MapDashboard from "./components/MapDashboard";
import MapContainer from "./components/MapView";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/map">
            <MapDashboard MapContainer={<MapContainer />} />
          </Route>
          <Route path="/mapview">
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
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Redirect from="/" to="/login" />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
