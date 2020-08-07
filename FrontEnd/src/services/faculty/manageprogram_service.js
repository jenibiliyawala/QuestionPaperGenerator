import http from "../../http-common";

class ManageProgram {
  programDetail(data){ //get all program
    return http.get("/manageProgram",data);
  }
  selectedProgramDetail(data){ //get selected program
    return http.post("/SelectedProgram",data);
  }
  updatedProgram(data){ //update program
    return http.post("/manageProgram/update",data);
  } 
  addedProgram(data){ //insert program
    return http.post("/manageProgram/insert",data);
  } 
  getFacultyID(data){ //get one facultyid
    return http.post("/manageProgram/getFacultyID",data);
  }
}

export default new ManageProgram();