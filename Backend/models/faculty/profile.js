const db = require('../../util/database');

var item = {
    userDetail(item, callback) {
        return db.query('select FacultyID, FirstName, LastName, Image, ContactNo, Status from tblfaculty where Email = ?', [item.email], callback);
    }
};

module.exports = item;