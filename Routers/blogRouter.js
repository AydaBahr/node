const  express=require('express')
const user =require('../Models/user')
const blog =require('../Models/blogs')
const route=express.Router()
const multer = require("multer");
const path=require('path');
// route.use(express.static("public"))
const fs = require('fs');
// const cookies = require('cookie-parser')
const jwt= require('jsonwebtoken')
const {verify}=require('crypto')
const key="keystring"
route.use(express.static('../public'));

const filestorage = multer.diskStorage({
   destination: (req, file, cb) => {
      // console.log(req,file);
      cb(null, "./uploads");
   },
   filename: (req, file, cb) => {
      cb(null, Date.now() + "-" + file.originalname.replaceAll(" ", ""));
   },
});
const upload = multer({ storage: filestorage });

 
 route.post("/upload"  ,upload.single('img') ,async function(req , res){
 
 res.status(200).json("file has been uploaded")
 })
// route.use(cookies())
route.post('/addblog'   , upload.single('img') ,async function(req , res)

{
   // let usernameToken = jwt.verify(req.cookies.token,key)
   // let info = await user.findOne({username:usernameToken})
   console.log('eeeeee')
   let addblog = await blog.create({
      // userId: info.userId,
         //  console.log(req.file);
         //  res.send("done");
    img :req.file.filename, 
      title:req.body.title,
      description:req.body.description,
      author:req.body.author
   })

if(addblog){
   let pathfile=path.join(__dirname ,"/public/index.html")
   res.sendFile(pathfile)
   // res.redirect('./index.html')
   // res.json({
   //    status:200,
   // })
}
else{
   res.status(404).send('not found')
}
})
route.get('/index' , async function(_req , res)
{
   let pathfile=path.join(__dirname ,"..","index.html")
   res.sendFile(pathfile)

})
route.get('/home',(req , res)=>{
   res.sendFile(path.join(__dirname,'./public','coffees.html') )
 })

// let addblog = await blogs.create({
//          userId: info.userId,
//          img :req.body.img,
//          tags:req.body.tags,
//          title:req.body.title,
//          description:req.body.description
   
//       })
      // console.log(addblog)
      // console.log(blogs)
   
      route.get('/getblog',async function(_req,res)
   {
     let Blogs= await blog.find();
   if(Blogs)
   {
       res.send(Blogs);
   }
   else
   {
       res.status(404).send('not found');
   }
   })

   // route.get('/index',(req , res)=>{
   //    res.sendFile(path.join(__dirname,'../public','index.html') )
   //  })
   // if(addblog){
   //       let pathfile=path.join(__dirname , "../addblog.html")
   //       res.sendFile(pathfile)
   //    }
   //    else{
   //       res.status(404).send('not found')
   //    }
      
  
module.exports=route;