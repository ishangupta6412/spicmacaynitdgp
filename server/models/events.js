const mongoose=require('mongoose')
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt')
const SALT_I=10;
require('dotenv').config()
const validator=require('validator');
const Schema = mongoose.Schema;



const eventSchema=mongoose.Schema({
      name:{
        required:true,
        type:String
    },
    content:{
       type:String
    },
    date:{
    type:String
    },
    type:{
        required:true,
     type:String
    },
    images:{
        type:Array,

    }
   
})



const Event=mongoose.model('Event',eventSchema)


module.exports={Event}