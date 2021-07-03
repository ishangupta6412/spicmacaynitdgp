import React, { Component } from 'react';
import {connect} from 'react-redux'
import {update,validform, generatedata} from '../utils/formtions'
import {adddetails}  from './actions/recordactions'
import FormFields from '../utils/formfields';
import "./11.css"
import FileUpload from '../utils/fileupload'
class Gallery extends Component {

    state={
        formSuccess:false,
        formError:false,
        val:'',
        formdata:{
            name: {
                element:'input',
                value:'',
                config:{
                    name:'name',
                    placeholder:'Enter your name here',
                    type:'text'
                },
                validation:{
                    required:true
                },
                valid:true,
                validationMessage:'',
                label:true
            },
        images:{
            value:[],
            validation:{
                required:false
            },
            valid: false,
            touched: false,
            validationMessage:'',
            label:false
        }
    }
}

updateform=(element)=>{
    const newdata=update(element,this.state.formdata,'register')
    this.setState({
        formdata:newdata,
    })

}

submitform=(event)=>{
    event.preventDefault();
    const isformvalid=validform(this.state.formdata,'register')
    const data=generatedata(this.state.formdata,'register')
    if(true){
        this.props.dispatch(adddetails(data,this.state.val)).then((response)=>{
            if(response.payload.success){
                this.setState({
                    formSuccess:true,
                    formError:false
                })
                alert("Image added")
                window.location.reload();
            }
                else{

                    this.setState({
                        formError:true
                    })
                    alert("Wrong Password")
                }
            }
        )}
    }
imageHandler=(images)=>{
    const newFormData={
        ...this.state.formdata
    }
      newFormData['images'].value=images;
      newFormData['images'].valid=true
      this.setState({
          formData:newFormData
      })

 
}
entry=(event)=>{
    this.setState({
        val:event.target.value
    })
 
}
    render() {
        console.log(this.props)
        return (
            <div className="container">
            <div className='add'>
                <div className="headtitle row">
                    <h2 className="neon" style={{fontFamily:"sans serif"}}>ADD ARTWORK HERE</h2>
                </div>
              <div className="each">
              <FileUpload
                    imageHandler={(images)=>this.imageHandler(images)}
                    reset={this.state.formSuccess}/>
              </div>
            <div className="row"></div>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <div className="jumbotron">

             
            <div className="row">
             <div className="each">
               <FormFields
                  formdata={this.state.formdata.name}
                  id={'name'}
                  change={(event)=>{this.updateform(event)}}
                />
            </div>
            </div>

            <div className="row">
            <h4>PASSWORD</h4>
             <div className="each">
                
               <input type="password" value={this.state.val} onChange={(event)=>{this.entry(event)}}/>
            </div>
            </div>

            <div className="block row">
          <center>   
            <button style={{padding:"10px"}} onClick={(event)=> this.submitform(event)}>
                SUBMIT THIS INFORMATION
             </button>
                </center>
                 </div>
            </div>
            </div>
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    
       
    return{
      user:state.member,
    }
      
}

export default connect(mapStateToProps)(Gallery);