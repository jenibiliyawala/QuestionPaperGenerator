const db = require('../../util/database');

var item = {
    GetAllCourses(item,callback){
        return db.query('SELECT * from tblcourse WHERE Status="0"', callback);
    },
    GetQuestions(item,callback){
        return db.query('SELECT Mark, count(*) AS Questions FROM tblquestion WHERE Level=? AND CourseID=? AND Status="0" GROUP BY Mark', [item.level,item.courseid], callback);
    },
    printGetQuestions(item,callback){
        return db.query('SELECT Question, Mark FROM tblquestion WHERE Level=? AND CourseID=? AND Mark=? AND Status="0" ORDER BY RAND() LIMIT '+item.questions, [item.level,item.courseid,item.mark], callback);
    },
};

module.exports = item;