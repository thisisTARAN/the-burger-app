import React, { Component } from 'react';
import classes from './Modal.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component{
    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.show!==this.props.show||nextProps.children!==this.props.children){ //nextprop.children is due to show of loading screen when sending data to database
            
            return true;
        }
    }
    componentDidUpdate(){
        console.log('[Modal] isUpdated Now');
    }
    
    render(){
        return(
    <Aux>
    
    <Backdrop show={this.props.show} backDropClick={this.props.modalClosed}/>
    <div className={classes.Modal} style={{
        transform:this.props.show?'translateY(0)':'translateY(-100vh)',
        opacity:this.props.show?'1':'0'
    }}
        >
        {this.props.children}
    </div>
    </Aux>
);
}
}
export default Modal;