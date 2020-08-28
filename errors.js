const express=require('express');
const errorHandler=express();

errorHandler.use((req,res,next)=>{
next()
})

module.exports=errorHandler