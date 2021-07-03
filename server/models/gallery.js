const mongoose=require('mongoose')
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt')
const SALT_I=10;
require('dotenv').config()
const validator=require('validator');
const Schema = mongoose.Schema;



const gallerySchema=mongoose.Schema({
    
    images:{
        type:Array,
        required:true
    },
    name:{
        type:String,
        required:true
    }
   
})



const Gallery=mongoose.model('Gallery',gallerySchema)


module.exports={Gallery}