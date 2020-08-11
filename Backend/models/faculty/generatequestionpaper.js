const db = require('../../util/database');

var item = {
    GetAllCourses(item,callback){
        return db.query('SELECT * from tblcourse', callback);
    },
    GetQuestions(item,callback){
        return db.query('SELECT Mark, count(*) AS Questions FROM tblquestion WHERE Level=? AND CourseID=? GROUP BY Mark', [item.level,item.courseid], callback);
        // return db.query('SELECT count(*) AS Total from tblcourse', callback);
    },
    CountOfFaculty(item,callback){
        // return db.query('SELECT count(*) AS Total from tblfaculty', callback);
    },
    CountOfQuestion(item,callback){
        // return db.query('SELECT count(*) AS Total from tblquestion', callback);
    }
};

module.exports = item;