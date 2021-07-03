import React, { Component } from 'react';
import Dropzone from 'react-dropzone'
import axios from 'axios'
import CircularProgress from '@material-ui/core/CircularProgress'

class FileUpload extends Component {
    constructor(){
        super()
        this.state={
         uploadingFiles:[],
         uploading:false
        }

    }

    onDrop=(files)=>{
        this.setState({uploading:true});
        let formData=new FormData();
        const config={
            header:{'content-type':'multipart/form-data'}
        }
        formData.append("file",files[0])
        axios.post('/api/members/uploadimage',formData,config)
       .then(response=>{
           
           this.setState({
               uploading:false,
               uploadingFiles:[
                   ...this.state.uploadingFiles,
                 {  
                     original:response.data.url,
                     thumbnail:response.data.url
                
                }
               ]
               },()=>{
                   this.props.imageHandler(this.state.uploadingFiles)
               })
               console.log(this.state.uploadingFiles)
       })
    }
    
    onRemove=(id)=>{
       axios.get(`/api/members/removeimage?public_id=${id}`).then(response=>{
           let images=this.state.uploadingFiles.filter((item)=>{
           return  item.public_id !==id;
    
           })
    
       this.setState({
           uploadedFiles:images
       },()=>{
           this.props.imageHandler(images)
       })
   })
}
    showuploadedimages=()=>(
      this.state.uploadingFiles.map(item=>(
      <div className="dropzone_box"
      key={item.public_id}
      onClick={()=>this.onRemove(item.public_id)}
      >
          <div className="wrap"
          style={{background:`url(${item.original}) no-repeat`}}
          >
          </div>
      </div>
      ))
    )
    render() {
        return (
            <div>
                <section>
                    <div className="dropzone clear">
                    <Dropzone
                    onDrop={(e)=>this.onDrop(e)}
                    multiple={false}
                    className="dropzone_box"
                        >
                 <div className="wrap">
                   +
                 </div>

                    </Dropzone>
                {this.showuploadedimages()}
                {this.state.uploading?
                <div className="dropzone_box" style={{
                   textAlign:'center',
                   paddingTop:'60px'
                }}>
                 <CircularProgress
                 style={{color:'#00bcd4'}}
                 thickness={7}
                 />

                    </div>
                 :null
                }
                    </div>
                </section>
            </div>
        );
    }
}

export default FileUpload;