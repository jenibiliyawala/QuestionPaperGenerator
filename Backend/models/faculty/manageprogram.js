const db = require('../../util/database');

var item = {
    SelectedProgram(item,callback)
    {
        return db.query('SELECT * from tblprogram where ProgramID = ?', [item.ProgramID], callback);
    },
    getAllProgram(item, callback) {
       return db.query('SELECT p.*, f.FirstName, f.LastName FROM tblfaculty AS f JOIN tblprogram as p ON p.AddedByFacultyID=f.FacultyID', callback);
    },
    updateProgram(item,callback)
    {
        return db.query('UPDATE tblprogram SET ProgramName=?,Status=? WHERE ProgramID=? ',[item.programname,item.status,item.programid],callback);
    },
    insertProgram(item,callback)
    {
        return db.query('INSERT INTO tblprogram(ProgramName,AddedByFacultyID) VALUES (?,?) ',[item.programname,item.facultyid],callback);
    },
    getFacultyID(item,callback){
        return db.query('SELECT FacultyID FROM tblfaculty WHERE Email=?',[item.FacultyEmail],callback)
    }
};

module.exports = item;