import React, {Component} from 'react';
// import {Link} from "react-router-dom";
import service_signin from "../../services/faculty/signin_service";

class Login extends Component{

    constructor(props)
    {
        super(props);
        this.state={
            email:'',
            password:''
        };
    }

    render(){
        return(
            <div style={{height:'100vh', backgroundImage:`url("Assets/dist/img/LoginBackground.jpg")`, backgroundRepeat:'no-repeat', backgroundAttachment:'fixed', backgroundSize:'cover'}}>
                <button type="button" className="btn btn-danger swalDefaultError" value="&nbsp;&nbsp;Error" id="errorButton" style={{display:"none"}}></button>
                <button type="button" className="btn btn-success swalDefaultSuccess" value="&nbsp;&nbsp;Successfull" id="successButton" style={{display:"none"}}></button>
                <div className="login-box" style={{margin:"auto", height:"100%"}}>
                    <div style={{ paddingTop:"20vh"}}>
                        <div className="login-logo">
                            <img src="Assets/dist/img/daiict.png" style={{ height:'3.2em',paddingBottom:'0.7em'}}/>
                            <a href="https://www.daiict.ac.in/"> <font style={{fontSize:'1.5em', fontWeight:'bold'}}>DAIICT</font></a>
                        </div>
                        {/* /.login-logo */}
                        <div className="card">
                            <div className="card-body login-card-body">
                                <p className="login-box-msg">Sign in to start your session</p>
                                <form onSubmit={this.onSubmit} method="post">
                                    <div className="input-group mb-3">
                                        <input 
                                            type="email" 
                                            className="form-control" 
                                            name="email"
                                            required
                                            placeholder="Email"
                                            v-model="email"
                                            onChange={this.onChange}
                                        />
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <span className="fas fa-envelope"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        {/* /.col */}
                                        <div className="col-6">
                                            <button type="submit" className="btn btn-primary btn-block">Get password</button>
                                        </div>
                                        {/* /.col */}
                                    </div>
                                </form>
                            </div>
                            {/* /.login-card-body */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    //set value from input form
    onChange = (e)=>{
        this.setState({[e.target.name] : e.target.value})
    }

    onSubmit = (e)=>{
        e.preventDefault()
        const data={
            email: this.state.email,
           // password:this.state.password
        }  
        service_signin
            .forgot(data)
            .then((res)=>{  
                var resdata = res.data;
                if (resdata.result == -1) {
                    var elem = document.getElementById("errorButton");
                    elem.value="&nbsp;&nbsp;Error occured or email doesnot exist..!";
                    elem.click();
                }
                else if (resdata.result == 1) {
                    var elem = document.getElementById("successButton");
                    elem.value="&nbsp;&nbsp;Mail sent successfully..!";
                    elem.click();
                    this.props.history.push('/login');
                }
            })
            .catch((e) => {
                var elem = document.getElementById("successButton");
                elem.value="&nbsp;&nbsp;Some error occured during the mail transfer..!";
                elem.click();
            });
    }
}

export default Login;