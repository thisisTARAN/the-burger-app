 import React from 'react';
import SingleItem from './SingleItem/SingleItem';
import classes from './NavigationItems.css';
 const navigationItems=(props)=>(
    <ul >
        <li className={classes.NavigationItems}>
        <SingleItem link='/' active={true}>Burger Builder</SingleItem>
        <SingleItem link='/'>Checkout</SingleItem>

        </li>
    </ul>
 );
 export default navigationItems;