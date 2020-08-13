import React, {Component} from 'react';
import Cookies from 'js-cookie';
import {Link} from "react-router-dom";
import Navbar from '../../Components/Navbar1';
import Sidebar from '../../Components/Sidebar2';
import Footer from '../../Components/Footer4';
import service_generatequestionpaper from "../../services/faculty/generatequestionpaper_service";

class GenerateQuestionPaper extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            allcourses:[],
            courseid:"1",
            level:"2",
            totalmark:"10",
            total:"0",
            date:"",
            duration:"",
            otherinstruction:"",
            question:[],
            noofquestions:[],
        }
    }
    componentDidMount(){
        if(sessionStorage.getItem("email")!=null){
            service_generatequestionpaper
                .getAllCourse(null)
                .then((res) => {
                    this.setState({
                        allcourses:res.data
                    });
                })
        } 
    }
    
    buildOptions(len) {
        var arr = [];
        for (let i = 0; i <= len; i++) {
            arr.push(<option key={i} value={i}>{i}</option>)
        }
        return arr; 
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
                                    <h1>Generate Question Paper</h1>
                                </div>
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item"><Link to={"/dashboard"}>Home</Link></li>
                                        <li className="breadcrumb-item active">Generate question paper</li>
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
                                            <h3 className="card-title">Insert details of paper</h3>
                                        </div>
                                        <br></br>
                                        <form role="form" onSubmit={this.getAllQuestions}>
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
                                                            // value={this.state.courseid || ''}
                                                            onChange={this.onChange.bind(this)}
                                                            defaultValue={this.state.courseid || ''}
                                                            className="form-control"  >
                                                                {this.state.allcourses.map(iteratorvariable => {
                                                                    return (<option key={iteratorvariable.CourseID} value={iteratorvariable.CourseID}>{iteratorvariable.CourseCode} - {iteratorvariable.CourseName}</option>) })}
                                                        </select>
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
                                                    <label htmlFor="totalmark">Total marks</label>
                                                    <div className="input-group mb-3">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text"><i className="fas fa-marker"></i></span>
                                                        </div>
                                                        <input 
                                                            type="text" 
                                                            className="form-control" 
                                                            id="totalMarks" 
                                                            name="totalmark" 
                                                            // required
                                                            // pattern="[0-9]"
                                                            minLength="1"
                                                            maxLength="3"
                                                            title="Enter valid marks"
                                                            placeholder="Enter total marks"
                                                            defaultValue={this.state.totalmark || ''} 
                                                            onChange={this.onChange.bind(this)}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="form-group"> 
                                                    <label htmlFor="date">Date</label>
                                                    <div className="input-group mb-3">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text"><i className="fas fa-calendar-alt"></i></span>
                                                        </div>
                                                        <input 
                                                            type="text" 
                                                            className="form-control" 
                                                            id="Date" 
                                                            name="date" 
                                                            // required
                                                            maxLength="50"
                                                            title="Enter date"
                                                            placeholder="Enter date"
                                                            defaultValue={this.state.date || ''} 
                                                            onChange={this.onChange.bind(this)}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="form-group"> 
                                                    <label htmlFor="duration">Duration</label>
                                                    <div className="input-group mb-3">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text"><i className="fas fa-clock"></i></span>
                                                        </div>
                                                        <input 
                                                            type="text" 
                                                            className="form-control" 
                                                            id="Duration" 
                                                            name="duration" 
                                                            // required
                                                            maxLength="50"
                                                            title="Enter valid duration"
                                                            placeholder="Enter duration"
                                                            defaultValue={this.state.duration || ''} 
                                                            onChange={this.onChange.bind(this)}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="form-group"> 
                                                    <label htmlFor="otherinstruction">Other instruction</label>
                                                    <div className="input-group mb-3">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text"><i className="fas fa-info"></i></span>
                                                        </div>
                                                        <textarea 
                                                            className="form-control" 
                                                            id="OtherInstruction" 
                                                            name="otherinstruction" 
                                                            rows="3" 
                                                            maxLength="200"
                                                            title="Enter valid other instruction"
                                                            placeholder="Enter other instruction"
                                                            defaultValue={this.state.otherinstruction || ''} 
                                                            onChange={this.onChange.bind(this)}
                                                        ></textarea>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="card-footer">
                                                <button type="submit" className="btn btn-primary">Get questions</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                
                                <div className="col-md-10 offset-md-1 " >
                                    <div style={{display:this.state.question.length==0?'none':''}}>
                                        <div className="card card-primary">
                                            <div className="card-header">
                                                <h3 className="card-title">You have following number of question in {this.state.level==1?"easy":this.state.level==2?"medium":"hard"} level of above selected course</h3>
                                            </div>
                                            <br></br>
                                            <form role="form" onSubmit={this.onSubmit}>
                                                <div className="card-body" style={{paddingTop:'0px'}}>

                                                    <div className="card">
                                                        <div className="card-body table-responsive p-0" >
                                                            <table className="table table-head-fixed text-nowrap table-hover">
                                                                <thead>
                                                                    <tr>
                                                                        <th>Marks</th>
                                                                        <th>No. of questions available</th>
                                                                        <th>Total {this.state.total}/{this.state.totalmark}</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {this.state.question.map(el => {
                                                                        return (
                                                                        <tr key={el.Mark}>
                                                                            <td>{el.Mark}</td>
                                                                            <td>{el.Questions}</td>
                                                                            <td>
                                                                                <select
                                                                                    onChange={this.handleChange} 
                                                                                    name={el.Mark}
                                                                                    id={el.Mark}
                                                                                    onChange={this.onChangeQuestions.bind(this)}
                                                                                    className="form-control"  
                                                                                >
                                                                                    {this.buildOptions(el.Questions)}
                                                                                </select>
                                                                            </td>
                                                                        </tr>
                                                                        );
                                                                    })}
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="card-footer">
                                                    <div style={{display:this.state.total==this.state.totalmark?'':'none'}}>
                                                        <button type="submit" className="btn btn-primary">Generate Question Paper</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
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
    
    updateItem(Mark, itemAttributes) { 
        var index = this.state.noofquestions.findIndex(x=> x.Mark == Mark);
        this.setState({
            noofquestions: [
            ...this.state.noofquestions.slice(0,index),
            Object.assign({}, this.state.noofquestions[index], itemAttributes),
            ...this.state.noofquestions.slice(index+1)
            ]
        });
    }

    onChangeQuestions = async (e) => { 
        await this.updateItem(e.target.name, {Questions: e.target.value});
        this.countTotalMarks();
    };
    
    buildArray() { //build array of questions taken
        var arr = [];
        this.state.question.map((item) => {
            arr.push(item);
        })
        return arr; 
    }

    setZero(){ //set initial value of selected questions
        this.state.noofquestions.forEach(element => {
            this.updateItem(element.Mark, {Questions: "0"});
        });
    }

    getAllQuestions = (e)=>{
        e.preventDefault()
        const data={
            courseid:this.state.courseid,
            level:this.state.level,
        }
        service_generatequestionpaper
            .getQuestions(data)
            .then((res) =>
            {
                this.setState({
                    question:res.data
                });

                this.setState({
                    noofquestions:this.buildArray()
                });

                this.setZero();

                var elem = document.getElementById("successButton");
                elem.value="&nbsp;&nbsp;Qustions got successfully..!";
                elem.click();
            })
            .catch((e) => {
                var elem = document.getElementById("errorButton");
                elem.value="&nbsp;&nbsp;Problem getting questions..!";
                elem.click();
            });
    }
    
    countTotalMarks(){
        let temp=0;
        this.state.noofquestions.forEach(element => {
            temp+=(element.Mark*element.Questions);
        });
        this.setState({
            total:temp
        });
    }

    onSubmit = (e)=>{
        e.preventDefault()
        const data={
            facultyid:this.state.facultyid,
            programname:this.state.programname,
        }
            
        Cookies.remove('courseid');
        Cookies.remove('level');
        Cookies.remove('total');
        Cookies.remove('date');
        Cookies.remove('duration');
        Cookies.remove('otherinstruction');
        
        for(let i=0;i<10;i++){
            Cookies.remove('Mark'+i);
            Cookies.remove('NoOfQuestions'+i);
        }

        Cookies.set('courseid',this.state.courseid);
        Cookies.set('level',this.state.level);
        Cookies.set('total',this.state.total);
        Cookies.set('date',this.state.date);
        Cookies.set('duration',this.state.duration);
        Cookies.set('otherinstruction',this.state.otherinstruction);
        
        let count=0;
        this.state.noofquestions.forEach(element => {
            Cookies.set('Mark'+count,element.Mark);
            Cookies.set('NoOfQuestions'+count,element.Questions);
            count++;        
        });
        
        this.props.history.push('/Print');
    }
}
export default GenerateQuestionPaper;