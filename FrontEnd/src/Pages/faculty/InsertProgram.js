import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Navbar from '../../Components/Navbar1';
import Sidebar from '../../Components/Sidebar2';
import Footer from '../../Components/Footer4';
import service_manageprogram from "../../services/faculty/manageprogram_service";

class Home extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            programname:"",
            facultyid:""      
        }
    }
    componentDidMount(){
        if(sessionStorage.getItem("email")!=null){
            const facultyEmail={
                FacultyEmail:sessionStorage.getItem("email")
            }
            service_manageprogram
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
                                    <h1>Insert new program</h1>
                                </div>
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item"><Link to={"/dashboard"}>Home</Link></li>
                                        <li className="breadcrumb-item"><Link to={"/manageProgram"}>Manage program</Link></li>
                                        <li className="breadcrumb-item active">Insert program</li>
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
                                            <h3 className="card-title">Insert program</h3>
                                        </div>
                                        <br></br>
                                        <form role="form" onSubmit={this.onSubmit}>
                                            <div className="card-body" style={{paddingTop:'0px'}}>                                               
                                                <div className="form-group">
                                                    <label htmlFor="ProgramName">Program name</label>
                                                    <div className="input-group mb-3">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text"><i className="fas fa-book"></i></span>
                                                        </div>
                                                        <input 
                                                            type="text" 
                                                            className="form-control" 
                                                            id="programname" 
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
  
    onSubmit = (e)=>{
        e.preventDefault()
        const data={
            facultyid:this.state.facultyid,
            programname:this.state.programname,
        }
        service_manageprogram
            .addedProgram(data)
            .then((res) =>
            {
                this.props.history.push('/manageProgram');
            })
            .catch((e) => {
                alert("Some error occured Adding program "+e);
            });
    }
}
export default Home;