import http from "../../http-common";

class ManageCourse {
  courseDetail(data){
    return http.get("/manageCourse",data);
  }
}

export default new ManageCourse();