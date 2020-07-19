import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Navbar from '../../Components/Navbar1';
import Sidebar from '../../Components/Sidebar2';
import Footer from '../../Components/Footer4';
import service_managecourse from "../../services/faculty/managecourse_service";

class UpdateCourse extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            allprograms:[],
            coursecode:"",
            coursename:"",
            programid:"",
            programname:"",
            status:"" ,
            courseid:""     
        }
    }

    //getting Course detail
    componentDidMount(){        
        if(sessionStorage.getItem("email")!=null){   
            service_managecourse
                .getallprograms(null)
                .then((res) => {
                    this.setState({
                        allprograms:res.data
                    });
                })
                .catch((e) => {
                    var elem = document.getElementById("errorButton");
                    elem.value="&nbsp;&nbsp;Some error occured getting all programs details"+e;
                    elem.click();
                });

            const data={  
                CourseID:this.props.match.params.CourseID
            }
            service_managecourse.selectedCourseDetail(data)
                .then((res) => {
                    this.setState({
                        coursecode:res.data[0].CourseCode,
                        coursename:res.data[0].CourseName,
                        programid:res.data[0].ProgramID,
                        programname:res.data[0].ProgramName,
                        status:res.data[0].Status
                    });
                })
                .catch((e) => {
                    // var elem = document.getElementById("errorButton");
                    // elem.value="&nbsp;&nbsp;Some error occured getting course details"+e;
                    // elem.click();
                });
        }
    }
    
    onSubmit = (e)=>{
        e.preventDefault()
        const data={
            coursecode: this.state.coursecode,
            coursename:this.state.coursename,
            programid:this.state.programid,
            status:this.state.status,
            courseid:this.props.match.params.CourseID,
        }
        service_managecourse
            .updatedcourse(data)
            .then((res) =>
            {
                this.props.history.push('/dashboard');
                // var elem = document.getElementById("successButton");
                // elem.value="&nbsp;&nbsp;Course updated successfully";
                // elem.click();
            })
            .catch((e) => {
                // var elem = document.getElementById("errorButton");
                // elem.value="&nbsp;&nbsp;Some error occured updating course"+e;
                // elem.click();
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
                                    <h1>Update course</h1>
                                </div>
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item"><Link to={"/dashboard"}>Home</Link></li>
                                        <li className="breadcrumb-item"><Link to={"/manageCourse"}>Manage course</Link></li>
                                        <li className="breadcrumb-item active">Update course</li>
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
                                            <h3 className="card-title">Course Details</h3>
                                        </div>
                                        <br></br>
                                        <form role="form" onSubmit={this.onSubmit}>
                                            <div className="card-body" style={{paddingTop:'0px'}}>
                                                <div className="form-group">
                                                    <label htmlFor="CourseCode">Course Code</label>
                                                    <div className="input-group mb-3">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text"><i className="fas fa-user-tie"></i></span>
                                                        </div>
                                                        <input 
                                                            type="text" 
                                                            className="form-control" 
                                                            id="CourseCode" 
                                                            placeholder="Enter Course Code" 
                                                            name="coursecode" 
                                                            required
                                                            minLength="2"
                                                            maxLength="100"
                                                            title="Enter valid course code"
                                                            defaultValue={this.state.coursecode || ''} 
                                                            onChange={this.onChange.bind(this)}
                                                        />
                                                    </div>
                                                </div>
                                                
                                                <div className="form-group">
                                                    <label htmlFor="CourseName">Course name</label>
                                                    <div className="input-group mb-3">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text"><i className="fas fa-user"></i></span>
                                                        </div>
                                                        <input 
                                                            type="text"
                                                            className="form-control" 
                                                            id="CourseName" 
                                                            name="coursename" 
                                                            required
                                                            minLength="2"
                                                            maxLength="100"
                                                            title="Enter valid course name"
                                                            placeholder="Enter Course name"
                                                            defaultValue={this.state.coursename || ''} 
                                                            onChange={this.onChange.bind(this)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputContactNo1">Program Name</label>
                                                    <div className="input-group mb-3">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text"><i className="fas fa-phone-alt"></i></span>
                                                        </div>
                                                        <select 
                                                            onChange={this.handleChange} 
                                                            name="programid" 
                                                            value={this.state.programid || ''}
                                                            onChange={this.onChange.bind(this)}
                                                            defaultValue={this.state.programname || ''}
                                                            className="form-control"  >
                                                                {this.state.allprograms.map(iteratorvariable => {
                                                                    return (<option key={iteratorvariable.ProgramID} value={iteratorvariable.ProgramID}>{iteratorvariable.ProgramName} </option>) })}
                                                         </select>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="status">Status</label>
                                                    <div className="input-group mb-3">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text"><i className="fas fa-phone-alt"></i></span>
                                                        </div>&nbsp;&nbsp;
                                                        <input 
                                                            type="radio" 
                                                            id="block"
                                                            placeholder="Enter Status"
                                                            name="status"
                                                            value="1"
                                                            checked={this.state.status == "1"}
                                                            onChange={this.onChange.bind(this)}
                                                            style={{height:'1.5em',width:'1.5em'}}
                                                        />&nbsp;<label> Block </label>&nbsp;&nbsp;&nbsp;&nbsp;
                                                        <input 
                                                            type="radio" 
                                                            id="unblock" 
                                                            placeholder="Enter Status" 
                                                            name="status"
                                                            value="0" 
                                                            checked={this.state.status == "0"}
                                                            onChange={this.onChange.bind(this)}
                                                            style={{height:'1.5em',width:'1.5em'}}
                                                        />&nbsp;<label> Unblock </label>
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

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value});
    };
    handleChange = (event) => this.setState({programid: event.target.key, programname:event.target.value});
}
export default UpdateCourse;