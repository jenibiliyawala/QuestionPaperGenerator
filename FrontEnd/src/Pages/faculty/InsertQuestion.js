import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Navbar from '../../Components/Navbar1';
import Sidebar from '../../Components/Sidebar2';
import Footer from '../../Components/Footer4';
import service_managequestion from "../../services/faculty/managequestion_service";

class InsertQuestion extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            allcourses:[],
            courseid:"1",
            coursecode:"",
            coursename:"",
            question:"",
            mark:"",
            level:"1",
            facultyid:""      
        }
    }
    componentDidMount(){
        //getting course detail..
        if(sessionStorage.getItem("email")!=null){
            service_managequestion
            .getallcourses(null)
            .then((res) => {
                this.setState({
                    allcourses:res.data
                });
            })

            const facultyEmail={
                FacultyEmail:sessionStorage.getItem("email")
            }
            service_managequestion
                .getFacultyID(facultyEmail)
                .then((res) => {
                    this.setState({
                        facultyid:res.data[0].FacultyID
                    });
                })
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
                                        <li className="breadcrumb-item"><Link to={"/manageQuestion"}>Manage question</Link></li>
                                        <li className="breadcrumb-item active">Insert question</li>
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
                                            <h3 className="card-title">Insert question</h3>
                                        </div>
                                        <br></br>
                                        <form role="form" onSubmit={this.onSubmit}>
                                            <div className="card-body" style={{paddingTop:'0px'}}>
                                                <div className="form-group">
                                                    <label htmlFor="Course">Course</label>
                                                    <div className="input-group mb-3">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text"><i className="fas fa-book"></i></span>
                                                        </div>
                                                        <select 
                                                            onChange={this.handleChange} 
                                                            name="courseid"
                                                            id="Course"
                                                            value={this.state.courseid || ''}
                                                            onChange={this.onChange.bind(this)}
                                                            defaultValue={this.state.courseid || ''}
                                                            className="form-control"  >
                                                                {this.state.allcourses.map(iteratorvariable => {
                                                                    return (<option key={iteratorvariable.CourseID} value={iteratorvariable.CourseID}>{iteratorvariable.CourseCode} - {iteratorvariable.CourseName}</option>) })}
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="Question">Question</label>
                                                    <div className="input-group mb-3">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text"><i className="fas fa-question"></i></span>
                                                        </div>
                                                        <input 
                                                            type="text" 
                                                            className="form-control" 
                                                            id="question" 
                                                            placeholder="Enter question description"
                                                            name="question" 
                                                            required
                                                            minLength="2"
                                                            maxLength="2000"
                                                            title="Enter valid question"
                                                            defaultValue={this.state.question || ''} 
                                                            onChange={this.onChange.bind(this)}
                                                        />
                                                    </div>
                                                </div>
                                                
                                                <div className="form-group">
                                                    <label htmlFor="Mark">Mark</label>
                                                    <div className="input-group mb-3">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text"><i className="fas fa-marker"></i></span>
                                                        </div>
                                                        <input 
                                                            type="text" 
                                                            className="form-control" 
                                                            id="Mark"
                                                            name="mark" 
                                                            required
                                                            minLength="1"
                                                            maxLength="2"
                                                            title="Enter valid marks"
                                                            placeholder="Enter marks"
                                                            defaultValue={this.state.mark || ''} 
                                                            onChange={this.onChange.bind(this)}
                                                        />
                                                    </div>
                                                </div>
                                                
                                                <div className="form-group">
                                                    <label htmlFor="Level">Level</label>
                                                    <div className="input-group mb-3">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text"><i className="fas fa-layer-group"></i></span>
                                                        </div>&nbsp;&nbsp;
                                                        <input 
                                                            type="radio" 
                                                            id="Easy"
                                                            placeholder="Enter Level"
                                                            name="level"
                                                            value="1"
                                                            checked={this.state.level == "1"}
                                                            onChange={this.onChange.bind(this)}
                                                            style={{height:'1.5em',width:'1.5em'}}
                                                        />&nbsp;<label> Easy </label>&nbsp;&nbsp;&nbsp;&nbsp;
                                                        <input 
                                                            type="radio" 
                                                            id="Medium" 
                                                            placeholder="Enter Level" 
                                                            name="level"
                                                            value="2" 
                                                            checked={this.state.level == "2"}
                                                            onChange={this.onChange.bind(this)}
                                                            style={{height:'1.5em',width:'1.5em'}}
                                                        />&nbsp;<label> Medium </label>&nbsp;&nbsp;&nbsp;&nbsp;
                                                        <input 
                                                            type="radio" 
                                                            id="Hard"
                                                            placeholder="Enter Level"
                                                            name="level"
                                                            value="3"
                                                            checked={this.state.level == "3"}
                                                            onChange={this.onChange.bind(this)}
                                                            style={{height:'1.5em',width:'1.5em'}}
                                                        />&nbsp;<label> Hard </label>
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
            courseid: this.state.courseid,
            question:this.state.question,
            mark:this.state.mark,
            level:this.state.level,
            facultyid:this.state.facultyid,
        }
        service_managequestion
            .addedQuestion(data)
            .then((res) =>
            {
                this.props.history.push('/manageQuestion');
            })
            .catch((e) => {
                alert("Some error occured Adding question"+e);
            });
    }
}
export default InsertQuestion;