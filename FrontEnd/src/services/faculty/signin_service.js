import http from "../../http-common";

class SignIn {
  sin(data){
    return http.post("/signin",data);
  }
}

export default new SignIn();