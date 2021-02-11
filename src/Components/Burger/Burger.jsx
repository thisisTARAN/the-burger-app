import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import {withRouter} from  'react-router-dom';

const Burger=(props)=>{
    let transformedIngridents=Object.keys(props.ingredients) //as we are having an object but for applying map function we need array so converting object to array
    // it will receive cheese,bacon etc as a string into array not there values
    .map(igKey=>{
        return [...Array(props.ingredients[igKey])].map((_,i)=>{
           return  <BurgerIngredient key={igKey+i} type={igKey}/>
            }
            );
        })
        .reduce((arr,next)=>{           //basically checking itmes so that if nill than can add a button to add itmes
            return arr.concat(next)
        });
        console.log(transformedIngridents);
        if(transformedIngridents.length===0){
            transformedIngridents=<p>Please add ingredient</p>
            }

            //alternative approach      
        // const Burger = (props) => {
        //     const ingredients = {...props.ingredients}
        //     const showingIngredient = [];
           
        //     for(let key in ingredients){
        //       for (let i = 0; i < ingredients[key]; i++){
        //         showingIngredient.push(<BurgerIngredient key={key+i} type={key}/>)
        //     }}
           
        //     if(showingIngredient.length === 0) showingIngredient.push('Please start adding ingredients!');
    
//  Lets assuming that props.ingredients =

// {

// bacon: 1,

// cheese: 4,

// meat: 1,

// salad: 2

// }

// First of all, Object.keys(...) returns an array containing a string representation of each properties of the object passed in argument. In our case, we get:

// [

// "bacon",

// "cheese",

// "meat",

// "salad"

// ]

// The map method right after is a method from Array prototype. It iterates on the string array above, and gives us access to each string (each ingredient name).

// Now, what is [...Array(props.ingredients[igKey])]?

// We have to decompose the logic in order to understand it:

// props.ingredients[igKey] is like we wrote props.ingredients['salad'] for example, so we access to the corresponding value in the props.ingredients.

// In the case of salad, we got the number 2.

// And now, what does return [...Array(props.ingredients['salad'])]?

// In JS, you can write [...Array(2)]. This will return [undefined, undefined].

// That means we can iterate twice into it. It is what we want to do, because in the case of the salad, we want to render two BurgerIngredient.

// Finally, we use again map method from this array in order to create (in the case of the salad), two BurgerIngredient components.
    return (
        <div className={classes.Burger}>
        <BurgerIngredient type="bread-top"/>
        {transformedIngridents}
        <BurgerIngredient type="bread-bottom"/>
        </div>

    );
} 
export default withRouter (Burger);
