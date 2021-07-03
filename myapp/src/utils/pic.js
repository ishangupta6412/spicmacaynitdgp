import React from 'react';

const Pic = (props) => {
    return (
        <div >
             <img style={{border:"4px solid black"}} className="img-responsive img-rounded" src={props.image} alt={props.text} width="150" height="100"/> 
        </div>
    );
};

export default Pic;