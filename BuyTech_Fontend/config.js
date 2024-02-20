const mysql = require('mysql');

const con = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: '',
    database: 'buy_tech',
});

con.connect((err) =>{
    if(err){
        console.warn("Couldn't connect to");
    }

})

module.exports = con;