import http from "../../http-common";

class ManageFaculty {
  facultyDetail(data){ //get all program
    return http.get("/manageFaculty",data);
  }
  addedFaculty(data){ //insert faculty
    return http.post("/manageFaculty/insert",data);
  }
  uploadImage(data){ //upload the image
    return http.post("/manageFaculty/uploadImage", data);
  } 
  updatedFaculty(data){ //update faculty
    return http.post("/manageFaculty/update",data);
  } 
  updateBlockbyfaculty(data)
  {
    return http.post("/manageFaculty/blockbyfaculty",data);
  }
}
export default new ManageFaculty();