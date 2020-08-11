const db = require('../../util/database');

var item = {
    
    getAllFaculty(item, callback) {
       return db.query('SELECT * FROM tblfaculty', callback);
    },
    insertFaculty(item, callback){
        return db.query('INSERT INTO tblfaculty(Email,FirstName,LastName,Password,Image,ContactNo) VALUES (?,?,?,?,?,?) ',[item.email,item.firstname,item.lastname,item.password,item.filename,item.contactno],callback);
    },
  /*  updateFacultyStatus(item,callback)
    {
        return db.query('UPDATE tblfaculty SET Status=(Status+1)%2 WHERE FacultyID=? ',[item.facultyid],callback);
    },*/
    blockedbyfaculty(item,callback)
    {
        return db.query('UPDATE tblfaculty SET Status=(Status+1)%2, BlockedByFacultyID=? WHERE FacultyID=? ',[item.facultyid_lemail,item.facultyid],callback);
    }
  
}
module.exports = item;