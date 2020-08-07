import http from "../../http-common";

class ManageQuestion {
  questionDetail(data){ //get all Questions
    return http.get("/manageQuestion",data);
  }
  selectedQuestionDetail(data){ //get selected question
    return http.post("/manageQuestion/SelectedQuestion",data);
  }
  updatedQuestion(data){ //update course
    return http.post("/manageQuestion/update",data);
  } 
  addedQuestion(data){ //insert question
    return http.post("/manageQuestion/insert",data);
  } 
  getallcourses(data){ //get all courses
    return http.post("/manageQuestion/getAllCourse",data);
  }
  getFacultyID(data){ //get one facultyid
    return http.post("/manageQuestion/getFacultyID",data);
  }
}

export default new ManageQuestion();