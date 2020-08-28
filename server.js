const express=require('express');
const server=express();
const bodyparser=require('body-parser');
const db=require('./database/dbConnection')

db

server.use(bodyparser.json());
server.use('*',require('./errors'));
server.use('/phonebook',require('./routes'));

server.get('/',(req,res)=>{
    res.json({message:`Welcome to phoneBook`,Loding:`loading ${req.method}`})
})


server.listen(process.env.PORT||9000)

