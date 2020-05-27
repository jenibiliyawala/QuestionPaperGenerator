const mysql = require('mysql2');

const pool = mysql.createPool({

    host: 'localhost',
    user: 'root',
    database: 'questionpaper',
    password: ''

});

module.exports = pool;


