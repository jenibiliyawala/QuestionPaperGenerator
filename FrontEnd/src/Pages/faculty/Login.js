import React, {Component} from 'react';
import service_signin from "../../services/faculty/signin_service";

class Login extends Component{
    constructor(props)
    {
        super(props);
        if(sessionStorage.getItem("email")!=null){
            this.props.history.push('/dashboard');
        }
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
                                    <div className="input-group mb-3">
                                        <input 
                                            type="password" 
                                            className="form-control" 
                                            name="password"
                                            required
                                            v-model="pwd"
                                            maxLength="30"
                                            minLength="8"
                                            pattern="[a-zA-Z0-9_@$~.,()=+*^%#!\/?><-]*"
                                            title="Only Numbers,characters and (_@$~.,()=+*^%#!\/?><-) are allowed"
                                            placeholder="Password"
                                            onChange={this.onChange}
                                        />
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <span className="fas fa-lock"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-8">
                                            <div className="icheck-primary">
                                                <input 
                                                    type="checkbox" 
                                                    name="rememberme"
                                                    id="remember"
                                                    v-model="checkbox1"
                                                    value="yes"
                                                />
                                                <label htmlFor="remember">
                                                    Remember Me
                                                </label>
                                            </div>
                                        </div>
                                        {/* /.col */}
                                        <div className="col-4">
                                            <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                                        </div>
                                        {/* /.col */}
                                    </div>
                                </form>

                                <p className="mb-1">
                                    <a href="forgot-password.html">I forgot my password</a>
                                </p>
                                <p className="mb-0">
                                    <a href="register.html" className="text-center">Register a new membership</a>
                                </p>
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
            password:this.state.password
        }    
        service_signin
            .sin(data)
            .then((res) => {
                var resdata = res.data;
                if (resdata.result == -1) {
                    var elem = document.getElementById("errorButton");
                    elem.value="&nbsp;&nbsp;Invalid Username or Password..!";
                    elem.click();
                }
                else if (resdata.result == -2) {
                    var elem = document.getElementById("errorButton");
                    elem.value="&nbsp;&nbsp;Sorry, You were blocked..!";
                    elem.click();
                }
                else{
                    var elem = document.getElementById("successButton");
                    elem.value="&nbsp;&nbsp;Welcome "+this.state.email;
                    elem.click();
                    window.sessionStorage.setItem("email",this.state.email);
                    this.props.history.push('/dashboard');
                }
            })
            .catch((e) => {
                alert("Some error occured.");
            });
    }
}

export default Login;