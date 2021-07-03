import React from 'react';
import Card from './card';
const Gen = (props) => {
    const generatecards=()=>(       
      props.recalumni?
             props.recalumni.map((item,i)=>(
                 
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              
                 <Card
                 key={i}
                 name={item.name}
                 workplace={item.workplace}
                  year={item.year}
                  email={item.email}
                  evaction={props.change}
                  additional={item.additional}
                  degree={item.currentdegree}
                  images={item.images}
                 />
              
             </div>
            
             )):null
        )
    return (
        <div>
            {generatecards()}
        </div>
    );
};

export default Gen;