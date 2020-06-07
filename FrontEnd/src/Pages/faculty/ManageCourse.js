import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Navbar from '../../Components/Navbar1';
import Sidebar from '../../Components/Sidebar2';
import Footer from '../../Components/Footer4';
import service_managecourse from "../../services/faculty/managecourse_service";

class ManageCourse extends Component{
    constructor(props){
        super(props);
        this.state = {
            course:[],
        }
    }
   
    componentDidMount(){
        if(sessionStorage.getItem("email")!=null){
            service_managecourse
                .courseDetail(null)
                .then((res) => {
                    this.setState({
                        course:res.data
                    });
                })
                .catch((e) => {
                    var elem = document.getElementById("errorButton");
                    elem.value="&nbsp;&nbsp;Some error occured getting courses"+e;
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
                                    <h1>Manage Course</h1>
                                </div>
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item"><Link to={"/home"}>Home</Link></li>
                                        <li className="breadcrumb-item active">Manage Course</li>
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
                                                        <th>Course Code</th>
                                                        <th>Course Name</th>
                                                        <th>Added By</th>
                                                        <th>Program Name</th>
                                                        <th>Status</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {this.state.course.map(el => {
                                                        return (
                                                        <tr key={el.CourseID}>
                                                            <td>{el.CourseCode}</td>
                                                            <td>{el.CourseName}</td>
                                                            <td>{el.FirstName} {el.LastName}</td>
                                                            <td>{el.ProgramName}</td>
                                                            <td>{el.Status==0?<span className='right badge badge-success'>Active</span>:<span className='right badge badge-danger'>Block</span>}</td>
                                                            <td><Link to={"/manageCourse/update/"+el.CourseID}><i class="fas fa-edit"></i></Link></td>
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

export default ManageCourse;