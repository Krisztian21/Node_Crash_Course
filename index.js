const http = require('http');
const path=require('path');
const fs=require('fs');

const server=http.createServer((req, res)=>{
    console.log(req, url)
    res.write('Hello world!');
    res.end();
});

const PORT=process.env.port||5000;

server.listen(PORT, ()=>console.log('A szerverünk működik.......'));
