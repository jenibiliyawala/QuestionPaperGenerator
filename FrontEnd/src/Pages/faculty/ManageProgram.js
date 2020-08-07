import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Navbar from '../../Components/Navbar1';
import Sidebar from '../../Components/Sidebar2';
import Footer from '../../Components/Footer4';
import service_manageprogram from "../../services/faculty/manageprogram_service";

class ManageProgram extends Component{
    constructor(props){
        super(props);
        this.state = {
            program:[],
        }
    }
   
    componentDidMount(){
        if(sessionStorage.getItem("email")!=null){
            service_manageprogram
                .programDetail(null)
                .then((res) => {
                    this.setState({
                        program:res.data
                    });
                })
                .catch((e) => {
                    var elem = document.getElementById("errorButton");
                    elem.value="&nbsp;&nbsp;Some error occured getting programs"+e;
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
                                    <h1>Manage Program &nbsp;&nbsp;&nbsp;<Link to={"/insertProgram"}><button type="submit" className="btn btn-primary">Insert New</button></Link></h1>
                                </div>
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item"><Link to={"/dashboard"}>Home</Link></li>
                                        <li className="breadcrumb-item active">Manage Program</li>
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
                                                        <th>Program Name</th>
                                                        <th>Added By</th>
                                                        <th>Status</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {this.state.program.map(el => {
                                                        return (
                                                        <tr key={el.ProgramID}>
                                                            <td>{el.ProgramName}</td>
                                                            <td>{el.FirstName} {el.LastName}</td>
                                                            <td>{el.Status==0?<span className='right badge badge-success'>Active</span>:<span className='right badge badge-danger'>Block</span>}</td>
                                                            <td><Link to={"/updateProgram/"+el.ProgramID}><i className="fas fa-edit"></i></Link></td>
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


export default ManageProgram;