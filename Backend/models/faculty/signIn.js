const db = require('../../util/database');

var item = {
    isauth1(item, callback) {
        return db.query('select * from tblfaculty where Email = ? and BINARY Password = ? ', [item.email, item.password], callback);
    },
    ForgotPassword(item, callback){
        return db.query('select * from tblfaculty where Email=?',[item.email],callback);
    },
};

module.exports = item;