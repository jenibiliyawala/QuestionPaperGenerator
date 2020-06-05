const db = require('../../util/database');

var item = {
    userDetail(item, callback) {
        return db.query('select FacultyID, FirstName, LastName, Image, ContactNo, Status from tblfaculty where Email = ?', [item.email], callback);
    },
    UpdateProfile(item,filename,callback){
        //console.log(filename);
        return db.query('update tblfaculty set FirstName=?,LastName=?,ContactNo=?,Image=? where Email=? and Password=?',[item.firstname,item.lastname,item.contactno,filename,item.email,item.password],callback);
    }
};

module.exports = item;