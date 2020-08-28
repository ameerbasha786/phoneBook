const mongoose=require('mongoose');
const db=require('./config.json');

const dbconnect=mongoose.connect(db.dburi,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
},async (err)=>{
    
try{
    console.log({message:"db is connected"})
}catch(err){
    console.log(err)
    process.exit(1)
}
})

module.exports=dbconnect