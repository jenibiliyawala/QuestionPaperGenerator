import http from "../../http-common";

class Print {
    getQuestions(data){
    return http.post("/print/getQuestion",data);
  }
  updatedFaculty(data){
    // return http.post("/profile/updateProfile",data);
  }
  uploadImage(data){
    // return http.post("/profile/uploadImage", data);
  }
}

export default new Print();