import React, { Component } from 'react';

class FormFields extends Component {
    
    showError = () => {
        let errorMessage = null;

        if(this.props.formdata.validation && !this.props.formdata.valid){
            errorMessage = (
                <div className="error_label">
                    {this.props.formdata.validationMessage}
                </div>
            )
        }

        return errorMessage;
    }



    generateform=()=>{
        let template=null;
        let id=this.props.id
        switch(this.props.formdata.element){
          case('input'):
          template=(<div>
              {this.props.formdata.label?
            <div className="label_inputs" id="email"><label style={{fontFamily:'sans serif',fontSize:"20px"}}>{this.props.formdata.config.name}</label></div>
            :null  
            }
            <input className="input" type={this.props.formdata.config.type} placeholder={this.props.formdata.config.placeholder} 
            onChange={(event)=>{this.props.change({event,id})}} name={this.props.formdata.config.name}
            onBlur={(event)=> this.props.change({event,id,blur:true})}/>
          {this.showError()}
          </div>)
        
        break;
        case('textarea'):
        template = (
            <div>
                {this.props.formdata.label?
                <div className="label_inputs" id="email" style={{fontFamily:'sans serif'}}>
                    {this.props.formdata.config.name}
                </div>
                :null}
               <textarea
               className="textarea"
                type={this.props.formdata.config.type} 
                placeholder={this.props.formdata.config.placeholder}
                value={this.props.formdata.value}
                onBlur={(event)=> this.props.change({event,id,blur:true})}
                onChange={(event)=> this.props.change({event,id}) }
                style={{borderRadius:'10px',height:"100px"}}
               />
              {this.showError()}
            </div>
        )
        break;
        default:
            template=null
    }
    return template
}
    render() {
        return (
            <div>
                {this.generateform()}
            </div>
        );
    }
}

export default FormFields;