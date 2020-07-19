import http from "../../http-common";

class ManageCourse {
  courseDetail(data){ //get all course
    return http.get("/manageCourse",data);
  }
  selectedCourseDetail(data){ //get selected course
    return http.post("/SelectedCourse",data);
  }
  updatedcourse(data){ //update course
    return http.post("/manageCourse/update",data);
  } 
  addedcourse(data){ //insert course
    return http.post("/manageCourse/insert",data);
  } 
  getallprograms(data){ //get all programs
    return http.post("/getAllProgram",data);
  }
  getFacultyID(data){ //get one facultyid
    return http.post("/manageCourse/getFacultyID",data);
  }
}

export default new ManageCourse();