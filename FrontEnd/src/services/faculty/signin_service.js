import http from "../../http-common";

class signIn {
  sin(data){
    return http.post("/signin",data);
  }
}

export default new signIn();