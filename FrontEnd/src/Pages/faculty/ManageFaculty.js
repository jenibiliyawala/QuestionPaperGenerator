import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Navbar from '../../Components/Navbar1';
import Sidebar from '../../Components/Sidebar2';
import Footer from '../../Components/Footer4';
import service_managefaculty from "../../services/faculty/managefaculty_service";
import service_managecourse from "../../services/faculty/managecourse_service";

class ManageFaculty extends Component{
    constructor(props){
        super(props);
        this.state = {
            faculty:[],
            facultyid:"",
            facultyid_lemail:""
        }
    }
    //facultyid:this.props.match.params.FacultyID,
    componentDidMount(){  
        if(sessionStorage.getItem("email")!=null){ 

            const facultyEmail={
                FacultyEmail:sessionStorage.getItem("email")
            }
            service_managecourse
                .getFacultyID(facultyEmail)
                .then((res) => {
                    this.setState({
                        facultyid_lemail:res.data[0].FacultyID
                    });
                    console.log(res.data[0].FacultyID);
                })
            service_managefaculty
                .facultyDetail(null)
                .then((res) => {
                    this.setState({
                        faculty:res.data
                    });
                })
                .catch((e) => {
                    var elem = document.getElementById("errorButton");
                    elem.value="&nbsp;&nbsp;Some error occured getting faculty"+e;
                    elem.click();
                });
        }
    }
        onSubmit1 = (e) =>{
            e.preventDefault()
            const data={   
                facultyid:e.target.id,
                facultyid_lemail:this.state.facultyid_lemail
            }
           
        
        service_managefaculty
            .updateBlockbyfaculty(data)
            .then((res) =>
            {
                this.props.history.push('/dashboard');
            })
            .catch((e) => {
            });
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
                                    <h1>Manage Faculty &nbsp;&nbsp;&nbsp;<Link to={"/insertFaculty"}><button type="submit" className="btn btn-primary">Insert New</button></Link></h1>
                                </div>
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item"><Link to={"/dashboard"}>Home</Link></li>
                                        <li className="breadcrumb-item active">Manage Faculty</li>
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
                                                        <th>Faculty_ID</th>
                                                        <th>Email</th>
                                                        <th>First Name</th>
                                                        <th>Last Name</th>
                                                        <th>Profile_pic</th>
                                                        <th>Status</th>
                                                        <th>Block/Unblock</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {this.state.faculty.map(el => {
                                                        return (
                                                        <tr key={el.FacultyID}>
                                                            <td>{el.FacultyID}</td>
                                                            <td>{el.Email}</td>
                                                            <td>{el.FirstName}</td>
                                                            <td>{el.LastName}</td>
                                                            <td><img src={"http://localhost:8081/assets/images/Faculty/"+el.Image} height="50px" width="50px"></img></td>

                                                            <td>{el.Status==0?<span className='right badge badge-success'>Active</span>:<span className='right badge badge-danger'>Block</span>}</td>
                                                            <td><form role="form" onSubmit={this.onSubmit1}><button className={el.Status==1?"btn btn-block btn-success":"btn btn-block btn-danger"} id={el.FacultyID} onClick={this.onSubmit1} >{el.Status==1?"Unblock":"Block"}</button></form></td>
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



export default ManageFaculty;