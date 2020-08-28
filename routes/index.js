const express=require('express');
const router=express.Router();
const phoneBookdb=require('../database/dbCollection');

module.exports=router.get('/',phoneBookdb).post('/',phoneBookdb).put('/:id',phoneBookdb).get('/:id',phoneBookdb).delete('/:id',phoneBookdb);