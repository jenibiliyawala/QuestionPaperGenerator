import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Navbar from '../../Components/Navbar1';
import Sidebar from '../../Components/Sidebar2';
import Footer from '../../Components/Footer4';
import service_managecourse from "../../services/faculty/managecourse_service";

class Home extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            allprograms:[],
            coursecode:"",
            coursename:"",
            programid:"",
            programname:"",
            facultyid:""      
        }
    }
    componentDidMount(){
        //getting program detail..
        if(sessionStorage.getItem("email")!=null){
            service_managecourse
            .getallprograms(null)
            .then((res) => {
                this.setState({
                    allprograms:res.data
                });
            })

            const facultyEmail={
                FacultyEmail:sessionStorage.getItem("email")
            }
            service_managecourse
                .getFacultyID(facultyEmail)
                .then((res) => {
                    this.setState({
                        facultyid:res.data[0].FacultyID
                    });
                    console.log(res.data[0].FacultyID);
                })
            console.log(this.state.facultyid);
            alert(this.state.facultyid);
        } 
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
                                    <h1>Insert new course</h1>
                                </div>
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item"><Link to={"/dashboard"}>Home</Link></li>
                                        <li className="breadcrumb-item"><Link to={"/manageCourse"}>Manage course</Link></li>
                                        <li className="breadcrumb-item active">Insert course</li>
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
                                                    <label htmlFor="ProgramName">Program Name</label>
                                                    <div className="input-group mb-3">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text"><i className="fas fa-phone-alt"></i></span>
                                                        </div>
                                                        <select 
                                                            onChange={this.handleChange} 
                                                            name="programid"
                                                            id="ProgramName"
                                                            value={this.state.programid || ''}
                                                            onChange={this.onChange.bind(this)}
                                                            defaultValue={this.state.programname || ''}
                                                            className="form-control"  >
                                                                {this.state.allprograms.map(iteratorvariable => {
                                                                    return (<option key={iteratorvariable.ProgramID} value={iteratorvariable.ProgramID}>{iteratorvariable.ProgramName} </option>) })}
                                                        </select>
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
    
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value});
    };
    handleChange = (event) => this.setState({programid: event.target.key, programname:event.target.value});

    onSubmit = (e)=>{
        e.preventDefault()
        const data={
            coursecode: this.state.coursecode,
            coursename:this.state.coursename,
            facultyid:this.state.facultyid,
            programid:this.state.programid,
        }
        service_managecourse
            .addedcourse(data)
            .then((res) =>
            {
                this.props.history.push('/manageCourse');
            })
            .catch((e) => {
                alert("Some error occured Adding course"+e);
            });
    }
}
export default Home;