import http from "../../http-common";

class ManageCourse {
  courseDetail(data){
    return http.post("/manageCourse",data);
  }
}

export default new ManageCourse();