import http from "../../http-common";

class Dashboard {
    getCountOfProgram(data){
        return http.post("/dashboard/getCountOfProgram",data);
    }
    getCountOfCourse(data){
        return http.post("/dashboard/getCountOfCourse",data);
    }
    getCountOfFaculty(data){
        return http.post("/dashboard/getCountOfFaculty",data);
    }
    getCountOfQuestion(data){
        return http.post("/dashboard/getCountOfQuestion",data);
    }
}

export default new Dashboard();