import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Dashboard from './Pages/faculty/Dashboard';
import Profile from './Pages/faculty/Profile';
import Login from './Pages/faculty/Login';
import ManageCourse from './Pages/faculty/ManageCourse';

import Temp from './Pages/faculty/Temp';

export default class App extends Component{
  constructor()
  {
    super();
    this.state={
      loggedInStatus: "NOT_LOGGED_IN",
      user :{}
    }
  }
  render()
  {
    return(
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route exact path={"/"} component={Dashboard} />
            <Route path={"/login"} component={Login} />
            <Route path={"/dashboard"} component={Dashboard}/>
            <Route path={"/profile"} component={Profile} />
            <Route path={"/manageCourse"} component={ManageCourse} />
            
            <Route path={"/contact"} component={Temp} />
          </Switch>
        </BrowserRouter>

      </div>

      );
    }
}


