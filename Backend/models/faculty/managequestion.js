const db = require('../../util/database');

var item = {
    SelectedQuestion(item,callback){
        return db.query('SELECT * from tblquestion where QuestionID = ?', [item.QuestionID], callback);
    },
    getAllQuestion(item, callback) {
       return db.query('SELECT q.*, f.FirstName, f.LastName, c.CourseCode, c.CourseName FROM tblquestion AS q JOIN tblfaculty AS f JOIN tblcourse AS c ON q.AddedByFacultyID=f.FacultyID AND q.CourseID=c.CourseID', callback);
    },
    updateQuestion(item,callback){
        return db.query('UPDATE tblquestion SET CourseID =?, Question =?, Mark=?, Level=?, Status=? WHERE QuestionID=? ',[item.courseid,item.question,item.mark,item.level,item.status,item.questionid],callback);
    },
    insertQuestion(item,callback){
        return db.query('INSERT INTO tblquestion(CourseID, Question, Mark, Level, AddedByFacultyID) VALUES (?,?,?,?,?) ',[item.courseid,item.question,item.mark,item.level,item.facultyid],callback);
    },
    getAllCourses(item,callback){
        return db.query('SELECT CourseID, CourseCode, CourseName FROM tblcourse',callback)
    },
    getFacultyID(item,callback){
        return db.query('SELECT FacultyID FROM tblfaculty WHERE Email=?',[item.FacultyEmail],callback)
    }
};

module.exports = item;