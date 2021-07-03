import React from 'react'
import a from './images/1.jpg'
import b from './images/4.jpg'
import c from './images/5.jpg'
import d from './images/10.jpg'
import HeaderID from './headerInSlideShow'



const Slider = (props) => {
    console.log(props)
    return (
        <>
        
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={d} className="d-block w-100" alt="..." />
                            
                    </div>
                    <div className="carousel-item">
                        <img src={b} className="d-block w-100" alt="..." />
                        
                    </div>
                    <div className="carousel-item">
                        <img src={c} className="d-block w-100" alt="..." />
                        
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}


export default Slider;