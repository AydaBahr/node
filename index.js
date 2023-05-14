require('./Config/connection')
const express=require('express')
const app=express()
app.use(express.static('public'));
const multer = require("multer");
const userRoute=require('./Routers/userRouter')
const blogRoute=require('./Routers/blogRouter')
const cors=require('cors')
const path=require('path');

const bodyParser=require('body-parser')



// app.get('/home',(req , res)=>{
//   res.sendFile(path.join(__dirname,'./public','coffees.html') )
// })
app.get('/',(req , res)=>{
  res.sendFile(path.join(__dirname,'index.html') )
})

app.use(cors())
// app.use(express.static( 'upload'));




// app.use(express.static(__dirname+"/public"));
// app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/user',userRoute)
app.use('/blog',blogRoute)

app.listen(7000, () => console.log(` listening`))