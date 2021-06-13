var mongoose=require('mongoose')


var contactSchema=mongoose.Schema({
    name:String,
    email:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
})

var Contact=mongoose.model('suggestions',contactSchema)

module.exports=Contact;