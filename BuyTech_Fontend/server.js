const express = require('express');
const path = require('path');
const fs = require('fs');
const con = require('./config');
const app = express();

const PORT = process.env.PORT || 3000


app.get('/', (req, res) => {
    con.query("SELECT name FROM users WHERE id = '10'", (err, data) => {
        // if(err){
        //     return console.log(err);
        //     }
        //     res.send(data);
       
        let kk = data;
        // console.log ('mohiy',kk);
     const filePath = path.resolve(__dirname,"./build", "index.html");
     fs.readFile(filePath, "utf8", (err,data) =>{

        if(err){
        return console.log(err);
        }
        let kk2 = kk[0];
            console.log(kk2.name);
        data = data
        .replace(/__TITLE__/g, 'yegnesshh')
        .replace(/__DESCRIPTION__/g, "HOME MOHIT");
        res.send(data);
    });
});
});

app.get('/about', (req, res) => {
    const filePath = path.resolve(__dirname,"./build", "index.html");
    fs.readFile(filePath, "utf8", (err,data) =>{
        if(err){
        return console.log(err);
        }

        data = data
        .replace(/__TITLE__/g, "about gohel")
        .replace(/__DESCRIPTION__/g, "ABOUT MOHIT");
        res.send(data);
    });
});

app.use(express.static(path.resolve(__dirname,"./build")))

app.listen(PORT,() =>{
console.log(`Server Is listening on port ${PORT}`);
});