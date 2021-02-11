import React,{Component} from 'react';
import Modal from '../../Components/UI/Modal/Modal';
import Aux from '../Aux';

const errorHandler=(WrappedComponent,axios)=>{
    return class extends Component{
        state={
            error:null
        }
        componentWillMount(){
           this.reqInterceptor= axios.interceptors.response.use(req=>{
                this.setState({error:null});
                return req;
            });
            
            this.resInterceptor= axios.interceptors.response.use(res=>res,error=>{
                this.setState({error:error});
            });
        }
        componentWillUnmount(){
            console.log('willUnmount');
           axios.interceptors.request.eject(this.reqInterceptor); 
           axios.interceptors.response.eject(this.resInterceptor); 


        }
        removeErrorScreenHandler=()=>{
            this.setState({error:null})
        }
        render(){
 return(
     <Aux>
         <Modal show={this.state.error} 
            modalClosed={this.removeErrorScreenHandler} >
             {this.state.error?this.state.error.message:null}
          </Modal>
         <WrappedComponent {...this.props}/>
     </Aux>
 );
};
}
    }

export default errorHandler;