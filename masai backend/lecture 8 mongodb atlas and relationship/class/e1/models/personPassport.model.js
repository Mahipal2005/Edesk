const mongoose=require("mongoose")
const personSchema=new mongoose.Schema({
    name:String,
    age:Number,
    city:String,
    email:String
})  

const PersonModel=mongoose.model("Person",personSchema)

const passportSchema=new mongoose.Schema({
    number:String,
    expiry:String,
    passportNumber:Number,
    PersonId: {type: mongoose.Schema.Types.ObjectId, ref: 'Person'}
})

const PassportModel=mongoose.model("Passport",passportSchema)

module.exports={PersonModel,PassportModel}