import http from "../../http-common";

class GenerateQuestionPaper {
    getAllCourse(data){ //get all course
        return http.post("/GQPGetAllCourse",data);
    }
    getQuestions(data){ //get questions
        return http.post("/GQPGetQuestions",data);
    }
    selectedProgramDetail(data){ //get selected program
        // return http.post("/SelectedProgram",data);
    }
    updatedProgram(data){ //update program
        // return http.post("/manageProgram/update",data);
    } 
    addedProgram(data){ //insert program
        // return http.post("/manageProgram/insert",data);
    } 
    getFacultyID(data){ //get one facultyid
        // return http.post("/manageProgram/getFacultyID",data);
    }
}

export default new GenerateQuestionPaper();