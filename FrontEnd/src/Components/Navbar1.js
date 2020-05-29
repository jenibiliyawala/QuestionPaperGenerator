import React, {Component} from 'react';
import {Link, Redirect} from "react-router-dom";
class Navbar1 extends React.Component{
    // logout code starts
    state = {
        redirect: false
    }
    renderRedirect = () => {
        if (this.state.redirect || sessionStorage.getItem("email")==null) {
            return <Redirect to='/login' />
        }
    }    
    logOutFunction = () => {
        sessionStorage.removeItem("email");
        this.setState({
            redirect: true
        })
    }
    // logout code ends
    
    render(){
        return(
            <div>
                {this.renderRedirect()} {/*called to initialize login function state */}
        		<nav className="main-header navbar navbar-expand navbar-dark navbar-navy">
                    {/* Left navbar links */}
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars"></i></a>
                        </li>
                        <li className="nav-item d-none d-sm-inline-block">
                            <Link to={"/dashboard"} activestyle={{color:'red'}} className="nav-link">Home</Link>
                            {/* <a href="#" className="nav-link">Home</a> */}
                        </li>
                        <li className="nav-item d-none d-sm-inline-block">
                            <Link to={"/profile"} activestyle={{color:'red'}} className="nav-link">Profile</Link>
                            {/* <a href="#" className="nav-link">Contact</a> */}
                        </li>
                        <li className="nav-item d-none d-sm-inline-block">
                            <Link to={"/contact"} activestyle={{color:'red'}} className="nav-link">Contact</Link>
                            {/* <a href="#" className="nav-link">Contact</a> */}
                        </li>
                    </ul>

                    {/* Right navbar links */}
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to={"/profile"} className="nav-link">{sessionStorage.getItem("email")}</Link>
                            
                            {/* <button onClick={this.logInFunction} type="button" className="btn btn-block btn-success">Login</button> */}
                        </li>
                        <li className="nav-item">
                            <button onClick={this.logOutFunction} type="button" className="btn btn-block btn-danger">Logout</button>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navbar1;