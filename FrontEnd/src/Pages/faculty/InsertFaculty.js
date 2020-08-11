import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Navbar from '../../Components/Navbar1';
import Sidebar from '../../Components/Sidebar2';
import Footer from '../../Components/Footer4';
import service_managefaculty from "../../services/faculty/managefaculty_service";

class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email:"",
            firstname:"",
            lastName:"",
            facultyID:0,
            status:0,
            fileName:"",
            contactNo:"",
        }
        this.fileInput = React.createRef();
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
                                            <h3 className="card-title">Faculty details</h3>
                                        </div>
                                        <form encType="multipart/form-data" onSubmit={this.sendFile}>
                                            <div className="card-body" style={{paddingBottom:'0px'}}>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputFile">Profile picture</label>
                                                    <div className="input-group mb-3">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text"><i className="fas fa-image"></i></span>
                                                        </div>
                                                        <div className="custom-file">
                                                            <input 
                                                                type="file"
                                                                className="custom-file-input" 
                                                                ref={this.fileInput}
                                                                accept="image/png, image/jpeg, image/jpg"
                                                            />
                                                            <label className="custom-file-label" htmlFor="exampleInputFile">Choose image</label>
                                                        </div>
                                                        <div className="input-group-append">
                                                            <button type="submit" className="input-group-text">Upload</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                        <form role="form" onSubmit={this.onSubmit}>
                                            <div className="card-body" style={{paddingTop:'0px'}}>
                                            <div className="form-group">
                                                    <label htmlFor="exampleInputLastName1">Email</label>
                                                    <div className="input-group mb-3">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text"><i className="fas fa-user"></i></span>
                                                        </div>
                                                        <input 
                                                            type="text" 
                                                            className="form-control" 
                                                            id="exampleInputLastName1" 
                                                            required
                                                           /* pattern="[a-zA-Z]*"
                                                            title="Only Characters are allowed"
                                                            minLength="2"
                                                            maxLength="100"*/
                                                            placeholder="Enter email address" 
                                                            name="email" 
                                                            defaultValue={this.state.email || ''} 
                                                            onChange={this.onChange.bind(this)}
                                                        />
                                                    </div>
                                                </div>
                                               
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputFirstName1">First name</label>
                                                    <div className="input-group mb-3">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text"><i className="fas fa-user-tie"></i></span>
                                                        </div>
                                                        <input 
                                                            type="text" 
                                                            className="form-control" 
                                                            id="exampleInputFirstName1" 
                                                            placeholder="Enter first name" 
                                                            name="firstname" 
                                                            required
                                                            minLength="2"
                                                            maxLength="100"
                                                            pattern="[a-zA-Z]*"
                                                            title="Only Characters are allowed"
                                                            defaultValue={this.state.firstname || ''} 
                                                           
                                                           
                                                            onChange={this.onChange.bind(this)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputLastName1">Last name</label>
                                                    <div className="input-group mb-3">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text"><i className="fas fa-user"></i></span>
                                                        </div>
                                                        <input 
                                                            type="text" 
                                                            className="form-control" 
                                                            id="exampleInputLastName1" 
                                                            required
                                                            pattern="[a-zA-Z]*"
                                                            title="Only Characters are allowed"
                                                            minLength="2"
                                                            maxLength="100"
                                                            placeholder="Enter last name" 
                                                            name="lastname" 
                                                            defaultValue={this.state.lastname || ''} 
                                                            onChange={this.onChange.bind(this)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputContactNo1">Contact no</label>
                                                    <div className="input-group mb-3">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text"><i className="fas fa-phone-alt"></i></span>
                                                        </div>
                                                        <input 
                                                            type="text" 
                                                            className="form-control" 
                                                            id="exampleInputContactNo1" 
                                                            placeholder="Enter contact no" 
                                                            name="contactno" 
                                                            maxLength="10"
                                                            required
                                                            pattern="[0-9]*"
                                                            title="Only Numbers are allowed"
                                                            minLength="10"
                                                            defaultValue={this.state.contactno} 
                                                            onChange={this.onChange.bind(this) || ''}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1">Enter your password</label>
                                                    <div className="input-group mb-3">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text"><i className="fas fa-key"></i></span>
                                                        </div>
                                                        <input 
                                                            type="password" 
                                                            name="password"  
                                                            className="form-control" 
                                                            id="exampleInputPassword1" 
                                                            maxLength="30"
                                                            minLength="8"
                                                            required
                                                            pattern="[a-zA-Z0-9_@$~.,()=+*^%#!\/?><-]*"
                                                            title="Only Numbers,characters and (_@$~.,()=+*^%#!\/?><-) are allowed"
                                                            placeholder="Enter password" 
                                                            onChange={this.onChange.bind(this)}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-footer">
                                                <button type="submit" className="btn btn-primary">Insert</button>
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
    
    //Image upload
    sendFile = (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append("file", this.fileInput.current.files[0]);
        service_managefaculty
            .uploadImage(formData)
            .then(res => {
                // alert(formData.getAll)
                let response = res.data;    
                if (response.result === 1) {
                    this.error = "Image Uploaded";
                    this.profilePic = response.name;
                    this.setState({
                        fileName:response.name
                    });
                    this.uploadStatus = 1;
                    var elem = document.getElementById("successButton");
                    elem.value="&nbsp;&nbsp;image uploaded..!";
                    elem.click();
                } 
                else {
                    this.uploadStatus = 0;
                    this.error = "Error occured!!!";
                    var elem = document.getElementById("errorButton");
                    elem.value="&nbsp;&nbsp;image upload failed..!";
                    elem.click();
                }
            })
            .catch((e) => {
                var elem = document.getElementById("errorButton");
                elem.value="&nbsp;&nbsp;image not uploaded "+e;
                elem.click();
            });
    }
    
    //Main form submit
    onSubmit = (e)=>{
        e.preventDefault()
        const data={
            email: this.state.email,
            firstname: this.state.firstname,
            lastname:this.state.lastname,
            contactno:this.state.contactno,
            password:this.state.password,
            filename:(this.state.fileName==""?this.state.firstname.charAt(0).toUpperCase()+".svg":this.state.fileName),
        }
        service_managefaculty
            .addedFaculty(data)
            .then((res) =>
            {
                let resdata = res.data;
                    var elem = document.getElementById("successButton");
                    elem.value="&nbsp;&nbsp;Faculty Added successfully..!";
                    elem.click();
                    this.props.history.push('/dashboard');
                  
            })
            .catch((e) => {
                alert("Some error occured Adding faculty"+e);
            });
    }

    //set value from input form
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value});
    };
    
}
export default Profile;