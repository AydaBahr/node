
const mongoose=require('mongoose')
const blogSchema=mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId, ref:"users"
    },
    img :{
        type:String,
    },
    title:{
        type:String,
        required:true,
       
    },
    description:{
        type:String,
        required:true,
    },

    author:{
        type:String,
        required:true
    },
    // tags:{
    //     type:['String'],
    //     maxlength:10
    // }
},
{
    strict:false,
    versionKey:false
})

const blog=mongoose.model('blogs',blogSchema)
module.exports =blog