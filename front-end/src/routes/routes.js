import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Logon from './../pages/Logon/index';
import Register from './../pages/Register/index';
import Profile from './../pages/Profile/index';
import NewIncident from './../pages/NewIncident/index';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon} />
        <Route path="/register" exact component={Register} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/incidents/new" exact component={NewIncident} />
      </Switch>
    </BrowserRouter>
  )
}