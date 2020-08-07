const db = require('../../util/database');

var item = {
    CountOfProgram(item,callback){
        return db.query('SELECT count(*) AS Total from tblprogram', callback);
    },
    CountOfCourse(item,callback){
        return db.query('SELECT count(*) AS Total from tblcourse', callback);
    },
    CountOfFaculty(item,callback){
        return db.query('SELECT count(*) AS Total from tblfaculty', callback);
    },
    CountOfQuestion(item,callback){
        return db.query('SELECT count(*) AS Total from tblquestion', callback);
    }
};

module.exports = item;