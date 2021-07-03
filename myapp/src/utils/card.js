import React, { Component } from 'react';
class Card extends Component {
    render() {
        console.log(this.props.images[0])
        return (
            <div>
             <section id="testimonials">
              <div className="container">
              
              <div className="row">
             <div className="col-md-4 text-center">
               
              <div className="profile">
                <div className="color1">
                <img className="user" src={this.props.images[0]?this.props.images[0].url:null} />
                </div>
              <div className="desco">
                            <div className="b">{this.props.name}</div>
                            <div className="c">{this.props.workplace}</div>
                          <div className="d">{this.props.year}</div>
{/*               
              <div id="linkedin">LinkedIn ID</div>
              <div id="link">https://www.linkedin.com
                /in/rakesh-kumar-sisodiya-835851143/</div> */}
              <button name="submit" type="submit" id="contact-submit" onClick={(e)=>{this.props.evaction(e,this.props)}}>SEE DETAILS</button>
              
            </div>
              </div>            
              </div>
              </div>
              </div>
             </section>       
             </div>
        )}
}

export default Card;