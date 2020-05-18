import React, {Component} from 'react';

class Login extends Component{
    render(){
        return(
            <div style={{backgroundImage:"./Assets/dist/img/LoginBackground.jpg", width:"100%", height:"100vh" ,overflow:"auto"}}>
                <div className="login-box" style={{margin:"auto", height:"100%"}}>
                    <div style={{ verticalAlign:"middle"}}>
                        <div className="login-logo">
                            <a href="../../index2.html"><b>Admin</b>LTE</a>
                        </div>
                        {/* /.login-logo */}
                        <div className="card">
                            <div className="card-body login-card-body">
                                <p className="login-box-msg">Sign in to start your session</p>
                                <form action="../../index3.html" method="post">
                                    <div className="input-group mb-3">
                                        <input type="email" className="form-control" placeholder="Email"/>
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <span className="fas fa-envelope"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="input-group mb-3">
                                        <input type="password" className="form-control" placeholder="Password"/>
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <span className="fas fa-lock"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-8">
                                            <div className="icheck-primary">
                                                <input type="checkbox" id="remember"/>
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
    {/* 
                                <div className="social-auth-links text-center mb-3">
                                    <p>- OR -</p>
                                    <a href="#" className="btn btn-block btn-primary">
                                        <i className="fab fa-facebook mr-2"></i> Sign in using Facebook
                                    </a>
                                    <a href="#" className="btn btn-block btn-danger">
                                        <i className="fab fa-google-plus mr-2"></i> Sign in using Google+
                                    </a>
                                </div> */}
                                {/* /.social-auth-links  */}

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
}

export default Login;