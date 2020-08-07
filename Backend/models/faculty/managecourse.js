const db = require('../../util/database');

var item = {
    SelectedCourse(item,callback)
    {
        return db.query('SELECT c.*, p.ProgramName from tblcourse AS c JOIN tblprogram AS p ON c.ProgramID=p.ProgramID where CourseID = ?', [item.CourseID], callback);
    },
    getAllCourse(item, callback) {
       return db.query('SELECT c.*, f.FirstName, f.LastName,f.FacultyID, p.ProgramName FROM tblcourse AS c JOIN tblfaculty AS f JOIN tblprogram as p ON c.AddedByFacultyID=f.FacultyID AND c.ProgramID=p.ProgramID', callback);
    },
    updateCourse(item,callback)
    {
        return db.query('UPDATE tblcourse SET CourseCode =?,CourseName =?,ProgramID=?,Status=? WHERE CourseID=? ',[item.coursecode,item.coursename,item.programid,item.status,item.courseid],callback);
    },
    insertCourse(item,callback)
    {
        return db.query('INSERT INTO tblcourse(CourseCode,CourseName,ProgramID,AddedByFacultyID) VALUES (?,?,?,?) ',[item.coursecode,item.coursename,item.programid,item.facultyid],callback);     
    },
    getAllPrograms(item,callback)
    {
        return db.query('SELECT ProgramName, ProgramID FROM tblprogram',callback)
    },
    getFacultyID(item,callback){
        return db.query('SELECT FacultyID FROM tblfaculty WHERE Email=?',[item.FacultyEmail],callback)
    }
};

module.exports = item;