
export const validate = (element, formdata= []) => {
    let error = [true,''];


    if(element.validation.email){
        const valid = /\S+@\S+\.\S+/.test(element.value)
        const message = `${!valid ? 'Must be a valid email':''}`;
        error = !valid ? [valid,message] : error;
    }

    if(element.validation.confirm){
        const valid = element.value.trim() === formdata[element.validation.confirm].value;
        const message = `${!valid ? 'Passwords do not match':''}`;
        error = !valid ? [valid,message] : error;
    }

    if(element.validation.required){
        const valid = element.value.trim() !== '';
        const message = `${!valid ? 'This field is required':''}`;
        error = !valid ? [valid,message] : error;
    }

    return error
}

export const update=(element,formdata,type)=> {
const newformdata={...formdata}
const newelement={...newformdata[element.id]}
newelement.value=element.event.target.value
if(element.blur){
    if(type !=='add'){
    let validdata=validate(newelement,newformdata)
    newelement.valid=validdata[0];
    newelement.validationMessage=validdata[1]
}
}

newformdata[element.id]=newelement
return newformdata
};


export const updatesearch=(element,formdata,type)=> {
    const newformdata={...formdata}
    const newelement={...newformdata[element.id]}
    newelement.value=element.event.target.value
    
    newformdata[element.id]=newelement
    return newformdata
    };
    
export const validform=(formdata,type)=>{
let formvalid=true;
for(let key in formdata) {
    formvalid=formdata[key].valid && formvalid;
}   
return formvalid;
}

export const generatedata=(formdata,type)=>{
    let datatosubmit={};
    for( let key in formdata){
        if(key !=='confirmpassword'){
        datatosubmit[key]=formdata[key].value
    }
    }
    return datatosubmit;
}
