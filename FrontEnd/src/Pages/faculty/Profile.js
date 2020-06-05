import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Navbar from '../../Components/Navbar1';
import Sidebar from '../../Components/Sidebar2';
import Footer from '../../Components/Footer4';
import service_profile from "../../services/faculty/profile_service";

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            firstname:"",
            lastName:"",
            facultyID:0,
            status:0,
            fileName:"",
            contactNo:""
        }
    }
   
    componentDidMount(){
        const data={
            email: sessionStorage.getItem("email")
        }
        if(sessionStorage.getItem("email")!=null){
            service_profile
                .facultyDetail(data)
                .then((res) => {
                    this.setState({
                        firstname:res.data[0].FirstName,
                        lastname:res.data[0].LastName,
                        facultyID:res.data[0].FacultyID,
                        status:res.data[0].Status,
                        fileName:res.data[0].Image,
                        contactno:res.data[0].ContactNo
                    });
                })
                .catch((e) => {
                    alert("Some error occured getting faculty details"+e);
                });
        }
    }

    onChange = e => {
        switch (e.target.name) {
            case 'myimage':
                if(e.target.files.length > 0) {
                    this.setState({ fileName: e.target.files[0].name });
                }
                break;
            default:
                this.setState({ [e.target.name]: e.target.value });
        }
    };

    sendFile = (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append("file", this.state.myimage);
        service_profile
            .uploadImage(formData)
            .then(res => {
                alert(formData.getAll)
                let response = res.data;    
                if (response.result === 1) {
                    this.error = "Image Uploaded";
                    this.profilePic = response.name;
                    this.uploadStatus = 1;
                } 
                else {
                    this.uploadStatus = 0;
                    this.error = "Error occured!!!";
                    alert("image upload failed.. ")
                }
            })
            .catch((e) => {
                alert("image not uploaded "+e);
            });
    }
  
    onSubmit = (e)=>{
        e.preventDefault()
        const data={
            email: sessionStorage.getItem("email"),
            firstname: this.state.firstname,
            lastname:this.state.lastname,
            contactno:this.state.contactno,
            password:this.state.password,
            fileName:this.state.myimage,
        }
        service_profile
            .updatedFaculty(data)
            .then((res) =>
            {
                var resdata = res.data;
                if (resdata.result == -1) {
                    alert("Invalid..!");
                }
                else{
                    alert("Profile updated successfully..!");
                    this.props.history.push('/dashboard');
                }   
            })
            .catch((e) => {
                alert("Some error occured updating faculty"+e);
            });
    }

    render(){
        const { fileName } = this.state;
        let file = null;
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
                                        {/* <form role="form" onSubmit={this.onSubmit}> */}
                                            <div className="card-body">
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputFirstName1">First name</label>
                                                    <div className="input-group mb-3">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text"><i className="fas fa-user-tie"></i></span>
                                                        </div>
                                                        <input type="text" className="form-control" id="exampleInputFirstName1" placeholder="Enter first name" name="firstname" value={this.state.firstname || ''} onChange={this.onChange.bind(this)}/>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputLastName1">Last name</label>
                                                    <div className="input-group mb-3">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text"><i className="fas fa-user"></i></span>
                                                        </div>
                                                        <input type="text" className="form-control" id="exampleInputLastName1" placeholder="Enter last name" name="lastname" value={this.state.lastname} onChange={this.onChange.bind(this)}/>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputContactNo1">Contact no</label>
                                                    <div className="input-group mb-3">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text"><i className="fas fa-phone-alt"></i></span>
                                                        </div>
                                                        <input type="text" className="form-control" id="exampleInputContactNo1" placeholder="Enter contact no" name="contactno" value={this.state.contactno} onChange={this.onChange.bind(this)}/>
                                                    </div>
                                                </div>
                                                <form enctype="multipart/form-data" onSubmit={this.sendFile}> {/* @submit.prevent="sendFile"> */}
                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputFile">Change profile picture</label>
                                                        <div className="input-group mb-3">
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text"><i className="fas fa-image"></i></span>
                                                            </div>
                                                            <div className="custom-file">
                                                                <input type="file" className="custom-file-input" id="exampleInputFile" name="myimage" onChange={(e)=>this.onChange(e)}/>
                                                                <label className="custom-file-label" htmlFor="exampleInputFile">Choose image</label>
                                                            </div>
                                                            <div className="input-group-append">
                                                                <button type="submit" className="input-group-text" id="profileImage" name="Upload" value="Upload">Upload</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1">Enter your password to update details</label>
                                                    <div className="input-group mb-3">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text"><i className="fas fa-key"></i></span>
                                                        </div>
                                                        <input type="password" name="password"  className="form-control" id="exampleInputPassword1" placeholder="Enter password" onChange={this.onChange.bind(this)}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-footer">
                                                <button type="submit" className="btn btn-primary">Update</button>
                                            </div>
                                        {/* </form> */}
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
    //set value from input form
    onChange = (e)=>{
        this.setState({[e.target.name] : e.target.value})
    }
}
export default Home;