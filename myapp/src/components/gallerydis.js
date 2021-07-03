import React, { Component } from 'react';
import {allgallery} from "./actions/recordactions"

import {connect} from 'react-redux'
import "../components/gallery.css";
class GalleryDis extends Component {
    state={
        images:[]
    }
    componentWillMount=()=>{
        this.props.dispatch(allgallery()).then(res=>{
            this.setState({
                images:res.payload
            })
        }).catch(err=>console.log(err))
    }
    render() {
        return (
        <div className="gallery">
            <div className="gallery-header"><p>Gallery</p></div>
            <div className="gallery-images">
            {
                this.state.images?
             this.state.images.length>0 ?
             this.state.images.map((item,i)=>(
                   <div className="item" key={i}>
                        <div className="image" >
                            <img src={item.images[0].original} style={{height:"250px",width:"250px"}} />
                        </div>
                             <div className="image-title">
                                <p id="title">{item.name}</p>
                            </div>   
                      
                   </div>
        )):null
        :null
             
            }
        </div>
        </div>
        );
    }
}


const mapStateToProps=(state)=>{
    
       
    return{
      record:state.record,
    }
      
}
export default connect(mapStateToProps)(GalleryDis);