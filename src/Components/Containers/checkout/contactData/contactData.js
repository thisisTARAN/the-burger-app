import React,{Component} from'react';
import Button from '../../../../Components/UI/Button/Button';
class ContactData extends Component{
state={
    name:' ',
    email:' ',
    address:{
        street:' ',
        postalcode:' '
    }
}

render(){
    return (
        <div>
                <h4>Enter Your Contact Data</h4>
                <form >
                    <input type="text" name="name" placeholder="Your name"/>
                    <input type="text" name="email" placeholder="Your email"/>
                    <input type="text" name="postal" placeholder="Your postal"/>
                    <input type="text" name="street" placeholder="Your street"/>
                    <Button btnType="Success">Order</Button>
                </form>
        </div>
    )
}
}
export default ContactData;