import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Navbar from '../../Components/Navbar1';
import Sidebar from '../../Components/Sidebar2';
import Footer from '../../Components/Footer4';
import service_manageprogram from "../../services/faculty/manageprogram_service";

class UpdateProgram extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            programid:"",
            programname:"",
            status:"" ,
        }
    }

    //getting Program detail
    componentDidMount(){        
        if(sessionStorage.getItem("email")!=null){   
            const data={  
                ProgramID:this.props.match.params.ProgramID
            }
            service_manageprogram.selectedProgramDetail(data)
                .then((res) => {
                    this.setState({
                        programname:res.data[0].ProgramName,
                        programid:res.data[0].ProgramID,
                        status:res.data[0].Status
                    });
                })
                .catch((e) => {
                    // var elem = document.getElementById("errorButton");
                    // elem.value="&nbsp;&nbsp;Some error occured getting program details"+e;
                    // elem.click();
                });
        }
    }
    
    onSubmit = (e)=>{
        e.preventDefault()
        const data={
            programname:this.state.programname,
            status:this.state.status,
            programid:this.props.match.params.ProgramID,
        }
        service_manageprogram
            .updatedProgram(data)
            .then((res) =>
            {
                this.props.history.push('/manageProgram');
                // var elem = document.getElementById("successButton");
                // elem.value="&nbsp;&nbsp;program updated successfully";
                // elem.click();
            })
            .catch((e) => {
                // var elem = document.getElementById("errorButton");
                // elem.value="&nbsp;&nbsp;Some error occured updating program"+e;
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
                                    <h1>Update program</h1>
                                </div>
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item"><Link to={"/dashboard"}>Home</Link></li>
                                        <li className="breadcrumb-item"><Link to={"/manageProgram"}>Manage program</Link></li>
                                        <li className="breadcrumb-item active">Update program</li>
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
                                            <h3 className="card-title">Program Details</h3>
                                        </div>
                                        <br></br>
                                        <form role="form" onSubmit={this.onSubmit}>
                                            <div className="card-body" style={{paddingTop:'0px'}}>
                                                <div className="form-group">
                                                    <label htmlFor="ProgramName">Program name</label>
                                                    <div className="input-group mb-3">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text"><i className="fas fa-user"></i></span>
                                                        </div>
                                                        <input 
                                                            type="text"
                                                            className="form-control" 
                                                            id="ProgramName" 
                                                            name="programname" 
                                                            required
                                                            minLength="2"
                                                            maxLength="100"
                                                            title="Enter valid program name"
                                                            placeholder="Enter program name"
                                                            defaultValue={this.state.programname || ''} 
                                                            onChange={this.onChange.bind(this)}
                                                        />
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
export default UpdateProgram;