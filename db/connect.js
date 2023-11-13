const mongoose=require("mongoose")
const dbConnect=async(url)=>{
    try{
    await mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
   })}
   catch(error){
    console.log("something went wrong")
   }
}
module.exports=dbConnect
