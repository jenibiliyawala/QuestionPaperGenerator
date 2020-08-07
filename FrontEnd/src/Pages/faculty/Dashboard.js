import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Navbar from '../../Components/Navbar1';
import Sidebar from '../../Components/Sidebar2';
import Footer from '../../Components/Footer4';
import service_dashboard from "../../services/faculty/dashboard_service";

class Dashboard extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            CountOfProgram:"",
            CountOfCourse:"",
            CountOfFaculty:"",
            CountOfQuestion:"",
        }
    }

    componentDidMount(){
        if(sessionStorage.getItem("email")!=null){
            service_dashboard
                .getCountOfProgram(null)
                .then((res) => {
                    this.setState({
                        CountOfProgram:res.data[0].Total
                    });
                })
            service_dashboard
                .getCountOfCourse(null)
                .then((res) => {
                    this.setState({
                        CountOfCourse:res.data[0].Total
                    });
                })
            service_dashboard
                .getCountOfFaculty(null)
                .then((res) => {
                    this.setState({
                        CountOfFaculty:res.data[0].Total
                    });
                })
            service_dashboard
                .getCountOfQuestion(null)
                .then((res) => {
                    this.setState({
                        CountOfQuestion:res.data[0].Total
                    });
                })
        } 
    }

    render(){
        return (
            <div>
                <Navbar />
                <Sidebar />
                
                <div className="content-wrapper">
                    <section className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1>Dashboard</h1>
                                </div>
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item"><Link to={"/dashboard"}>Home</Link></li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-3 col-6">
                                    <div className="small-box bg-info">
                                        <div className="inner">
                                            <h3>{this.state.CountOfProgram || ''}</h3>
                                            <p>Program</p>
                                        </div>
                                        <div className="icon">
                                            <i className="ion ion-bag"></i>
                                        </div>
                                        <a href="/manageProgram" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-6">
                                    <div className="small-box bg-success">
                                        <div className="inner">
                                            <h3>{this.state.CountOfCourse || ''}</h3>
                                            <p>Courses</p>
                                        </div>
                                        <div className="icon">
                                            <i className="ion ion-stats-bars"></i>
                                        </div>
                                        <a href="/manageCourse" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-6">
                                    <div className="small-box bg-warning">
                                        <div className="inner">
                                            <h3>{this.state.CountOfFaculty || ''}</h3>
                                            <p>Faculty Registrations</p>
                                        </div>
                                        <div className="icon">
                                            <i className="ion ion-person-add"></i>
                                        </div>
                                        <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-6">
                                    <div className="small-box bg-danger">
                                        <div className="inner">
                                            <h3>{this.state.CountOfQuestion || ''}</h3>
                                            <p>Total Questions</p>
                                        </div>
                                        <div className="icon">
                                            <i className="ion ion-pie-graph"></i>
                                        </div>
                                        <a href="/manageQuestion" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-12" style={{paddingBottom:"15px"}}>
                                    <div className="timeline-body">
                                        <div className="embed-responsive embed-responsive-16by9">
                                            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/FXU6fXl5Wj8" frameBorder="0" allowFullScreen=""></iframe>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-12" style={{paddingBottom:"15px"}}>
                                    <div className="timeline-body">
                                        <div className="embed-responsive embed-responsive-16by9">
                                            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/G3YSjoPy0XA" frameBorder="0" allowFullScreen=""></iframe>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-12">
                                    <div className="timeline-body">
                                        <div className="embed-responsive embed-responsive-16by9">
                                            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/7GKDnEeaUE4" frameBorder="0" allowFullScreen=""></iframe>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-12">
                                    <div className="timeline-body">
                                        <div className="embed-responsive embed-responsive-16by9">
                                            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/wXqhct2P__k" frameBorder="0" allowFullScreen=""></iframe>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-12">
                                    <div className="timeline-body">
                                        <div className="embed-responsive embed-responsive-16by9">
                                            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/tVPn5Uw1U10" frameBorder="0" allowFullScreen=""></iframe>
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
}
export default Dashboard;