import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Navbar from '../../Components/Navbar1';
import Sidebar from '../../Components/Sidebar2';
import Footer from '../../Components/Footer4';


class Home extends React.Component{
    render(){
        return (
            <div>
                <Navbar/>
                <Sidebar/>

                <div className="content-wrapper">

                    <section className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1>Profile</h1>
                                </div>
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item"><Link to={"/dashboard"}>Home</Link></li>
                                        <li className="breadcrumb-item active">profile</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-10 offset-md-1">
                                    <div className="card card-primary">
                                        <div className="card-header">
                                            <h3 className="card-title">Quick Example</h3>
                                        </div>
                                        <form role="form">
                                            <div className="card-body">
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputFirstName1">First name</label>
                                                    <div className="input-group mb-3">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text"><i className="fas fa-user-tie"></i></span>
                                                        </div>
                                                        <input type="text" className="form-control" id="exampleInputFirstName1" placeholder="Enter first name"/>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputLastName1">Last name</label>
                                                    <div className="input-group mb-3">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text"><i className="fas fa-user"></i></span>
                                                        </div>
                                                        <input type="text" className="form-control" id="exampleInputLastName1" placeholder="Enter last name"/>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputContactNo1">Contact no</label>
                                                    <div className="input-group mb-3">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text"><i className="fas fa-phone-alt"></i></span>
                                                        </div>
                                                        <input type="text" className="form-control" id="exampleInputContactNo1" placeholder="Enter contact no"/>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputFile">Change profile picture</label>
                                                    <div className="input-group mb-3">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text"><i className="fas fa-image"></i></span>
                                                        </div>
                                                        <div className="custom-file">
                                                            <input type="file" className="custom-file-input" id="exampleInputFile"/>
                                                            <label className="custom-file-label" htmlFor="exampleInputFile">Choose image</label>
                                                        </div>
                                                        <div className="input-group-append">
                                                            <span className="input-group-text" id="">Upload</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1">Enter your password to update details</label>
                                                    <div className="input-group mb-3">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text"><i className="fas fa-key"></i></span>
                                                        </div>
                                                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter password"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-footer">
                                                <button type="submit" className="btn btn-primary">Update</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>    
                        </div>    
                    </section>

                </div>
                
                <Footer/>
            </div>
        );
    }
}
export default Home;