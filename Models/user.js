const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username:
    {
        type: String,
        unique: true,
        required: true,
        minlength: 3
    },
    password: {
        type: String,
        required: true,
    },
    email:{
        type:String,
        required:true,
    },
    blogs:
    {
        type:Array,


    }

},
    {
        strict: false,
        versionKey: false
    })
    const user=mongoose.model('users',userSchema)
    module.exports=user;