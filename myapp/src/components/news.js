import React from 'react'
import "./7.css"
import "./1.css"
import "./13.css"
import Event from "./currentevent"

let currDate = new Date();
currDate = currDate.getHours();
let greetings = '';

if(currDate >= 4 && currDate <= 12 ){
    greetings = "Good Morning!";
}
else if(currDate > 12 && currDate <= 16 ){
    greetings = "Good Afternoon!";
}
else {
    greetings = "Good Evening!";
}

const News = (props) => {
    console.log(props)
    return (
        <>
     
        <div classname= "embed-responsive-item col-lg-12 col-sm-12 col-md-12 description" style={{marginTop: '50px' , marginRight: '75px', marginLeftt:'50px'}}>
            <div style={{float: 'right', width:'20em', align: 'right' ,  background: 'lightpink', marginright: '20px', borderRadius:'20px'}}> 
            
            <div >
                <div style={{textAlign:'center',fontSize:'30px',color:'#AC3B61'}}>Current Events</div>
                <hr/>
                <Event />
                
                <Event />
                <hr />
                <h2 style={{textAlign:'center',fontSize:'20px',color:'#AC3B61'}}>{greetings}</h2>
            </div>
            </div>
            
        </div>
        
        </>
    )
}


export default News;