import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Projects from "../pages/Projects";
import Reports from "../pages/Reports";
import NotFound from "../pages/404";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <Route path="/projects" exact component={Projects} />
      <Route path="/reports" exact component={Reports} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default Routes;
