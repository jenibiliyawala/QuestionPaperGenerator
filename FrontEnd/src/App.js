import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Dashboard from './Pages/faculty/Dashboard';
import Home from './Pages/faculty/Home';

import Login from './Pages/faculty/Login';
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
            {/* <Route exact path={"/"} 
              render={props=>(
                <Home {...props} loggedInStatus={this.state.loggedInStatus}/>
              )}
            /> */}
            <Route exact path={"/"} component={Dashboard} />
            <Route path={"/login"} component={Login} />
            <Route path={"/Dashboard"} component={Dashboard}/>
            <Route path={"/home"} component={Home} />
            <Route path={"/contact"} component={Temp} />

          </Switch>
        </BrowserRouter>

      </div>

      );
    }
}


