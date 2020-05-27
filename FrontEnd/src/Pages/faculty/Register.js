import React, {Component} from 'react';
class register extends Component{
    render(){
        return(
            <div style={{height:'100vh', backgroundImage:`url("Assets/dist/img/loginBackground.jpg")`, backgroundRepeat:'no-repeat', backgroundAttachment:'fixed', backgroundSize:'cover'}}>
                <div className="register-box" style={{margin:"auto", height:"100%"}}>
                    <div style={{ paddingTop:"20vh"}}>
                    <div className="login-logo">
                            <img src="Assets/dist/img/daiict.png" style={{ height:'3.2em',paddingBottom:'0.7em'}}/>
                            <a href="https://www.daiict.ac.in/"> <font style={{fontSize:'1.5em', fontWeight:'bold'}}>DAIICT</font></a>
                        </div>
                        {/* /.login-logo */}
                        <div className="card">
                            <div className="card-body register-card-body">
                                <p className="register-box-msg">Register a new membership</p>
                                <form action="../../index3.html" method="post">

                                <div className="input-group mb-3">
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            name="name"
                                            required
                                            placeholder="Full name"
                                            v-model="name"
                                        />
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <span className="fas fa-user"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="input-group mb-3">
                                        <input 
                                            type="email" 
                                            className="form-control" 
                                            name="email"
                                            required
                                            placeholder="Email"
                                            v-model="email"
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
                                            maxlength="30"
                                            minlength="8"
                                            pattern="[a-zA-Z0-9_@$~.,()=+*^%#!\/?><-]*"
                                            title="Only Numbers,characters and (_@$~.,()=+*^%#!\/?><-) are allowed"
                                            placeholder="Password"
                                        />
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <span className="fas fa-lock"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="input-group mb-3">
                                        <input 
                                            type="password" 
                                            className="form-control" 
                                            name="Retype password"
                                            required
                                            v-model="pwd"
                                            maxlength="30"
                                            minlength="8"
                                            pattern="[a-zA-Z0-9_@$~.,()=+*^%#!\/?><-]*"
                                            title="Only Numbers,characters and (_@$~.,()=+*^%#!\/?><-) are allowed"
                                            placeholder="Retype Password"
                                        />
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <span className="fas fa-sign-in-alt"></span>
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
                                            <button type="submit" className="btn btn-primary btn-block">Register</button>
                                        </div>
                                        {/* /.col */}
                                    </div>
                                </form>

                             
                                <p className="mb-0">
                                    <a href="login.html" className="text-center">I already have membership</a>
                                </p>
                            </div>
                            {/* /.register-card-body */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default register;