import axios from 'axios';
import {
    REGISTER_USER,
    LOGIN_USER,
    AUTH_USER,
    FORGET,
    PASS,
    logoutuser,
    NOTIFICATION,
    REGISTER_ALUM
} from './types';

import { MEMBER_SERVER } from '../utils/misc';


export function registeruser(data){
    console.log('hhhh')
    const request = axios.post(`${MEMBER_SERVER}/register`,data)
        .then(response => response.data);
    // console.log(request)
    return {
        type: REGISTER_USER,
        payload: request
    }
}


export function alumnienter(name,email){
    const data={
        name,email
    }
    const request = axios.post(`${MEMBER_SERVER}/alumnienter`,data)
        .then(response => response.data);
    
    return {
        type: REGISTER_ALUM,
        payload: request
    }
}


export function notific(subject,main,imageurl,argum){
    const data={
        subject,main,imageurl,argum
    }
    const request = axios.post(`${MEMBER_SERVER}/sentnotifications`,data)
        .then(response => response.data);
    
    return {
        type: NOTIFICATION,
        payload: request
    }
}


export function forgetpass(reset,data){
    const datar={
        reset,
        data
    }
    console.log(datar)
    const request = axios.post(`${MEMBER_SERVER}/forgetpass`,datar)
        .then(response => response.data);
    console.log(request)
    return {
        type: PASS,
        payload: request
    }
}


export function auth(){

    const request = axios.get(`${MEMBER_SERVER}/auth`)
    .then(response => response.data);

    return {
        type: AUTH_USER,
        payload: request
    }

}


export function loginuser(data){
    const request = axios.post(`${MEMBER_SERVER}/login`,data)
        .then(response => response.data);
    
    return {
        type: LOGIN_USER,
        payload: request
    }
}

export function forget(data){
    const request = axios.post(`${MEMBER_SERVER}/forgetpassword`,data)
        .then(response => response.data);
    
    return {
        type: FORGET,
        payload: request
    }
}



export function log(){
    const request = axios.get(`${MEMBER_SERVER}/logout`)
     .then(response => response.data);
 
 return {
     type:logoutuser,
     payload: request
 }
}