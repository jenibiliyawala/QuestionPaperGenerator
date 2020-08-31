import http from "../../http-common";

class SignIn {
  sin(data){
    return http.post("/signin",data);
  }
  forgot(data)
  {
    return http.post("/ForgotPassword",data);
  }
}

export default new SignIn();