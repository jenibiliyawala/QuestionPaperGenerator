const db = require('../../util/database');

var item = {
    userDetail(item, callback) {
        return db.query('select FacultyID, FirstName, LastName, Image, ContactNo, Status from tblfaculty where Email = ?', [item.email], callback);
    },
    updateProfile(item, callback){
        return db.query('update tblfaculty set FirstName=?,LastName=?,ContactNo=?,Image=? where Email=? and Password=?',[item.firstname,item.lastname,item.contactno,item.filename,item.email,item.password],callback);
    },
    getPassword(item, callback){
        return db.query('select FacultyID, Password FROM tblfaculty where Email=?',[item.email],callback);
    },
    changePassword(item, callback){
        return db.query('update tblfaculty set Password=? where FacultyID=?',[item.password,item.facultyid],callback);
    },
};

module.exports = item;