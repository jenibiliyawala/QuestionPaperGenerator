const db = require('../../util/database');

var item = {
    getAllCourse(item, callback) {
        return db.query('SELECT c.*, f.FirstName, f.LastName, p.ProgramName FROM tblcourse AS c JOIN tblfaculty AS f JOIN tblprogram as p ON c.AddedByFacultyID=f.FacultyID AND c.ProgramID=p.ProgramID', callback);
    }
};

module.exports = item;