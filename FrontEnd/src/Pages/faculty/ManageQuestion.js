import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Navbar from '../../Components/Navbar1';
import Sidebar from '../../Components/Sidebar2';
import Footer from '../../Components/Footer4';
import service_managequestion from "../../services/faculty/managequestion_service";

class ManageQuestion extends Component{
    constructor(props){
        super(props);
        this.state = {
            question:[],
        }
    }
   
    componentDidMount(){
        if(sessionStorage.getItem("email")!=null){
            service_managequestion
                .questionDetail(null)
                .then((res) => {
                    this.setState({
                        question:res.data
                    });
                })
                .catch((e) => {
                    var elem = document.getElementById("errorButton");
                    elem.value="&nbsp;&nbsp;Some error occured getting questions "+e;
                    elem.click();
                });
        }
    }

    render(){
        return(
            <div>
                <Navbar />
                <Sidebar />

                <button type="button" className="btn btn-danger swalDefaultError" value="&nbsp;&nbsp;Error" id="errorButton" style={{display:"none"}}></button>
                <button type="button" className="btn btn-success swalDefaultSuccess" value="&nbsp;&nbsp;Successfull" id="successButton" style={{display:"none"}}></button>
                <div className="content-wrapper">
                    <section className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1>Manage Question &nbsp;&nbsp;&nbsp;<Link to={"/insertQuestion"}><button type="submit" className="btn btn-primary">Insert New</button></Link></h1>
                                </div>
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item"><Link to={"/dashboard"}>Home</Link></li>
                                        <li className="breadcrumb-item active">Manage Question</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                    <div className="card">
                                        <div className="card-body table-responsive p-0" style={{height:"550px"}}>
                                            <table className="table table-head-fixed text-nowrap table-hover">
                                                <thead>
                                                    <tr>
                                                        <th>Course code</th>
                                                        <th>Course name</th>
                                                        <th>Question</th>
                                                        <th>Mark</th>
                                                        <th>Level</th>
                                                        <th>Added By</th>
                                                        <th>Status</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {this.state.question.map(el => {
                                                        return (
                                                        <tr key={el.QuestionID}>
                                                            <td>{el.CourseCode}</td>
                                                            <td>{el.CourseName}</td>
                                                            <td>{el.Question.substring(0,20)}</td>
                                                            <td>{el.Mark}</td>
                                                            <td>{el.Level==1?<span className='right badge badge-success'>Easy</span>:el.Level==2?<span className='right badge badge-warning'>Medium</span>:<span className='right badge badge-danger'>Hard</span>}</td>
                                                            <td>{el.FirstName} {el.LastName}</td>
                                                            <td>{el.Status==0?<span className='right badge badge-success'>Active</span>:<span className='right badge badge-danger'>Block</span>}</td>
                                                            <td><Link to={"/updateQuestion/"+el.QuestionID}><i className="fas fa-edit"></i></Link></td>
                                                        </tr>
                                                        );
                                                    })}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                
                <Footer/>
            </div>
        )
    }
}


export default ManageQuestion;