import React, {Component} from 'react';
import {Link, Redirect} from "react-router-dom";
class Navbar1 extends React.Component{
    
    // Login redirect code starts
    state = {
        redirect: false
    }
    logInFunction = () => {
        this.setState({
            redirect: true
        })
    }
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/login' />
        }
    }
    // login redirect code ends
    
    render(){
        return(
            <div>
                {this.renderRedirect()} {/*called to initialize login function state */}
        		<nav className="main-header navbar navbar-expand navbar-white navbar-light">
                    {/* Left navbar links */}
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars"></i></a>
                    </li>
                    <li className="nav-item d-none d-sm-inline-block">
                        <Link to={"/home"} activestyle={{color:'red'}} className="nav-link">Home</Link>
                        {/* <a href="#" className="nav-link">Home</a> */}
                    </li>
                    <li className="nav-item d-none d-sm-inline-block">
                        <Link to={"/contact"} activestyle={{color:'red'}} className="nav-link">Contact</Link>
                        {/* <a href="#" className="nav-link">Contact</a> */}
                    </li>
                    </ul>

                    {/* SEARCH FORM */}
                    <form className="form-inline ml-3">
                        <div className="input-group input-group-sm">
                            <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search"/>
                            <div className="input-group-append">
                            <button className="btn btn-navbar" type="submit">
                                <i className="fas fa-search"></i>
                            </button>
                            </div>
                        </div>
                    </form>

                    {/* Right navbar links */}
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                            <button onClick={this.logInFunction} type="button" className="btn btn-block btn-success">Login</button>
                        </li>
                        <li className="nav-item">
                            <button onClick={this.logOutFunction} type="button" className="btn btn-block btn-danger">Logout</button>
                        </li>
                        {/* Messages Dropdown Menu */}
                        <li className="nav-item dropdown">
                            <a className="nav-link" data-toggle="dropdown" href="#">
                                <i className="far fa-comments"></i>
                                <span className="badge badge-danger navbar-badge">3</span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                            <a href="#" className="dropdown-item">
                                {/* Message Start */}
                                <div className="media">
                                    <img src="Assets/dist/img/user1-128x128.jpg" alt="User Avatar" className="img-size-50 mr-3 img-circle"/>
                                    <div className="media-body">
                                        <h3 className="dropdown-item-title">
                                        Brad Diesel
                                        <span className="float-right text-sm text-danger"><i className="fas fa-star"></i></span>
                                        </h3>
                                        <p className="text-sm">Call me whenever you can...</p>
                                        <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                    </div>
                                </div>
                                {/* Message End */}
                            </a>
                            <div className="dropdown-divider"></div>
                            <a href="#" className="dropdown-item">
                                {/* Message Start */}
                                <div className="media">
                                    <img src="Assets/dist/img/user8-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3"/>
                                    <div className="media-body">
                                        <h3 className="dropdown-item-title">
                                            John Pierce
                                            <span className="float-right text-sm text-muted"><i className="fas fa-star"></i></span>
                                        </h3>
                                        <p className="text-sm">I got your message bro</p>
                                        <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                    </div>
                                </div>
                                {/* Message End */}
                            </a>
                            <div className="dropdown-divider"></div>
                            <a href="#" className="dropdown-item">
                                {/* Message Start */}
                                <div className="media">
                                    <img src="Assets/dist/img/user3-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3"/>
                                    <div className="media-body">
                                        <h3 className="dropdown-item-title">
                                            Nora Silvester
                                            <span className="float-right text-sm text-warning"><i className="fas fa-star"></i></span>
                                        </h3>
                                        <p className="text-sm">The subject goes here</p>
                                        <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                    </div>
                                </div>
                                {/* Message End */}
                            </a>
                            <div className="dropdown-divider"></div>
                            <a href="#" className="dropdown-item dropdown-footer">See All Messages</a>
                            </div>
                        </li>
                        {/* Notifications Dropdown Menu */}
                        <li className="nav-item dropdown">
                            <a className="nav-link" data-toggle="dropdown" href="#">
                                <i className="far fa-bell"></i>
                                <span className="badge badge-warning navbar-badge">15</span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                                <span className="dropdown-item dropdown-header">15 Notifications</span>
                                <div className="dropdown-divider"></div>
                                <a href="#" className="dropdown-item">
                                    <i className="fas fa-envelope mr-2"></i> 4 new messages
                                    <span className="float-right text-muted text-sm">3 mins</span>
                                </a>
                                <div className="dropdown-divider"></div>
                                <a href="#" className="dropdown-item">
                                    <i className="fas fa-users mr-2"></i> 8 friend requests
                                    <span className="float-right text-muted text-sm">12 hours</span>
                                </a>
                                <div className="dropdown-divider"></div>
                                <a href="#" className="dropdown-item">
                                    <i className="fas fa-file mr-2"></i> 3 new reports
                                    <span className="float-right text-muted text-sm">2 days</span>
                                </a>
                                <div className="dropdown-divider"></div>
                                <a href="#" className="dropdown-item dropdown-footer">See All Notifications</a>
                            </div>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button">
                            <i className="fas fa-th-large"></i>
                            </a>
                        </li> */}
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navbar1;