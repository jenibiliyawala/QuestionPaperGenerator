import http from "../../http-common";

class Profile {
  facultyDetail(data){
    return http.post("/profile",data);
  }
  updatedFaculty(data){
    return http.post("/profile/updateProfile",data);
  }
  uploadImage(data){
    return http.post("/profile/uploadImage", data);
  }
}

export default new Profile();