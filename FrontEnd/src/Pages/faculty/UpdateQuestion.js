import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Navbar from '../../Components/Navbar1';
import Sidebar from '../../Components/Sidebar2';
import Footer from '../../Components/Footer4';
import service_managequestion from "../../services/faculty/managequestion_service";

class UpdateQuestion extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            allcourses:[],
            courseid:"",
            question:"",
            mark:"",
            level:"",
            status:"" ,
        }
    }

    //getting question detail
    componentDidMount(){        
        if(sessionStorage.getItem("email")!=null){   
            service_managequestion
                .getallcourses(null)
                .then((res) => {
                    this.setState({
                        allcourses:res.data
                    });
                })
                .catch((e) => {
                    var elem = document.getElementById("errorButton");
                    elem.value="&nbsp;&nbsp;Some error occured getting all courses details "+e;
                    elem.click();
                });

            const data={  
                QuestionID:this.props.match.params.QuestionID
            }
            service_managequestion.selectedQuestionDetail(data)
                .then((res) => {
                    this.setState({
                        courseid:res.data[0].CourseID,
                        question:res.data[0].Question,
                        mark:res.data[0].Mark,
                        level:res.data[0].Level,
                        status:res.data[0].Status
                    });
                })
                .catch((e) => {
                    var elem = document.getElementById("errorButton");
                    elem.value="&nbsp;&nbsp;Some error occured getting question details"+e;
                    elem.click();
                });
        }
    }
    
    onSubmit = (e)=>{
        e.preventDefault()
        const data={
            courseid: this.state.courseid,
            question:this.state.question,
            mark:this.state.mark,
            level:this.state.level,
            status:this.state.status,
            questionid:this.props.match.params.QuestionID,
        }
        service_managequestion
            .updatedQuestion(data)
            .then((res) =>
            {
                this.props.history.push('/manageQuestion');
                var elem = document.getElementById("successButton");
                elem.value="&nbsp;&nbsp;Question updated successfully";
                elem.click();
            })
            .catch((e) => {
                var elem = document.getElementById("errorButton");
                elem.value="&nbsp;&nbsp;Some error occured updating question "+e;
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
                                    <h1>Update question</h1>
                                </div>
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item"><Link to={"/dashboard"}>Home</Link></li>
                                        <li className="breadcrumb-item"><Link to={"/manageQuestion"}>Manage question</Link></li>
                                        <li className="breadcrumb-item active">Update question</li>
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
                                            <h3 className="card-title">Question Details</h3>
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

                                                <div className="form-group">
                                                    <label htmlFor="status">Status</label>
                                                    <div className="input-group mb-3">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text"><i className="fas fa-ban"></i></span>
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
    handleChange = (event) => this.setState({courseid: event.target.key, coursename:event.target.value});
}
export default UpdateQuestion;