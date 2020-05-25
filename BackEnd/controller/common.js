const jwt = require('jsonwebtoken');


class Common{
    constructor(){

    }

    GenerateToken(data){
        return new Promise(async (resolve,reject)=>{
            try{
                const token = jwt.sign({exp:(Date.now()/1000)+1296000,data:data},'SenProject');
                resolve(token)
            }catch(err){
                reject(err)
            }
        })
    }
}

module.exports = Common;