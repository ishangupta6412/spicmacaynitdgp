const express=require('express');
const bodyParser=require('body-parser')
const cookieParser=require('cookie-parser')
const mongoose=require('mongoose')
const formidable=require('express-formidable')
const {auth}=require('./server/middleware/auth')
const cloudinary=require('cloudinary')
const { admin } = require('./server/middleware/admin');
const {Event}=require("./server/models/events")
const {Gallery}=require("./server/models/gallery")
const jwt=require('jsonwebtoken')
var nodemailer = require('nodemailer');
var compression = require('compression'); 
const bcrypt=require('bcrypt')

const app=express()
require('dotenv').config();
mongoose.Promise=global.Promise
mongoose.connect(process.env.MONGODB_URI)
app.use(compression());

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
app.use(cookieParser());

app.use(express.static('myapp/build'))


cloudinary.config({
    cloud_name:'dfh6rn6dm',
    api_key:'564281446315571',
    api_secret:'aIXNbfYY1NE_P4tXvRztbKtn5LI'
})


const defaultemail={from:''}

const sendmail=(emaildata)=>{
    const compemail=Object.assign(defaultemail,emaildata)
     
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: '',
      pass: ''
    }
  });
  
  return  transporter.sendMail(compemail, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}  


app.post('/api/records/searchyr',(req,res)=>{
    console.log(req.body)
    console.log(req.body)
    
    Event.find( 
        {"type":req.body.data}
     ,(err,result)=>{
        
      console.log(result) 
      console.log(err)
      if(err){
        console.log(err)
        return  res.status(400).send(err)
      }
     res.status(200).json({
          resyr:result
    })
})
})

app.get('/api/records/allalum',(req,res)=>{
   console.log('hhhh')
    Record
    .find()
    .exec((err,allalum)=>{
        if(err){
            console.log(err)
            res.status(400).send(err)
            
        }
       return res.status(200).send(allalum)
    })
 })
 
app.get('/api/records/allgallery',(req,res)=>{
    console.log('hhhh')
     Gallery
     .find()
     .exec((err,allimg)=>{
         if(err){
             console.log(err)
             res.status(400).send(err)
             
         }
        return res.status(200).send(allimg)
     })
  })

 

app.post('/api/records/adddetail',(req,res)=>{
    
    bcrypt.compare(req.body.password,'$2b$10$0MKA9k.EPn0eCzFXqfBaTe9ngeghwA/dy45mikj9OV6oymsa.EYtC',function(err,isMatch){
        if(!isMatch) {
         res.send(err)
        }
        if (isMatch){
        
         const record = new Gallery(req.body.data);
         record.save((err,doc)=>{
        console.log(err)
        if(err) return res.json({success:false,err});
        res.status(200).json({
            success: true,doc
        })
        
    })
        }
    } )

})

app.post('/api/records/addevents',(req,res)=>{
    bcrypt.compare(req.body.password,'$2b$10$0MKA9k.EPn0eCzFXqfBaTe9ngeghwA/dy45mikj9OV6oymsa.EYtC',function(err,isMatch){
        if(!isMatch) {
         res.send(err)
        }
        if (isMatch){
    
    const record = new Event(req.body.data);
    record.save((err,doc)=>{
        console.log(err)
        if(err) return res.json({success:false,err});
        res.status(200).json({
            success: true,doc
        })
        console.log(doc.name)  
    })
}
    })
})



app.post('/api/records/records',(req,res)=>{
    Alumni.findOne({
        '_id':req.user._id
     }).then(response=>{
         console.log(response.email)
    Record.findOne({'email':response.email},(err,record)=>{
        if(!record){
        res.status(400).json({
            loginSuccess:false,
            message:'Unable to Add Your Record'
        })
        }else{
            console.log("hfffffh")
            console.log(req.body)
            record.awards.push(req.body)
            record.save((err,doc)=>{
                if(err) return res.json({success:false,err});
                
                res.send(doc.name)
                
            })
        }
    })
   
})
})


app.post('/api/records/education',(req,res)=>{
    Alumni.findOne({
        '_id':req.user._id
     }).then(response=>{
         console.log(response.email)
    Record.findOne({'email':response.email},(err,record)=>{
        if(!record){
        res.status(400).json({
            loginSuccess:false,
            message:'Unable to Add Your Record'
        })
        }else{
            console.log("hfffffh")
            console.log(req.body)
            console.log(req.body)
            record.academicrecords.push(req.body)
            record.save((err,doc)=>{
                if(err) return res.json({success:false,err});
                
                res.send(doc.name)
                
            })
        }
    })
   
})
})

app.post('/api/records/removerecord',(req,res)=>{
    Record.findByIdAndRemove({'email':req.body.email},(err,member)=>{
        if(!member){
        res.status(400).json({
            loginSuccess:false,
            message:'Unable to Add Your Details'
        })
        }
    })   
    })

    app.get('/api/records/getrecords',(req,res)=>{
    Alumni.findOne({
       '_id':req.user._id
    }).then(response=>{
        console.log(response.email)
        Record
        .findOne({'email':response.email}).
        then((record)=>{
            console.log(record)
            res.send(record)
        }).catch(err=>{
            res.send(err)
        })
    }).catch(err=>{
        console.log(err)
    })
    })


app.get('/api/members/removeimage',(req,res)=>{
    let image_id=req.query.public_id
    cloudinary.uploader.destroy(image_id,(error,result)=>{
        if(error) return res.json({success:false,error})
        res.status(200).send('ok')
    })
})

app.post('/api/members/uploadimage',formidable(),(req,res)=>{
    cloudinary.uploader.upload(req.files.file.path,(result)=>{
       res.status(200).send({
           public_id:result.public_id,
           url:result.url
       })
    },{
        public_id:`${Date.now()}`,
        resource_type:'auto'
    })
})

if( process.env.NODE_ENV === 'production' ){
    const path = require('path');
    app.get('/*',(req,res)=>{
        res.sendfile(path.resolve(__dirname,'./myapp','build','index.html'))
    })
}

const port = process.env.PORT || 3002;
app.listen(port,()=>{
    console.log(`Server Running at ${port}`)
})

