import React, {Component} from 'react';
import Navbar from './Components/Navbar1';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
 import Sidebar from './Components/Sidebar2';
 import Dashboard from './Pages/Dashboard';
 import Home from './Pages/Home';

// import Footer from './Components/Footer4';
import Login from './Pages/Login';
import Register from './Pages/Register';
// import Temp from './Pages/Temp';
// import '../public/Assets/dist/css/custom/Login.css';

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
    <Route exact path={"/"} 
    render={props=>(
      <Home {...props} loggedInStatus={this.state.loggedInStatus}/>
    )}
    />
    <Route
     exact
      path={"/dashboard"}
      render={props => (
      <Dashboard {...props} loggedInStatus={this.state.loggedInStatus} />
      )}
      />

  </Switch>
  </BrowserRouter>

</div>

    );
  }
}


