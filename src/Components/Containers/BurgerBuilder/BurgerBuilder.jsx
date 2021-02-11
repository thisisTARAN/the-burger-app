
import React,{Component} from 'react';
import Aux from  '../../../hoc/Aux';
import Burger from '../../../Components/Burger/Burger';
import BuildControls from '../../Burger/Buildcontrols/Buildcontrols';
import Modal from '../../../Components/UI/Modal/Modal';
import OrderSummary from '../../../Components/Burger/OrderSummary/OrderSummary';
import errorHandler from '../../../hoc/Iferror/Iferror';
import axios from '../../../axios-orders';
import Spinner from '../../UI/SpinnerForLoading/Spinner';

const INGREDIENTS_PRICES={
    salad:0.5,
    cheese:0.4,
    meat:1.3,
    bacon:0.7
};

class BurgerBuilder extends Component{
    state={
        ingredients:null,
        totalPrice:4,
        purchasable:false,
        orderNowClicked:false,
        loading:false,
        error:false
    }
    componentDidMount(){
        console.log(this.props);
        axios.get('https://react-burger-db3d7.firebaseio.com/ingredients.json')
        .then(response=>{
            this.setState({ingredients:response.data})
        }).catch(error=>{
            this.setState(
                {error:true})
            }
        );
    }
    updatePurchaseState(ingredients){          //to make order button disable 
     
    const sum=Object.keys(ingredients).map((igKey)=>{
        return ingredients[igKey] ;
    }).reduce((sum,el)=>{
        return sum+el;
    });
    this.setState({purchasable:sum>0}); //gives true or false.
}

    addIngredientHandler=(type)=>{      //to add ingredients
        const oldCount=this.state.ingredients[type];
        const updateCount=oldCount+1;
        const updatedIngredients={
            ...this.state.ingredients,
        };
        updatedIngredients[type]=updateCount;
        const priceAddition=INGREDIENTS_PRICES[type];
        const oldPrice=this.state.totalPrice;
        const newPrice=oldPrice+priceAddition;
        this.setState({totalPrice:newPrice,ingredients:updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }
    removeIngredientHandler=(type)=>{           //to remove ingredients
        const oldCount=this.state.ingredients[type];
        if(oldCount<=0){
            return;
        }
        const updateCount=oldCount-1;
        const updatedIngredients={
            ...this.state.ingredients,
        };
        updatedIngredients[type]=updateCount;
        const priceDeduction=INGREDIENTS_PRICES[type];
        const oldPrice=this.state.totalPrice;
        const newPrice=oldPrice-priceDeduction;
        this.setState({totalPrice:newPrice,ingredients:updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }
    orderNowHandler=()=>{
        this.setState({orderNowClicked:true})
    } 
    modalCloseHandler=()=>{
        this.setState({orderNowClicked:false})
    }
     purchaseContinueHandler=()=>{
    //     // alert('you continue');
    //     this.setState({ loading:true});
    //     const order={
    //         ingredients:this.state.ingredients,
    //         price:this.state.totalPrice,
    //         customer:{
    //             name:'Taran',
    //             address:{
    //                 street:'Paschim vihar',
    //                 zipcode:'110063'
    //             },
    //             email:'test@gmail.com',
    //             delivery_speed:'fast'
    //         }
    //     }

        //  axios.post('orders.json',order) //by writing orders we added a node and .json to convert it.
        //         .then(response=>(

        //             this.setState({loading:false,orderNowClicked:false})
        //         )
        //             )
        //         .catch(error=>{
        //             console.log(error)
        //             this.setState({loading:false, orderNowClicked:false})
        //         }
        //             );


        // }
        const queryParams=[];
        for(let i in this.state.ingredients){
            queryParams.push(encodeURIComponent(i)+'='+encodeURIComponent(this.state.ingredients[i]))
        }
        const queryString=queryParams.join('&');
        this.props.history.push({
            pathname:'/checkout',
            search:'?'+queryString
        });
     }

    render(){
     
        const disableInfo={
            ...this.state.ingredients
        };
        for(let key in disableInfo){
            disableInfo[key]=disableInfo[key]<=0  //check of true or false
            //{salad:true,meat:false...}
        }
        let orderSummary=null;
        let burger=this.state.error?<p>error in app</p>:<Spinner/>
        if(this.state.ingredients){
     burger=
     (<Aux>
        
        <Burger ingredients={this.state.ingredients}/>
        
        <BuildControls 
            ingredientAdded={this.addIngredientHandler}
            ingredientRemove={this.removeIngredientHandler}
            disabled={disableInfo}
            price={this.state.totalPrice}
            purchasable={this.state.purchasable}
            orderPlaced={this.orderNowHandler}
        />
    </Aux>)
     orderSummary=  <OrderSummary ingredients={this.state.ingredients} purchaseCancelled={this.modalCloseHandler} purchaseContinued={this.purchaseContinueHandler} price={this.state.totalPrice}/>
        }
        if(this.state.loading){

            orderSummary=<Spinner/>;
        }
        

        return (
            <Aux>
                <Modal show={this.state.orderNowClicked} modalClosed={this.modalCloseHandler}> {/*check for true or not.*/}
                    {/* why to render order summary again and again on addding items so covernt parent element of ordersummary into class based so as to render only when checkout button clicked. */}
                  {orderSummary}
                </Modal>
               {burger}

            </Aux>
        );
     }
}

export default errorHandler(BurgerBuilder,axios);