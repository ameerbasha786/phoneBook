const mongoose=require('mongoose');

const structure=new mongoose.Schema({
    firstname:{type:String},
    Lastname:{type:String},
    phone:{type:String},
    address:{type:String},
    gender:{type:String}
});

const dbData=  mongoose.model("phoneBook",structure);


const dbAccess=async (req,res)=>{
    switch(req.method){
        case 'GET':
            if(req.params.id){
                data=await dbData.findOne({_id:req.params.id})
            }else{
                data= await dbData.find()
            }
            var data;
             res.send(data)
            break;

        case 'POST':
            const create=new dbData(req.body)
            res.send(await create.save());
            break;

        case 'PUT':
           const updated=await dbData.findByIdAndUpdate({_id:req.params.id},req.body,{useFindAndModify:true})
               res.send(updated);
                break;
         case 'DELETE':
                const deleted=await dbData.findOneAndDelete({_id:req.params.id})
                  res.send(deleted)
                    break;
        default:dbData        
                }
                
}

module.exports=dbAccess;