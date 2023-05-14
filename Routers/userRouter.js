
const express=require('express')
const user =require('../Models/user')
const blogs =require('../Models/blogs')

const route=express.Router()
const path=require('path');
// const cookies = require('cookie-parser')
// const jwt= require('jsonwebtoken')
// const {vertify}=require('crypto')
// const multer=require('multer')
const key="keystring"

// route.use(cookies())
route.post('/register',function(req,res)
{
    let pathfile=path.join(__dirname,"login.html");
    user.create(req.body)
    res.send( pathfile)
})


route.get("/login", (_req, res) => {
   res.render("login")
})
route.post('/login', async function(req,res)
{
   let storedName= await user.findOne({ username:  req.body.username })
   console.log(req.body)
   console.log(storedName)

// let token= jwt.sign(storedName.username,key)
// res.cookie('token', token,{maxAge : 3600000})

   if (storedName) {
      if(storedName.password== req.body.password)
      {
          let pathfile=path.join(__dirname,"..","index.html");
         // console.log(pathfile)
        res.json({
         status:200,

        })

       }
       else{
          console.log("Invalid password")
          res.json({
            status:401,
            message:"invalid credentials"    
            })
         }
 
    }
    else {
      console.log("error")
       res.json({
         status:401,
         message:"invalid credentials"

        })
    }

})

module.exports=route;