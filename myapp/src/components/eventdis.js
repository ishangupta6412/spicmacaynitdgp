import React, { Component } from 'react';
import {searchyear} from './actions/recordactions'
import {connect} from 'react-redux'
import '../components/events.css';
class Eventdis extends Component {
    state={
    }
    componentWillMount=()=>{
            this.props.dispatch(searchyear(this.props.location.state.type)).then(res=>{
                this.setState({
                    results:res.payload.resyr
                })
            }).catch(err=>{
                console.log(err)
            })
        
    }
    render() {
        return (
            <div className="events">
                <div className="event-header"><p style={{fontFamily:'Montserrat',color:'#AC3B61'}}>Events</p></div>
                 {
                    this.state.results?
                    this.state.results.length>0 ?
                    this.state.results.map((item,i)=>(
                   <div className="event" key={i}>
                    <div id="event-image"><img src={item.images[0].original} id="event-img"/></div>
                    <div className="event-text">
                        <h1>{item.name}</h1>
                        <div id="event-para"><h5>{item.content}</h5></div>
                    </div>
                    
                   </div>
        )):null
             :null
            }
            </div>
        );
    }
}


const mapStateToProps=(state)=>{    
    return{
      user:state.member,
    }
      
}

export default connect(mapStateToProps)(Eventdis);