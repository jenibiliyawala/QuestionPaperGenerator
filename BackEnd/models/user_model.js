var db=require('../dbconnection');
var user={

    getUserByID:function(id,callback){
        return db.query("select * from user where uid=?",[id],callback);
    },
    getAllUser:function(callback){
        return db.query("select * from user",callback);
    },
    userLogin:function(item,callback){
        return db.query('select * from user where uid=? And uname=?',[item.uid,item.uname],callback);
    },
   
};


module.exports=user;