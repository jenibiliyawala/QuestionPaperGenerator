import http from "../../http-common";

class signIn {
  facultyDetail(data){
    return http.post("/profile",data);
  }
}

export default new signIn();