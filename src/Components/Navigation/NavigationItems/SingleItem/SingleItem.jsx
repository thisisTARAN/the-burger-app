import React from 'react';
import classes from './SingleItem.css';
const singleItem=(props)=>(
    <li className={classes.SingleItem}> 
    <a href={props.link} 
    className={props.active?classes.active:null} >
        {props.children}
    </a>
    </li>
);
export default singleItem;