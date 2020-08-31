import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Navbar from '../../Components/Navbar1';
import Sidebar from '../../Components/Sidebar2';
import Footer from '../../Components/Footer4';
import service_profile from "../../services/faculty/profile_service";

class UpdateProgram extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            password:"",
            oldpassword:"",
            facultyid:"",
            newpassword:"",
            confirmpassword:"",
            // status:"" ,
        }
    }

    //getting Program detail
    componentDidMount(){        
        if(sessionStorage.getItem("email")!=null){   
            const data={  
                email:sessionStorage.getItem("email")
            }
            service_profile.getPassword(data)
                .then((res) => {
                    this.setState({
                        password:res.data[0].Password,
                        facultyid:res.data[0].FacultyID,
                        // status:res.data[0].Status
                    });
                })
                .catch((e) => {
                    var elem = document.getElementById("errorButton");
                    elem.value="&nbsp;&nbsp;Error occured "+e;
                    elem.click();
                });
        }
    }
    
    onSubmit = (e)=>{
        e.preventDefault()
        const data={
            facultyid:this.state.facultyid,
            password:this.state.newpassword
        }
        service_profile
            .updatedPassword(data)
            .then((res) =>
            {
                var elem = document.getElementById("successButton");
                elem.value="&nbsp;&nbsp;Password changed successfully";
                elem.click();
                this.props.history.push('/dashboard');
            })
            .catch((e) => {
                var elem = document.getElementById("errorButton");
                elem.value="&nbsp;&nbsp;Some error occured updating password "+e;
                elem.click();
            });
    }

    render(){
        return (
            <div>
                <Navbar/>
                <Sidebar/>

                <div className="content-wrapper">
                    <button type="button" className="btn btn-danger swalDefaultError" value="&nbsp;&nbsp;Error" id="errorButton" style={{display:"none"}}></button>
                    <button type="button" className="btn btn-success swalDefaultSuccess" value="&nbsp;&nbsp;Successfull" id="successButton" style={{display:"none"}}></button>

                    <section className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1>Change password</h1>
                                </div>
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item"><Link to={"/dashboard"}>Home</Link></li>
                                        <li className="breadcrumb-item active">Change password</li>
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
                                            <h3 className="card-title">Provide credentials here</h3>
                                        </div>
                                        <br></br>
                                        <form role="form" onSubmit={this.onSubmit}>
                                            <div className="card-body" style={{paddingTop:'0px'}}>
                                                
                                                <div className="form-group">
                                                    <label htmlFor="OldPassword">Enter your old password</label>
                                                    <div className="input-group mb-3">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text"><i className={this.state.password===this.state.oldpassword?"fas fa-check":"fas fa-times"}></i></span>
                                                        </div>
                                                        <input 
                                                            type="password"
                                                            className="form-control" 
                                                            id="OldPassword" 
                                                            name="oldpassword" 
                                                            required
                                                            minLength="8"
                                                            maxLength="50"
                                                            title="Enter valid password"
                                                            placeholder="Enter old password"
                                                            defaultValue={this.state.oldpassword || ''} 
                                                            onChange={this.onChange.bind(this)}
                                                        />
                                                    </div>
                                                </div>
                                                
                                                <div className="form-group">
                                                    <label htmlFor="NewPassword">Enter your new password</label>
                                                    <div className="input-group mb-3">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text"><i className="fas fa-lock-open"></i></span>
                                                        </div>
                                                        <input 
                                                            type="password"
                                                            className="form-control" 
                                                            id="NewPassword" 
                                                            name="newpassword" 
                                                            required
                                                            minLength="8"
                                                            maxLength="50"
                                                            title="Enter valid password"
                                                            placeholder="Enter new password"
                                                            defaultValue={this.state.newpassword || ''} 
                                                            onChange={this.onChange.bind(this)}
                                                        />
                                                    </div>
                                                </div>
                                                
                                                <div className="form-group">
                                                    <label htmlFor="ConfirmPassword">Enter again new password</label>
                                                    <div className="input-group mb-3">
                                                        <div className="input-group-prepend">
                                                        {/* check */}
                                                            <span className="input-group-text"><i className="fas fa-lock"></i></span>
                                                        </div>
                                                        <input 
                                                            type="password"
                                                            className="form-control" 
                                                            id="ConfirmPassword" 
                                                            name="confirmpassword" 
                                                            required
                                                            minLength="8"
                                                            maxLength="50"
                                                            title="Enter valid password"
                                                            placeholder="Enter new password to confirm"
                                                            defaultValue={this.state.confirmpassword || ''} 
                                                            onChange={this.onChange.bind(this)}
                                                        />
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="card-footer">
                                                <button type="submit" className="btn btn-primary" style={{display:this.state.newpassword===this.state.confirmpassword && this.state.confirmpassword!=null && this.state.confirmpassword!="" && this.state.password==this.state.oldpassword?'':'none'}}>Update</button>
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

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value});
    };
}
export default UpdateProgram;