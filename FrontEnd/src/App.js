import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Dashboard from './Pages/faculty/Dashboard';
import Profile from './Pages/faculty/Profile';
import Login from './Pages/faculty/Login';
import ManageCourse from './Pages/faculty/ManageCourse';
import UpdateCourse from './Pages/faculty/UpdateCourse';
import InsertCourse from './Pages/faculty/InsertCourse';
import ManageProgram from './Pages/faculty/ManageProgram';
import UpdateProgram from './Pages/faculty/UpdateProgram';
import InsertProgram from './Pages/faculty/InsertProgram';
import ManageQuestion from './Pages/faculty/ManageQuestion';
import UpdateQuestion from './Pages/faculty/UpdateQuestion';
import InsertQuestion from './Pages/faculty/InsertQuestion';
import ManageFaculty from './Pages/faculty/ManageFaculty';
import InsertFaculty from './Pages/faculty/InsertFaculty';
import generateQuestionPaper from './Pages/faculty/GenerateQuestionPaper';
import Print from './Pages/faculty/Print';

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
            <Route path={"/updateCourse/:CourseID"} component={UpdateCourse} />
            <Route path={"/insertCourse"} component={InsertCourse} />
            <Route path={"/manageProgram"} component={ManageProgram} />
            <Route path={"/updateProgram/:ProgramID"} component={UpdateProgram} />
            <Route path={"/insertProgram"} component={InsertProgram} />
            <Route path={"/manageQuestion"} component={ManageQuestion} />
            <Route path={"/updateQuestion/:QuestionID"} component={UpdateQuestion} />
            <Route path={"/insertQuestion"} component={InsertQuestion} />
            <Route path={"/manageFaculty"} component={ManageFaculty} />
            <Route path={"/insertFaculty"} component={InsertFaculty} />
            <Route path={"/generateQuestionPaper"} component={generateQuestionPaper} />
            <Route path={"/Print"} component={Print} />
            
            <Route path={"/contact"} component={Temp} />
          </Switch>
        </BrowserRouter>

      </div>

      );
    }
}